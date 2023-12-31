import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton({imagen}) {
  const {logout} = useAuth0()
  return (
    <button onClick={()=> logout({logoutParams: ({returnTo: window.locationOrigin})})} className="buttonOption">
      <img className="userImage" src={imagen} alt="Usuario" title="Usuario" />
    </button>
  );
}

export default LogoutButton;
