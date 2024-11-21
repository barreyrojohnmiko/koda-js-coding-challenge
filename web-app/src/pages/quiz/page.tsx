import './styles.scss';

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  setCorrectAnswers,
  setCurrentQuestionIndex,
  setUserAnswers,
} from '../../redux/App/action.tsx';

import he from 'he';

export default function QuizPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizData, currentQuestionIndex, correctAnswers, userAnswers } =
    useSelector((state: any) => state.appReducers);

  const handleAnswer = (answer: string) => {
    const correctAnswer = quizData[currentQuestionIndex].correct_answer;

    dispatch(setUserAnswers([...userAnswers, answer]));

    if (answer === correctAnswer) {
      dispatch(setCorrectAnswers(correctAnswers + 1));
    }

    if (currentQuestionIndex < quizData.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      navigate('/result');
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Box className="page-container">
      <Box className="quiz-container">
        {quizData.length > 0 ? (
          <>
            <Typography className="placeholder">
              {currentQuestion?.category.replace(/&amp;/g, '&')}
            </Typography>

            <Box className="body-container">
              <Box className="question-container">
                <Typography>{he.decode(currentQuestion?.question)}</Typography>
              </Box>

              <Typography className="pagination">
                {currentQuestionIndex + 1} / {quizData.length}
              </Typography>
            </Box>

            <Box className="btn-container">
              <Button
                className="btn-command"
                onClick={() => handleAnswer('True')}
              >
                True
              </Button>

              <Button
                className="btn-command"
                onClick={() => handleAnswer('False')}
              >
                False
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h3" className="placeholder">
            Loading questions...
          </Typography>
        )}
      </Box>
    </Box>
  );
}
