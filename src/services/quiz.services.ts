import axios from 'axios';
import { QuizFormData, QuizGetData, QuizSubmitData } from '../types/quiz.types';
import { BASE_API_URL } from './serverConfig';

export const createQuizQuestion = (data: QuizFormData) => {
  const url = `${BASE_API_URL}/quiz`;
  return axios
    .post<{ message: string }>(url, data, { withCredentials: true })
    .then((response) => response.data);
};

export const getQuizQuestions = async (topic: string, count: number) => {
  const url = `${BASE_API_URL}/quiz`;
  const options = {
    params: {
      topic,
      count,
    },
    withCredentials: true,
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
  return axios
    .post<{ message: string }>(url, data, { withCredentials: true })
    .then((response) => response.data);
};

export const getStreak = (userId: string | undefined) => {
  const url = `${BASE_API_URL}/quiz/streak`;
  const options = {
    params: {
      userId,
    },
  };

  return axios
    .get<{ message: string; streakCount: number }>(url, options)
    .then((response) => response.data);
};
