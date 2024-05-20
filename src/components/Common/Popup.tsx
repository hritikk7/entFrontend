import { Typography } from "@mui/material";
import React from "react";

const Popup = ({
  headerText,
  bodyMessage,
  color = "black",
}: {
  headerText: string;
  bodyMessage: string;
  color?: string;
}) => {
  return (
    <div style={{ backgroundColor: color }}>
      <Typography variant="h3">{headerText}</Typography>
      <Typography>{bodyMessage}</Typography>
    </div>
  );
};

export default Popup;
