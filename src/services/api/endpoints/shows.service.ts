import { Show, ShowWrapper } from "src/models/show.model";
import { GetSelectedShowResult, GetShowsResult } from "./../api.types";

import { ApiResponse, ApisauceInstance } from "apisauce";

export const searchShowsByTerm = (term: string) => {
  return async function (apisauce: ApisauceInstance): Promise<GetShowsResult> {
    const response: ApiResponse<any> = await apisauce.get(
      `/search/shows?q=${term}`
    );

    try {
      const data: ShowWrapper[] = response.data;
      return { kind: "ok", shows: data };
    } catch {
      return { kind: "bad-data" };
    }
  };
};

export const getShowById = (id: string) => {
  return async function (
    apisauce: ApisauceInstance
  ): Promise<GetSelectedShowResult> {
    const response: ApiResponse<any> = await apisauce.get(`/shows/${id}`);
    try {
      const data: Show = response.data;
      return { kind: "ok", selectedShow: data };
    } catch {
      return { kind: "bad-data" };
    }
  };
};
