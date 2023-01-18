import React, { useEffect, useRef, useState } from "react";

import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { StyledSearchBar, StyledTextField } from "./search-bar.styled";

const debounceTimeInMS = 2000;

interface Props {
  onInputChange: (val: string) => void;
}
export const SearchBar = ({ onInputChange }: Props) => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line no-undef
  const inputTimeoutRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    inputTimeoutRef.current = setTimeout(
      () => onInputChange(inputValue),
      debounceTimeInMS
    );
    return () => {
      if (inputTimeoutRef && inputTimeoutRef.current !== null) {
        clearTimeout(inputTimeoutRef.current);
      }
    };
  }, [inputValue, onInputChange]);

  return (
    <StyledSearchBar data-testid="search-bar">
      <form noValidate autoComplete="off">
        <StyledTextField
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onInputChange(inputValue);
            }
          }}
          id="outlined-basic"
          dat-testid="search-input"
          placeholder="Search..."
          variant="outlined"
          onChange={(event) => setInputValue(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color={"primary"} data-testid="search-icon" />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </StyledSearchBar>
  );
};
