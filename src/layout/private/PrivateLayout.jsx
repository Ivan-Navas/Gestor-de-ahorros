import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function PrivateLayout() {
  const { auth } = useAuth({});
  return (
    <>
      {auth._id ? (
        <section>
          <Outlet />
        </section>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default PrivateLayout;
