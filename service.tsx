import axios from "axios";

export const getProblems = async(numberOfProblems: number) => {
    try {
        const response = await axios.get(`https://akademiazadan.pl/api/v1/get_problems/?size=${numberOfProblems}`);
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
