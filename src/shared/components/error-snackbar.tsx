import { Button, Slide, SlideProps, Snackbar, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "src/store";
import theme from "src/theme";

const TransitionUp = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};

const StyledSnackbar = styled(Snackbar)({
  right: "auto",
  left: "auto",
});

export const ErrorSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const error = useSelector((state) => state.shows.error);
  const status = useSelector((state) => state.shows.status);

  // eslint-disable-next-line no-undef
  const inputTimeoutRef: { current: NodeJS.Timeout | null } = useRef(null);

  const timeoutInMS = 2000;

  useEffect(() => {
    if (status === "pending") {
      inputTimeoutRef.current = setTimeout(() => {
        setErrorMessage("Slow internet connection");
        setIsOpen(true);
      }, timeoutInMS);
    } else {
      if (inputTimeoutRef && inputTimeoutRef.current !== null) {
        clearTimeout(inputTimeoutRef.current);
      }
    }

    return () => {
      if (inputTimeoutRef && inputTimeoutRef.current !== null) {
        clearTimeout(inputTimeoutRef.current);
      }
    };
  }, [status]);

  useEffect(() => {
    if (error) {
      const message = typeof error === "string" ? error : error.message || "";
      setErrorMessage(message);
      setIsOpen(true);
    }
  }, [error]);

  useEffect(() => {
    if (!isOpen) {
      setErrorMessage("");
    }
  }, [isOpen]);

  const [errorMessage, setErrorMessage] = useState("An error has occurred");

  return (
    <StyledSnackbar
      open={isOpen}
      TransitionComponent={TransitionUp}
      message={errorMessage}
      action={
        <Button
          style={{ color: theme.palette.primary }}
          size="small"
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      }
    />
  );
};
