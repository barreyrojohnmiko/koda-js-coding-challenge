import './styles.scss';

import { Box, Typography } from '@mui/material';
import React from 'react';

import { useSelector } from 'react-redux';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import he from 'he';

const renderAnswerIcon = (isCorrect: boolean) => {
  return isCorrect ? (
    <CheckOutlinedIcon className="icon-correct" />
  ) : (
    <ClearOutlinedIcon className="icon-wrong" />
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
        {renderAnswerIcon(isCorrect)}

        <Typography variant="h6">{he.decode(question.question)}</Typography>
      </Box>
    );
  });
});

export default ResultListView;
