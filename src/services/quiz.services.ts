import axios from 'axios';
import { QuizFormData, QuizGetData, QuizSubmitData } from '../types/quiz.types';
import getAuthToken from '../utils/getAuthToken';
import { BASE_API_URL } from './serverConfig';

export const createQuizQuestion = (data: QuizFormData) => {
  const url = `${BASE_API_URL}/quiz`;
  const options = {
    headers: { token: getAuthToken() },
  };
  return axios
    .post<{ message: string }>(url, data, options)
    .then((response) => response.data);
};

export const getQuizQuestions = async (topic: string, count: number) => {
  const url = `${BASE_API_URL}/quiz`;
  const options = {
    params: {
      topic,
      count,
    },

    headers: { token: getAuthToken() },
  };
  return axios
    .get<{ message: string; data: QuizGetData[] }>(url, options)
    .then((response) => {
      const questionList = response.data.data;
      return questionList.map((question) => {
        const optionsData = [
          question.answer,
          question.wrongOption1,
          question.wrongOption2,
          question.wrongOption3,
        ];

        const quizOptions = optionsData
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

        return { ...question, options: quizOptions };
      });
    });
};

export const submitQuizResult = (data: QuizSubmitData) => {
  const url = `${BASE_API_URL}/quiz/submit`;
  const options = {
    headers: { token: getAuthToken() },
  };

  return axios
    .post<{ message: string }>(url, data, options)
    .then((response) => response.data);
};

export const getStreak = (userId: string | undefined) => {
  const url = `${BASE_API_URL}/quiz/streak`;
  const options = {
    params: {
      userId,
    },
  };

  type StreakData = {
    message: string;
    streakCount: number;
    dailyQuizDone: boolean;
  };

  return axios.get<StreakData>(url, options).then((response) => response.data);
};
