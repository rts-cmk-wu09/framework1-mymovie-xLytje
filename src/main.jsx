import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ListView from "./pages/ListView";
import DetailsView from "./pages/DetailsView";
import ErrorView from "./pages/ErrorView";
import { loader as movieCardDataLoader } from "./pages/ListView";
import { loader as movieDataLoader } from "./pages/DetailsView";
// import { bloader as movieItemDataLoader } from "./templates/MovieItem";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={movieCardDataLoader} element={<ListView />} />
      <Route
        path="/details/:id"
        loader={movieDataLoader}
        element={<DetailsView />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
