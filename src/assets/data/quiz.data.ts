import aptitudeImage from '../images/quizzes/aptitude.jpg';
import cnsImage from '../images/quizzes/cns.jpg';
import dbmsImage from '../images/quizzes/dbms.jpg';
import osImage from '../images/quizzes/os.jpg';

export const quizTopics = [
  {
    topic: 'aptitude',
    title: 'Aptitude',
    description: 'Practice aptitude and yourself for Interviews',
    image: aptitudeImage,
  },
  {
    topic: 'cns',
    title: 'Computer Networks',
    description: 'Practice CNS and yourself for Interviews',
    image: cnsImage,
  },
  {
    topic: 'dbms',
    title: 'Database',
    description: 'Practice DBMS and yourself for Interviews',
    image: dbmsImage,
  },
  {
    topic: 'os',
    title: 'Operating System',
    description: 'Practice OS and yourself for Interviews',
    image: osImage,
  },
];

// The quizTopicList is auto generated using the above quizTopics Detail
export const quizTopicList = quizTopics.map(({ topic }) => topic);
