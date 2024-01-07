import React, { useContext } from "react";
import "../styles/options.css";
import { Context } from "../Context/Context.jsx";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../Hooks/useAuth.jsx";

function Options() {
  const contextOptions = useContext(Context);

  return (
    <div className="optionsMain">
      <button
        className="buttonOption"
        onClick={() => {
          contextOptions.setModalState(!contextOptions.modalState);
        }}
      >
        <img
          className="optionImage"
          src="https://res.cloudinary.com/ivannavas/image/upload/v1702505563/GestorDeAhorros/Web/plus_yo7tf9"
          alt="Agregar"
          title="Agregar objetivo"
        />
      </button>
      <button className="buttonOption" onClick={contextOptions.logOut}>
        <BiLogOut className="option__logOut" />
      </button>
    </div>
  );
}

export default Options;
