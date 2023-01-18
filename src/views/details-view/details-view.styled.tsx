import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)({
  width: "80%",
  display: "flex",
  margin: "0.1rem auto",
  "@media (max-width: 425px)": {
    flexDirection: "column",
  },
});

export const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  maxWidth: "30rem",
  height: "40rem",
  backgroundSize: "contain",
  "@media (max-width: 425px)": {
    width: "100%",
    maxHeight: "30rem",
  },
});

export const StyledChip = styled(Chip)({
  marginRight: "0.3rem",
});

export const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
});

export const FavoriteButtonContainer = styled("div")({
  marginTop: "1rem",
});

export const StyledDetailsView = styled("div")({
  width: "100%",
});
