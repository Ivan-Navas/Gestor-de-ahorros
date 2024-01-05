import React from "react";
import Logo from "./Logo";
import Graphics from "./Graphics";
import Caroucel from "./Caroucel";
import Options from "./Options";
import Objetives from "./Objetives";
import ModalAddObjetive from "./ModalAddObjetive.jsx";
import ModalEditCard from "./ModalEditCard.jsx";

function Panel() {
  return (
    <>
      <div className="mainContainerParent">
        <div className="mainContainerChild">
          <div className="containerUp">
            <div className="containerChild1">
              <div className="logo">
                <Logo />
              </div>
              <div className="optionCaroucel">
                <Options />
                <Caroucel />
              </div>
            </div>

            <div className="containerChild2">
              <Graphics />
            </div>
          </div>

          <div className="containerChild3">
            <Objetives />
          </div>
        </div>
      </div>

      <ModalAddObjetive />
      <ModalEditCard />
    </>
  );
}

export default Panel;
