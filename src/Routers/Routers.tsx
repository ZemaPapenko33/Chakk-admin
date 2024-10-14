import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPage";
import { PageRoutes } from "../shared/enum";

export const Routers = () => {
  return (
    <Routes>
      <Route path={PageRoutes.MAIN_ROUTE} element={<MainPage />} />
    </Routes>
  );
};
