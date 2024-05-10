import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useGetUser from "./Hooks/useGetUser";

const Protected = ({ role }) => {
  const userData = useGetUser();

  if (userData === null || userData.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Protected;
