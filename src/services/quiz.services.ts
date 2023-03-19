import { QuizData, QuizFormData, QuizSubmitData } from '../types/quiz.types';
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

export const getQuizQuestions = async (topic: string, count: number) => {
  const data = { topic, count };

  const questions = [
    {
      question:
        'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
      answer: '1/8',
      wrongOption1: '1/3',
      wrongOption2: '2/8',
      wrongOption3: '1/16',
      topic: 'aptitude',
      detailedSolution: `This is a simple division series; each number is one-half of the previous number.
      In other terms to say, the number is divided by 2 successively to get the next result.`,
      difficulty: 5,
    },
    {
      question:
        'Arrange the words given below in a meaningful sequence. 1. Key 2. Door 3. Lock 4. Room 5. Switch on',
      answer: '1, 3, 2, 4, 5',
      wrongOption1: '1, 2, 3, 4, 5',
      wrongOption2: '2, 3, 4, 1, 5',
      wrongOption3: '3, 1, 2, 4, 5',
      topic: 'aptitude',
      detailedSolution: '',
      difficulty: 5,
    },
    {
      question:
        'Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?',
      answer: '25',
      wrongOption1: '22',
      wrongOption2: '24',
      wrongOption3: '26',
      topic: 'aptitude',
      detailedSolution:
        'In this simple alternating subtraction and addition series; 1 is subtracted, then 2 is added, and so on. ',
      difficulty: 5,
    },
    {
      question:
        'An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is: ',
      answer: '4.04%',
      wrongOption1: '2%',
      wrongOption2: '2.02%',
      wrongOption3: '4%',
      topic: 'aptitude',
      detailedSolution: `
      100 cm is read as 102 cm.
      A1 = (100 x 100) cm^2 and A2 (102 x 102) cm^2.
      
      (A2 - A1) = [(102)^2 - (100)^2] = (102 + 100) x (102 - 100) = 404 cm^2.
      Percentage error = (404 x 100) / (100 * 100) = 4.04%
      `,
      difficulty: 5,
    },
    {
      question:
        'A man has Rs.480 in the denominations of one-rupee notes, five-rupee notes and ten-rupee notes. The number of notes of each denomination is equal. What is the total number of notes that he has ?',
      answer: '90',
      wrongOption1: '45',
      wrongOption2: '60',
      wrongOption3: '75',
      topic: 'aptitude',
      detailedSolution: `
      Let number of notes of each denomination be x.
      Then x + 5x + 10x = 480
      16x = 480
      x = 30.

      Hence, total number of notes = 3x = 90.
      `,
      difficulty: 5,
    },
  ];

  // prettier-ignore
  const questionsList = await fakeRequest(
    data,
    { message: 'Question Added Successfully', questions },
    false,
  ).then((response: any) => response.expectedResponse.questions) as QuizData[];

  return questionsList.map((question) => {
    const optionsData = [
      question.answer,
      question.wrongOption1,
      question.wrongOption2,
      question.wrongOption3,
    ];

    const options = optionsData
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return { ...question, options };
  }) as QuizData[];
};

export const submitQuizResult = (data: QuizSubmitData) => {
  console.log(data);
  return fakeRequest(
    data,
    { message: 'Result Submitted Successfully' },
    false,
  ).then((response: any) => response.expectedResponse) as Promise<{
    message: string;
  }>;
};
