import React, {useContext} from "react";
import user from "../images/user.png";
import plus from "../images/plus.png";
import "../styles/options.css";
import {Context} from "../Context/Context.jsx";

function Options() {
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
          src={plus}
          alt="Agregar"
          title="Agregar objetivo"
        />
      </button>
      <button className="buttonOption">
        <img className="optionImage" src={user} alt="Usuario" title="Usuario" />
      </button>
    </div>
  );
}

export default Options;
