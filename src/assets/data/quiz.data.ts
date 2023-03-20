export const quizTopics = [
  {
    topic: 'aptitude',
    title: 'Aptitude',
    description: 'Practice aptitude and yourself for Interviews',
    image: 'aptitude.png',
  },
  {
    topic: 'cns',
    title: 'Computer Networks and Security',
    description: 'Practice CNS and yourself for Interviews',
    image: 'cns.png',
  },
  {
    topic: 'dbms',
    title: 'Database Management System',
    description: 'Practice DBMS and yourself for Interviews',
    image: 'dbms.png',
  },
  {
    topic: 'os',
    title: 'Operating System',
    description: 'Practice OS and yourself for Interviews',
    image: 'os.png',
  },
];

// The quizTopicList is auto generated using the above quizTopics Detail
export const quizTopicList = quizTopics.map(({ topic }) => topic);
