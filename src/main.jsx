import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/home/SingleProduct";
import Page404 from "./pages/Page404";
import Shopping from "./pages/home/Shopping";
import {Provider} from "react-redux"
import { store } from "./store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop/:id",
        element: <SingleProduct/>
      },
      {
        path:"/404",
        element: <Page404/>
      },
      {
        path:"/shop",
        element: <Shopping/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);