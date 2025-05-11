import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Delivery from "./Components/Delivery/Delivery.jsx";
import Dinning from "./Components/Dinning/Dinning.jsx";
import Login from "./Components/LogIn/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Delivery />} />
      <Route path="dinning" element={<Dinning />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  ),
    {
    basename: "/zomato_clone_reactjs",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
