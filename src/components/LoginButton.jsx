import React from "react";
import user from "../images/user.png";
import {useAuth0} from '@auth0/auth0-react'


function LoginButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={()=>{loginWithRedirect()}} className="buttonOption">
      <img className="optionImage" src={user} alt="Usuario" title="Usuario" />
      {/*TODO: Crear la funcionalidad del usuario */}
    </button>
  );
}

export default LoginButton;
