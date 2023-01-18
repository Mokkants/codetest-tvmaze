import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Show } from "../../models/show.model";

import { API, getShowById, searchShowsByTerm } from "../../services/api";

export const searchShowsByTermAction = createAsyncThunk(
  "shows/searchByTerm",

  async (term: string, { rejectWithValue }) => {
    const result = await API.call(searchShowsByTerm(term));

    if (result.kind === "ok") {
      return result.shows;
    }

    return rejectWithValue(result);
  }
);

export const getShowByIdAction = createAsyncThunk(
  "shows/getById",

  async (id: string, { rejectWithValue }) => {
    const result = await API.call(getShowById(id));

    if (result.kind === "ok") {
      return { ...result };
    }

    return rejectWithValue(result);
  }
);

export const addAsFavoriteAction = createAction<Show>("shows/addAsFavorite");
export const removeFavoriteAction = createAction<number>(
  "shows/removeFavorite"
);
