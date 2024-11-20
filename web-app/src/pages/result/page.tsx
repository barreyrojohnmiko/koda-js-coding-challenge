import "./styles.scss";

import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useSelector } from "react-redux";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

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

export default function ResultPage() {
  const { /*quizData,*/ currentQuestionIndex, correctAnswers, userAnswers } =
    useSelector((state: any) => state.appReducers);

  return (
    <Box className="result-container">
      <Box className="title">
        <Typography variant="h3">
          You scored <br /> {correctAnswers} / {quizData?.results.length}
        </Typography>
      </Box>

      <Box className="page-body">
        {quizData.results.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correct_answer;

          return (
            <Box key={index} className="results-list-container">
              {isCorrect ? (
                <CheckOutlinedIcon
                  sx={{ fontSize: "30px", color: "#0EC44C" }}
                />
              ) : (
                <ClearOutlinedIcon
                  sx={{ fontSize: "30px", color: "#F31F1F" }}
                />
              )}

              <Typography variant="h6">
                {he.decode(question.question)}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Link className="btn-play-again" to="/">
        PLAY AGAIN
      </Link>
    </Box>
  );
}
