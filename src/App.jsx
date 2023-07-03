import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, SingleMovie, Error } from "./index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "movies/:id", element: <SingleMovie /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
