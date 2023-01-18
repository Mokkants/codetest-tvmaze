import { Show, ShowWrapper } from "../../models/show.model";

export const clientProblems = [
  "bad-request",
  "unauthorized",
  "forbidden",
  "not-found",
  "rejected",
] as const;

export type ClientProblem = {
  kind: typeof clientProblems[number];
  message?: string;
};

export type APIError =
  | ClientProblem
  | { kind: "timeout"; temporary: true }
  | { kind: "cannot-connect"; temporary: true }
  | { kind: "server" }
  // catch-all for unforeseen errors
  | { kind: "unknown"; temporary: true }
  | { kind: "bad-data" }
  | { kind: "cancelled" };

export type APISuccess = { kind: "ok" };

export type GeneralApiResult = APIError;

export type GetShowsResult = { kind: "ok"; shows: ShowWrapper[] } | APIError;
export type GetSelectedShowResult =
  | { kind: "ok"; selectedShow: Show }
  | APIError;
