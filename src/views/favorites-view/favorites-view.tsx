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
import { removeFavoriteAction, useSelector } from "src/store";
import {
  StyledCard,
  StyledCardMedia,
  StyledFavoritesView,
} from "./favorites-view.styled";

export const FavoritesView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.shows.favorites);

  const setIsFavorite = (show: Show) => {
    void dispatch(removeFavoriteAction(show.id));
  };

  const handleOnClick = (show: Show) => {
    navigate(`/details/${show.id}`);
  };

  return (
    <StyledFavoritesView data-testid="search-results">
      {favorites?.map((show: Show) => {
        return (
          <StyledCard data-testid="search-result" key={show.id}>
            <StyledCardMedia
              image={path(["image", "original"], show)}
              src="https://dummyimage.com/600x400/7b8a90/ffffff&text=Image+Not+Found"
              title={show.name}
            />
            <CardActionArea onClick={() => handleOnClick(show)}>
              <CardContent>
                <Typography gutterBottom component="p">
                  {show.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FavoriteButton
                isFavorite={true}
                setIsFavorite={() => setIsFavorite(show)}
                hideText={true}
              ></FavoriteButton>
            </CardActions>
          </StyledCard>
        );
      })}
    </StyledFavoritesView>
  );
};
