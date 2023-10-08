import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
