import { CardContent, Typography } from "@mui/material";
import parse from "html-react-parser";
import { isEmpty, path } from "ramda";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BackButton, FavoriteButton } from "src/shared/components/";
import { getShowByIdAction, useDispatch, useSelector } from "src/store";

import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledChip,
  StyledDetailsView,
} from "./details-view.styled";

export const DetailsView = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const show = useSelector((state) => state.shows.selectedShow);

  useEffect(() => {
    if (id) {
      void dispatch(getShowByIdAction(id));
    }
  }, [id, dispatch]);

  const onBackButtonClick = () => {
    navigate("/search");
  };

  return (
    <StyledDetailsView>
      <BackButton onBackButtonClick={onBackButtonClick}></BackButton>
      {!!show && !isEmpty(show) && (
        <StyledCard>
          <StyledCardMedia
            image={path(["image", "original"], show)}
            title={show.name}
          />
          <StyledCardContent>
            <CardContent>
              <Typography variant="h3" component="h2">
                {show.name}
              </Typography>
              {show.genres.map((genre, i) => {
                return <StyledChip key={i} label={genre} color={"primary"} />;
              })}
              <div>
                <FavoriteButton
                  isFavorite={isFavorite}
                  setIsFavorite={setIsFavorite}
                ></FavoriteButton>
              </div>
              {parse(show.summary)}
            </CardContent>
          </StyledCardContent>
        </StyledCard>
      )}
    </StyledDetailsView>
  );
};
