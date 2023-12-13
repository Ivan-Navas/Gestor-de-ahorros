import React, {useContext} from "react";
import "../styles/options.css";
import {Context} from "../Context/Context.jsx";
import LoginButton from "./LoginButton";
import {useAuth0} from '@auth0/auth0-react'
import LogoutButton from "./LogoutButton";

function Options() {
  const {user, isAuthenticated, isLoading} = useAuth0();
  const contextOptions = useContext(Context)
  return (
    <div className="optionsMain">
      <button className="buttonOption"
        onClick={()=>{
        contextOptions.setModalState(!contextOptions.modalState)
      }}
        >
        <img
          className="optionImage"
          src="https://res.cloudinary.com/ivannavas/image/upload/v1702505563/GestorDeAhorros/Web/plus_yo7tf9"
          alt="Agregar"
          title="Agregar objetivo"
        />
      </button>
      {(isAuthenticated ? <LogoutButton imagen={user.picture}/> : <LoginButton/>)}
    </div>
  );
}

export default Options;
