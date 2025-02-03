import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Keep the Provider
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/home/SingleProduct";
import Page404 from "./pages/Page404";
import Shop from  "./pages/Shop/Shop"

// Mock store
const mockStore = {
  getState: () => ({}), // Return an empty state
  subscribe: () => {}, // No-op function
  dispatch: () => {}, // No-op function
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/404",
        element: <Page404 />,
      },
      {
        path: "/shop",
        element: <Shop/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={mockStore}> {/* Pass the mock store */}
    <RouterProvider router={router} />
  </Provider>
);