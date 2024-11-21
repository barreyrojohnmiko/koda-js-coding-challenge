import './styles.scss';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ResultListView from '../../views/resultList/ResultList.tsx';

const quizData = {
  response_code: 0,
  results: [
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'General Knowledge',
      question: 'You can legally drink alcohol while driving in Mississippi.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Video Games',
      question:
        'Big the Cat is a playable character in &quot;Sonic Generations&quot;.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Television',
      question: 'In &quot;Star Trek&quot;, Klingons are aliens.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Video Games',
      question:
        'The end credits sequence in Grand Theft Auto 5 is over half an hour long.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Video Games',
      question:
        'In &quot;Sonic Adventure&quot;, you are able to transform into Super Sonic at will after completing the main story.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Video Games',
      question:
        'In the Monster Hunter Series, it is possible to capture Elder Dragons.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'General Knowledge',
      question: 'When you cry in space, your tears stick to your face.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Science: Computers',
      question:
        'Ada Lovelace is often considered the first computer programmer.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Science: Computers',
      question: '&quot;HTML&quot; stands for Hypertext Markup Language.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Japanese Anime &amp; Manga',
      question: 'No Game No Life first aired in 2014.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
  ],
};

export default function ResultPage() {
  const { /*quizData,*/ correctAnswers } = useSelector(
    (state: any) => state.appReducers
  );

  return (
    <Box className="result-container">
      <Box className="title">
        <Typography variant="h3">
          You scored <br /> {correctAnswers} / {quizData?.results?.length}
        </Typography>
      </Box>

      <Box className="page-body">
        <ResultListView />
      </Box>

      <Link className="btn-play-again" to="/">
        PLAY AGAIN
      </Link>
    </Box>
  );
}
