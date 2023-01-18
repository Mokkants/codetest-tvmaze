import { Show } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getShowByIdAction, searchShowsByTermAction } from "./shows.actions";
import { ShowsSliceState } from "./shows.types";

const initialState: ShowsSliceState = {
  searchTerm: "",
  shows: [],
  selectedShow: undefined,
  favorites: [],
  status: "idle",
};

const { reducer } = createSlice({
  name: "shows",
  initialState,
  reducers: {
    addAsFavorite: (state, action: PayloadAction<Show>) => {
      state.favorites?.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = [
        ...state.favorites.filter((f) => f.id !== action.payload),
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShowByIdAction.pending, (state) => {
      state.status = "pending";
      state.error = undefined;
    });
    builder.addCase(getShowByIdAction.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.selectedShow = payload.selectedShow;
    });
    builder.addCase(getShowByIdAction.rejected, (state, action) => {
      state.status = "idle";

      if (action.error) {
        state.error = action.error;
      }
    });

    builder.addCase(searchShowsByTermAction.pending, (state) => {
      state.status = "pending";
      state.error = undefined;
    });
    builder.addCase(searchShowsByTermAction.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.shows = payload;
    });
    builder.addCase(searchShowsByTermAction.rejected, (state, action) => {
      state.status = "idle";

      if (action.error) {
        state.error = action.error;
      }
    });
  },
});

export { reducer as showsReducer };
