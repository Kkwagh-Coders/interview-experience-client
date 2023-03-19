export type QuizFormData = {
  question: string;
  answer: string;
  detailedSolution: string;
  wrongOption1: string;
  wrongOption2: string;
  wrongOption3: string;
  topic: string;
  difficulty: number;
};

export type QuizData = {
  question: string;
  answer: string;
  detailedSolution: string;
  wrongOption1: string;
  wrongOption2: string;
  wrongOption3: string;
  topic: string;
  difficulty: number;
  options: string[];
};

export type QuizSubmitData = {
  topic: string | null;
  totalQuestionsCount: number;
  correctAnswerCount: number;
};

export type QuizGameState = 'menu' | 'quiz' | 'endScreen';
export type QuizReduxState = {
  gameState: QuizGameState;
  topic: string | null;
  isLoading: boolean;
  isError: boolean;
  quizQuestions: QuizData[] | null;
  currentQuestion: number;
  isQuestionAnswered: boolean;
  optionSelected: string | null;
  totalQuestionsCount: number;
  correctAnswerCount: number;
};
