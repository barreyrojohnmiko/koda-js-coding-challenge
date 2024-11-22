import './styles.scss';

import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  setCorrectAnswers,
  setCurrentQuestionIndex,
  setUserAnswers,
} from '../../redux/App/action.tsx';

import { loadQuizData } from '../../services/AppService.tsx';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import he from 'he';

export default function QuizPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizData, currentQuestionIndex, correctAnswers, userAnswers } =
    useSelector((state: any) => state.appReducers);

  useEffect(() => {
    loadQuizData();
  }, []);

  const handleAnswer = async (answer: string) => {
    const correctAnswer = quizData[currentQuestionIndex].correct_answer;

    const updatedUserAnswers = [...userAnswers, answer];
    dispatch(setUserAnswers(updatedUserAnswers));

    if (answer === correctAnswer) {
      dispatch(setCorrectAnswers(correctAnswers + 1));
    }

    if (currentQuestionIndex < quizData.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      localStorage.setItem(
        'correctAnswers',
        JSON.stringify(correctAnswers + (answer === correctAnswer ? 1 : 0))
      );
      localStorage.setItem('userAnswers', JSON.stringify(updatedUserAnswers));

      navigate('/result');
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Box className="page-container">
      <Box
        className="quiz-container"
        sx={{
          justifyContent: quizData.length === 0 ? 'center' : 'space-between',
        }}
      >
        {quizData.length > 0 ? (
          <>
            <>
              <Box className="header">
                <Typography className="placeholder">
                  {currentQuestion?.category?.replace(/&amp;/g, '&')}
                </Typography>

                <Typography className="pagination">
                  {currentQuestionIndex + 1} / {quizData.length}
                </Typography>
              </Box>

              <Divider className="divider" />

              <Box className="question-container">
                <Typography>{he.decode(currentQuestion?.question)}</Typography>
              </Box>
            </>

            <Divider className="divider" />

            <Box className="btn-container">
              <Button
                className="btn-command correct"
                onClick={() => handleAnswer('True')}
              >
                <CheckOutlinedIcon className="icon" />
                True
              </Button>

              <Button
                className="btn-command wrong"
                onClick={() => handleAnswer('False')}
              >
                <ClearOutlinedIcon className="icon" />
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
