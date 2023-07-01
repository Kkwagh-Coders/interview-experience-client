import aptitudeSmallImage from '../images/quizzes/aptitude-small.jpg';
import aptitudeImage from '../images/quizzes/aptitude.jpg';
import cnsSmallImage from '../images/quizzes/cns-small.jpg';
import cnsImage from '../images/quizzes/cns.jpg';
import dbmsSmallImage from '../images/quizzes/dbms-small.jpg';
import dbmsImage from '../images/quizzes/dbms.jpg';
import osSmallImage from '../images/quizzes/os-small.jpg';
import osImage from '../images/quizzes/os.jpg';

export const quizTopics = [
  {
    topic: 'aptitude',
    title: 'Aptitude',
    description: 'Practice aptitude and yourself for Interviews',
    image: aptitudeImage,
    smallImage: aptitudeSmallImage,
  },
  {
    topic: 'cns',
    title: 'Computer Networks',
    description: 'Practice CNS and yourself for Interviews',
    image: cnsImage,
    smallImage: cnsSmallImage,
  },
  {
    topic: 'dbms',
    title: 'Database',
    description: 'Practice DBMS and yourself for Interviews',
    image: dbmsImage,
    smallImage: dbmsSmallImage,
  },
  {
    topic: 'os',
    title: 'Operating System',
    description: 'Practice OS and yourself for Interviews',
    image: osImage,
    smallImage: osSmallImage,
  },
];

// The quizTopicList is auto generated using the above quizTopics Detail
export const quizTopicList = quizTopics.map(({ topic }) => topic);
