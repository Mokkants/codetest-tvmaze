import { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { Show, ShowWrapper } from "../../models/show.model";

export type StatusType = "idle" | "pending";

export interface ThunkConfig {
  rejectValue: string;
}

export type ShowsPayload = PayloadAction<Show>;

export type StatusExtension = {
  status: StatusType;
  error?: SerializedError | string;
};

export interface ShowsSliceState extends StatusExtension {
  searchTerm: string;
  shows?: ShowWrapper[];
  selectedShow?: Show;
  favorites: Show[];
}
