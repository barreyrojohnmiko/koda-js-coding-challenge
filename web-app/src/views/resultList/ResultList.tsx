import './styles.scss';

import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';

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

  const getAnswerColor = (answer: string) => {
    return answer === 'True' ? '#4fbd1b' : '#e04e10';
  };

  return quizData?.map((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct_answer;

    return (
      <Box key={question.id || index} className="results-list-container">
        <Box className="label-container">
          <Typography variant="h6">{he.decode(question.question)}</Typography>

          <Typography variant="h6">
            The correct answer is{' '}
            <span style={{ color: getAnswerColor(question.correct_answer) }}>
              {question.correct_answer}
            </span>
            . You answered{' '}
            <span style={{ color: getAnswerColor(userAnswer) }}>
              {userAnswer}
            </span>
            .
          </Typography>
        </Box>

        {renderAnswerIcon(isCorrect)}
      </Box>
    );
  });
});

export default ResultListView;
