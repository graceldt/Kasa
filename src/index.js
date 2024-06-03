import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/root";
import About from "./routes/about";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace /> ,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        index: true,
        path: "/about",
        element: <About />,
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
