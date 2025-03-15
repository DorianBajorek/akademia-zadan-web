import axios from "axios";

export const getProblems = async(numberOfProblems: number) => {
    try {
        const response = await axios.get(`https://akademiazadan.pl/api/v1/get_problems/?size=${numberOfProblems}`);
        return response.data;
      } catch (error) {
        console.error("Error adding problem:", error);
      }
}

const mockChecker = {
    results: [
      {
        "task_id": 1,
        "is_correct": true,
        "correct_answer": "d",
        "user_answer": "$2^{16}$",
        "feedback": "Twoja odpowiedź jest poprawna!"
      },
      {
        "task_id": 4,
        "is_correct": false,
        "correct_answer": "d",
        "user_answer": "$2^{16}$",
        "feedback": "Twoja odpowiedź jest niepoprawna. Prawidłowa odpowiedź to: d."
    }
    ],
    "summary": {
       "total_tasks": 2,
       "correct_answers": 1,
       "incorrect_answers": 1,
       "success_rate": 50.0
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

export const getCurrentDailyProblem = async(numberOfProblems: number) => {
  try {
      const response = await axios.get(`https://akademiazadan.pl/api/v1/get_current_daily_problem/`);
      return response.data;
    } catch (error) {
      console.error("Error getting daily problem:", error);
    }
}