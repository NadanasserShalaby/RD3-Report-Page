import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout";
import Home from "../routes/Home";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
    ],
  },
]);