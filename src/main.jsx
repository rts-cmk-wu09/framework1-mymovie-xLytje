import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ListView from "./pages/ListView";
import DetailsView from "./pages/DetailsView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ListView />} />
      <Route path="/details/:id" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
