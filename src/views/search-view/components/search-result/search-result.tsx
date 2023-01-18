import React from "react";
import { Show } from "src/models";
import { FavoriteButton } from "src/shared/components/";

import {
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { path } from "ramda";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAsFavoriteAction, removeFavoriteAction } from "src/store";
import { StyledCard, StyledCardMedia } from "./search-result.styled";

interface Props {
  show: Show;
  isFavorite: boolean;
}

export const SearchResult = ({ show, isFavorite }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setIsFavorite = (newVal: boolean) => {
    if (newVal) {
      void dispatch(addAsFavoriteAction(show));
    } else {
      void dispatch(removeFavoriteAction(show.id));
    }
  };

  const handleOnClick = () => {
    navigate(`/details/${show.id}`);
  };

  return (
    <StyledCard data-testid="search-result">
      <StyledCardMedia
        image={path(["image", "original"], show)}
        src="https://dummyimage.com/600x400/7b8a90/ffffff&text=Image+Not+Found"
        title={show.name}
      />
      <CardActionArea onClick={handleOnClick}>
        <CardContent>
          <Typography gutterBottom component="p">
            {show.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FavoriteButton
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          hideText={true}
        ></FavoriteButton>
      </CardActions>
    </StyledCard>
  );
};
