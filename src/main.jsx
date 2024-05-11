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
import TicketResponse from "./component/TechSupportDashboard/TicketResponse.jsx";
import TicketDetails from "./component/Dashboard/TicketResponseDetails.jsx";
import TicketResponseDetails from "./component/Dashboard/TicketResponseDetails.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        element: <Protected role="user" />,
        children: [
          {
            path: "/create-ticket",
            element: <CreateTicketPage />,
          },
          {
            path: "",
            element: <Tickets />,
          },
          {
            path: "/ticket-response/:ticketId",
            element: <TicketResponseDetails />,
          },
        ],
      },

      {
        element: <Protected role="tech-support" />,
        children: [
          {
            path: "/tech-dashboard",
            element: <TechSupportDashboard />,
          },
          {
            path: "/ticket-response",
            element: <TicketResponse />,
          },
        ],
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
