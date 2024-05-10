import React from "react";
import { Navigate } from "react-router-dom";
import useGetUser from "./Hooks/useGetUser";

const Protected = ({ children }) => {
  const userData = useGetUser();

  console.log(userData, "userData");

  if (userData === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
