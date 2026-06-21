import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
