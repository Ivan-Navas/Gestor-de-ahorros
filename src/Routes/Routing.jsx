import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/public/PublicLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from '../components/Error/Error'
import PrivateLayout from "../layout/private/PrivateLayout";
import Feed from '../components/Feed'


function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />//* Ruta publica por defecto
            <Route path="login" element={<Login />} />//*Ruta de inicio de sesíon
            <Route path="register" element={<Register />} />//* Ruta de Registro
          </Route>
          <Route path="feed" element={<PrivateLayout />} >
            <Route index element={<Feed />} />
          </Route>
          <Route path="*" element={<Error />} />//*Ruta para el error 404
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
