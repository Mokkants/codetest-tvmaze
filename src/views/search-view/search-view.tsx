import React, { useEffect, useState } from "react";
import { searchShowsByTermAction, useDispatch, useSelector } from "src/store";

import { Show, ShowWrapper } from "src/models";
import { SearchBar, SearchResult } from "./components";
import { StyledSearchResult, StyledSearchView } from "./search-view.styled";

export const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResultList = useSelector((state) => state.shows.shows);
  const favorites = useSelector((state) => state.shows.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      void dispatch(searchShowsByTermAction(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const isFavorite = (show: Show) => {
    return Boolean(
      favorites && favorites?.findIndex((f) => f.id === show.id) >= 0
    );
  };

  return (
    <StyledSearchView data-testid="search-view">
      <SearchBar onInputChange={setSearchTerm}></SearchBar>
      <StyledSearchResult data-testid="search-results">
        {searchResultList?.map((result: ShowWrapper) => {
          const show = result.show;
          return (
            <SearchResult
              key={show.id}
              show={show}
              isFavorite={isFavorite(show)}
            />
          );
        })}
      </StyledSearchResult>
    </StyledSearchView>
  );
};
