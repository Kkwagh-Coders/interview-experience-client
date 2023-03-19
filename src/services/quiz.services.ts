import { QuizFormData } from '../types/quiz.types';
import fakeRequest from './fakeRequest';

export const createQuizQuestion = (data: QuizFormData) => {
  console.log(data);
  return fakeRequest(
    data,
    { message: 'Question Added Successfully' },
    false,
  ).then((response: any) => response.expectedResponse) as Promise<{
    message: string;
  }>;
};

export default {};
