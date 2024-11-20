import "./styles.scss";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  setCorrectAnswers,
  setCurrentQuestionIndex,
  setUserAnswers,
} from "../../redux/App/action.tsx";

import { fetchQuizData } from "../../services/AppService.tsx";

import he from "he";

const quizData = {
  response_code: 0,
  results: [
    {
      type: "boolean",
      difficulty: "easy",
      category: "General Knowledge",
      question: "You can legally drink alcohol while driving in Mississippi.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "Big the Cat is a playable character in &quot;Sonic Generations&quot;.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Television",
      question: "In &quot;Star Trek&quot;, Klingons are aliens.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "The end credits sequence in Grand Theft Auto 5 is over half an hour long.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "In &quot;Sonic Adventure&quot;, you are able to transform into Super Sonic at will after completing the main story.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "In the Monster Hunter Series, it is possible to capture Elder Dragons.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "General Knowledge",
      question: "When you cry in space, your tears stick to your face.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "Ada Lovelace is often considered the first computer programmer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "No Game No Life first aired in 2014.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
};

export default function QuizPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { /*quizData,*/ currentQuestionIndex, correctAnswers, userAnswers } =
    useSelector((state: any) => state.appReducers);

  // Fetch quiz data on component mount
  // useEffect(() => {
  //   fetchQuizData();
  // }, []);

  const handleAnswer = (answer: string) => {
    const correctAnswer =
      quizData?.results[currentQuestionIndex].correct_answer;

    dispatch(setUserAnswers([...userAnswers, answer]));

    if (answer === correctAnswer) {
      dispatch(setCorrectAnswers(correctAnswers + 1));
    }

    if (currentQuestionIndex < quizData?.results.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      navigate("/result");
    }
  };

  const currentQuestion = quizData?.results[currentQuestionIndex];

  return (
    <Box className="quiz-container">
      <Box className="title">
        <Typography variant="h3">
          {currentQuestion?.category.replace(/&amp;/g, "&")}
        </Typography>
      </Box>

      <Box className="body-container">
        <Box className="question-container">
          <Typography>{he.decode(currentQuestion?.question)}</Typography>
        </Box>

        <Typography className="pagination">
          {currentQuestionIndex + 1} / {quizData?.results.length}
        </Typography>
      </Box>

      <Box className="btn-container">
        <Button className="btn-begin" onClick={() => handleAnswer("True")}>
          TRUE
        </Button>

        <Button className="btn-begin" onClick={() => handleAnswer("False")}>
          FALSE
        </Button>
      </Box>
    </Box>
  );
}
