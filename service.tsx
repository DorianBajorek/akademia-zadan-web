import axios from './axiosInstance';
//const prefix = 'http://127.0.0.1:8000';
const prefix  = "https://www.akademiazadan.pl"

export const getBarometerProblems = async () => {
  try {
    const response = await axios.get(`${prefix}/api/v2/get_barometr_problems/`);
    return response.data;
  } catch (error) {
    console.error('Error adding problem:', error);
  }
};

export const checkBarometerAnswers = async (
  problems: { task_id: number; user_answer: string }[]
) => {
  try {
    const response = await fetch(`${prefix}/api/v1/validate_barometr_problems/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problems: problems }),
    });

    if (!response.ok) {
      throw new Error(`Błąd serwera: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Błąd podczas wysyłania odpowiedzi:', error);
    return null;
  }
};

export const getCurrentDailyProblem = async () => {
  try {
    const response = await axios.get(`${prefix}/api/v1/get_current_daily_problem/`);
    return response.data;
  } catch (error) {
    console.error('Error getting daily problem:', error);
  }
};

export const getProblems = async (numberOfProblems: number) => {
  try {
    const response = await axios.get(`${prefix}/api/v1/get_problems/?size=${numberOfProblems}`);
    return response.data;
  } catch (error) {
    console.error('Error adding problem:', error);
  }
};

export const login = async (username: string, password: string) => {
  const payload = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post(`${prefix}/api/auth/login/`, payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error while login:', error);
  }
};

export const register = async (
  email: string,
  username: string,
  password: string,
  confirmPassword: string
) => {
  const payload = {
    email: email,
    username: username,
    password1: password,
    password2: confirmPassword,
    phone: '997',
  };
  try {
    const response = await axios.post(`${prefix}/api/auth/registration/`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAuthUserData = async (token: string) => {
  try {
    const response = await axios.get(`${prefix}/api/auth/v1/current_user_details/`, {
      headers: authHeader(token),
    });
    console.log('User data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error while fetching user data', error);
  }
};

export const getUserData = async (token: string) => {
  const res = await axios.get(`${prefix}/api/users/v1/user_data/`, {
    headers: authHeader(token),
  });
  return res.data;
};

export const getStreak = async (token: string) => {
  const res = await axios.get(`${prefix}/api/users/v1/streak/`, {
    headers: authHeader(token),
  });
  return res.data;
};

export const getTotalSolved = async (token: string) => {
  console.log('Token wysyłany do getTotalSolved:', token);
  const res = await axios.get(`${prefix}/api/users/v1/solved_problems/`, {
    headers: authHeader(token),
  });
  return res.data;
};

export const getActivityDays = async (token: string) => {
  const res = await axios.get(`${prefix}/api/users/v1/activity_days/`, {
    headers: authHeader(token),
  });
  return res.data;
};

export const getBadges = async (token: string) => {
  const res = await axios.get(`${prefix}/api/users/v1/user/badges/`, {
    headers: authHeader(token),
  });
  console.log('Badges data:', res.data);
  return res.data;
};

export const google = async (code: string | null) => {
  console.log('Google code:', code);
  const payload = {
    id_token: code,
  };
  try {
    const response = await axios.post(`${prefix}/api/auth/v1/google/`, payload, {});
    return response.data;
  } catch (error) {
    console.error('Error while register', error);
  }
};

export const getFieldsProgress = async (token: string) => {
  try {
    const response = await axios.get(`${prefix}/api/matura-podstawowa/v1/fields-progress/`, {
      headers: authHeader(token),
    });
    return response.data;
  } catch (error) {
    console.error('Error while fetching fields progress', error);
  }
};

export const getTopicsProgress = async (field: string, token: string) => {
  try {
    const response = await axios.get(`${prefix}/api/matura-podstawowa/v1/topics-progress/`, {
      headers: authHeader(token),
    });
    return response.data;
  } catch (error) {
    console.error('Error while fetching fields progress', error);
  }
};

export const solveProblem = async (taskId: string, token: string) => {
  try {
    const response = await axios.post(
      `${prefix}/api/matura-podstawowa/v1/problem/${taskId}/complete/`,
      {},
      {
        headers: authHeader(token),
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error while fetching fields progress', error);
    throw error;
  }
};

export const getProblemProgress = async (field: string, topic: string, token: string) => {
  try {
    const response = await axios.get(
      `${prefix}/api/matura-podstawowa/v2/problems-status/${field}/${topic}/`,
      {
        headers: authHeader(token),
      }
    );
    console.log('Problem progress response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error while fetching fields progress', error);
    throw error;
  }
};

export const solveWithAI = async (prompt: string, taskId?: number) => {
  const payload = {
    prompt: prompt,
    task_id: taskId?.toString(),
  };

  const startTime = Date.now();

  try {
    const response = await axios.post(`${prefix}/api/v1/solve_ai/`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const elapsed = Date.now() - startTime;

    if (elapsed < 3000) {
      const remainingDelay = 5000 - elapsed;
      await new Promise((resolve) => setTimeout(resolve, remainingDelay));
    }

    return response.data;
  } catch (error) {
    console.error('Error while solving with AI:', error);
    throw error;
  }
};

function authHeader(token: string) {
  if (!token) return {};

  if (token.split('.').length === 3) {
    // prawdopodobnie JWT (zawiera 2 kropki)
    return { Authorization: `Bearer ${token}` };
  } else {
    // klasyczny token DRF
    return { Authorization: `Token ${token}` };
  }
}
