import React from "react";

function LogoutButton({imagen}) {
  return (
    <button className="buttonOption">
      <img className="userImage" src={imagen} alt="Usuario" title="Usuario" />
    </button>
  );
}

export default LogoutButton;
