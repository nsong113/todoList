import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "../pages/Modal";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/modal/:id" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
