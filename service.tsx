import axios from "axios";

export const getBarometerProblems = async() => {
    try {
        const response = await axios.get(`https://akademiazadan.pl/api/v2/get_barometr_problems/`);
        return response.data;
      } catch (error) {
        console.error("Error adding problem:", error);
      }
}

export const checkBarometerAnswers = async (problems: { task_id: number; user_answer: string }[]) => {
  try {
    const response = await fetch("https://akademiazadan.pl/api/v1/validate_barometr_problems/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ problems: problems }),
    });

    if (!response.ok) {
      throw new Error(`Błąd serwera: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Błąd podczas wysyłania odpowiedzi:", error);
    return null;
  }
};

export const getCurrentDailyProblem = async() => {
  try {
      const response = await axios.get(`https://akademiazadan.pl/api/v1/get_current_daily_problem/`);
      return response.data;
    } catch (error) {
      console.error("Error getting daily problem:", error);
    }
}

export const getProblems = async(numberOfProblems: number) => {
  try {
      const response = await axios.get(`https://akademiazadan.pl/api/v1/get_problems/?size=${numberOfProblems}`);
      return response.data;
    } catch (error) {
      console.error("Error adding problem:", error);
    }
}

export const login = async(email: string, password: string) => {
  const payload = {
    email: email,
    password: password
  }
  try {
      const response = await axios.post(`https://akademiazadan.pl/api/v1/login`, payload);
      return response.data;
    } catch (error) {
      console.error("Error while login:", error);
    }
}

export const register = async(email: string, username: string, password: string, confirmPassword: string) => {
  const payload = {
    email: email,
    username: username,
    password1: password,
    password2: confirmPassword,
    phone: "997"
  }
  try {
      const response = await axios.post(`https://akademiazadan.pl/api/auth/registration/`, payload);
      return response.data;
    } catch (error) {
      console.error("Error while register", error);
    }
}