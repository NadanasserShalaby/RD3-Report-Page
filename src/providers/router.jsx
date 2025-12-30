import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout";
import Home from "../routes/Home";
import Otp from "../routes/Otp";
import Success from "../routes/Success";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "otp",
        element: <Otp />,
      },
      
      {
        path: "success",
        element: <Success />,
      },
      
    ],
  },
]);