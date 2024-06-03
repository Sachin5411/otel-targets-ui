import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Targets from "./pages/targets";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/targets",
        element: <Targets/>
    }
])