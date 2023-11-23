import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { PortfolioPage } from "../pages/portfoliopage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
};
