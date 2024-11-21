import "./styles.scss";

import { Box } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

const LoaderView = React.memo(() => {
  const { isLoading } = useSelector((state: any) => state.appReducers);

  if (!isLoading) {
    return null;
  }

  return (
    <Box className="loader-overlay">
      <Box className="loader" />
    </Box>
  );
});

export default LoaderView;
