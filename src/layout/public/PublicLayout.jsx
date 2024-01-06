import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function PublicLayout() {
  const { auth } = useAuth({});
  return (
    <>
      {!auth._id ? (
        <section>
          <Outlet />
        </section>
      ) : (
        <Navigate to="/feed" />
      )}
    </>
  );
}

export default PublicLayout;
