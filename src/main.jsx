import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/end-users/Login.jsx";
import { Provider } from "react-redux";
import appStore from "./store.js";
import Layout from "./component/Layout.jsx";
import TicketForm from "./component/Dashboard/TicketForm.jsx";
import Protected from "./Protected.jsx";
import Tickets from "./component/Dashboard/Tickets.jsx";
import CreateTicketPage from "./component/Dashboard/CreateTicketPage.jsx";
import TechSupportDashboard from "./component/TechSupportDashboard/TechSupportDashboard.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Protected>
            <Tickets />
          </Protected>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Protected>
            <TicketForm />
          </Protected>
        ),
      },
      {
        path: "/create-ticket",
        element: (
          <Protected>
            <CreateTicketPage />
          </Protected>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/tech-dashboard",
        element: (
          <Protected>
            <TechSupportDashboard />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
