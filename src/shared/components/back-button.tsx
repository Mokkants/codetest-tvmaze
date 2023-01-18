import { ChevronLeftSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface Props {
  onBackButtonClick: () => void;
}

export const BackButton = ({ onBackButtonClick }: Props) => {
  return (
    <Button color={"primary"} onClick={onBackButtonClick}>
      <ChevronLeftSharp />
      Back
    </Button>
  );
};
