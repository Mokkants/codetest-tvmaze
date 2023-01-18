import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { DetailsView, FavoritesView, NotFoundView, SearchView } from "./views/";

import { Navbar } from "src/shared/components";

const routes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchView />} />
      <Route path="/favorites" element={<FavoritesView />} />
      <Route path="/details/:id" element={<DetailsView />} />
      <Route path="/*" element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
