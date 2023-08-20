import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accomodation/:id",
    element: <Accomodation />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
