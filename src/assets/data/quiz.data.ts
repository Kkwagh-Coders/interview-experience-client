export const quizTopics = [
  {
    topic: 'aptitude',
    title: 'Aptitude',
    description: 'Practice aptitude and yourself for Interviews',
    image: 'aptitude.jpg',
  },
  {
    topic: 'cns',
    title: 'Computer Networks',
    description: 'Practice CNS and yourself for Interviews',
    image: 'cns.jpg',
  },
  {
    topic: 'dbms',
    title: 'Database',
    description: 'Practice DBMS and yourself for Interviews',
    image: 'dbms.jpg',
  },
  {
    topic: 'os',
    title: 'Operating System',
    description: 'Practice OS and yourself for Interviews',
    image: 'os.jpg',
  },
];

// The quizTopicList is auto generated using the above quizTopics Detail
export const quizTopicList = quizTopics.map(({ topic }) => topic);
