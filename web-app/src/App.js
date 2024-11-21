import "./styles.scss";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import { Provider } from "react-redux";
import { Store } from "./redux/store.tsx";

import HomePage from "./pages/home/page.tsx";
import QuizPage from "./pages/quiz/page.tsx";
import ResultPage from "./pages/result/page.tsx";

import LoaderView from "./views/loader/Loader.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <Box className="app-container">
        <LoaderView />

        <RouterProvider router={router} />
      </Box>
    </Provider>
  );
}

export default App;
