/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  QuizData,
  QuizGameState,
  QuizReduxState,
} from '../../types/quiz.types';

const initialState: QuizReduxState = {
  gameState: 'menu',
  topic: null,
  isLoading: true,
  isError: false,
  quizQuestions: null,
  currentQuestion: 0,
  isQuestionAnswered: false,
  optionSelected: null,
  totalQuestionsCount: 0,
  correctAnswerCount: 0,
};

export const QuizSlice = createSlice({
  name: 'quizState',
  initialState,

  reducers: {
    setQuizState: (
      state,
      action: PayloadAction<{ gameState: QuizGameState }>,
    ) => {
      state.gameState = action.payload.gameState;
    },
    setQuizTopic: (state, action: PayloadAction<{ topic: string }>) => {
      state.topic = action.payload.topic;
    },
    setFetchState: (
      state,
      action: PayloadAction<{ totalQuestionsCount: number }>,
    ) => {
      state.isLoading = true;
      state.isError = false;
      state.isQuestionAnswered = false;
      state.quizQuestions = null;
      state.currentQuestion = 0;
      state.totalQuestionsCount = action.payload.totalQuestionsCount;
      state.correctAnswerCount = 0;
    },
    setIsLoadingFalse: (state) => {
      state.isLoading = false;
    },
    setIsErrorTrue: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    setIsQuestions: (
      state,
      action: PayloadAction<{ quizQuestions: QuizData[] }>,
    ) => {
      state.isLoading = false;
      state.quizQuestions = action.payload.quizQuestions;
    },
    setIsQuestionAnsweredTrue: (
      state,
      action: PayloadAction<{
        isCorrectAnswer: boolean;
        optionSelected: string;
      }>,
    ) => {
      state.isQuestionAnswered = true;
      state.optionSelected = action.payload.optionSelected;
      if (action.payload.isCorrectAnswer) {
        state.correctAnswerCount += 1;
      }
    },
    incrementCurrentQuestion: (state) => {
      state.currentQuestion += 1;
      state.optionSelected = null;
      state.isQuestionAnswered = false;

      if (state.currentQuestion === state.totalQuestionsCount) {
        state.gameState = 'endScreen';
      }
    },
    resetState: (state) => {
      state.gameState = 'menu';
      state.topic = null;
      state.isLoading = true;
      state.isError = false;
      state.quizQuestions = null;
      state.currentQuestion = 0;
      state.isQuestionAnswered = false;
      state.optionSelected = null;
      state.totalQuestionsCount = 0;
      state.correctAnswerCount = 0;
    },
  },
});

export default QuizSlice.reducer;
export const quizActions = QuizSlice.actions;
