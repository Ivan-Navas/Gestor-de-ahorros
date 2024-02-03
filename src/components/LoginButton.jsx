import React from "react";
import {useAuth0} from '@auth0/auth0-react'


function LoginButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={()=>{loginWithRedirect()}} className="buttonOption">
      <img className="optionImage" src="https://res.cloudinary.com/ivannavas/image/upload/v1702505565/GestorDeAhorros/Web/user_e2ghuw.png" alt="Usuario" title="Usuario" />
    </button>
  );
}

export default LoginButton;
