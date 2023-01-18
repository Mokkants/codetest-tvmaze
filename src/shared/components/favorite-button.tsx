import { Star } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";

import { Button } from "@mui/material";

interface Props {
  isFavorite: boolean;
  setIsFavorite: (val: boolean) => void;
  hideText?: boolean;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isFavorite",
})<{ isFavorite: boolean }>(({ theme, isFavorite }) => ({
  color: isFavorite ? theme.palette.activeColor : theme.palette.inactiveColor,
  "&:hover": {
    color: theme.palette.activeColor,
  },
}));

export const FavoriteButton = ({
  isFavorite,
  setIsFavorite,
  hideText,
}: Props) => {
  const handleToggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <StyledButton
      onClick={handleToggleFavorite}
      isFavorite={isFavorite}
      data-testid="favorite-button"
    >
      <Star />
      {!hideText && (
        <>{isFavorite ? "Remove from favorites" : "Add to favorites"}</>
      )}
    </StyledButton>
  );
};
