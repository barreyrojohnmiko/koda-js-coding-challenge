import './styles.scss';

import { Box, Typography } from '@mui/material';
import React from 'react';

import { useSelector } from 'react-redux';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import he from 'he';

const AnswerIcon = ({ isCorrect }: { isCorrect: boolean }) => {
  return isCorrect ? (
    <CheckOutlinedIcon sx={{ fontSize: '30px', color: '#0EC44C' }} />
  ) : (
    <ClearOutlinedIcon sx={{ fontSize: '30px', color: '#F31F1F' }} />
  );
};

const ResultListView = React.memo(() => {
  const { quizData, userAnswers } = useSelector(
    (state: any) => state.appReducers
  );

  return quizData?.map((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct_answer;

    return (
      <Box key={question.id || index} className="results-list-container">
        <AnswerIcon isCorrect={isCorrect} />

        <Typography variant="h6">{he.decode(question.question)}</Typography>
      </Box>
    );
  });
});

export default ResultListView;
