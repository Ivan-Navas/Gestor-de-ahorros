import "./App.css";
import Logo from "./components/Logo";
import Graphics from "./components/Graphics";
import Caroucel from "./components/caroucel";
import Options from "./components/Options";
import Objetives from "./components/Objetives";
import ModalAddObjetive from "./components/ModalAddObjetive.jsx";
import { ContextProvider } from "./Context/Context";
import ModalEditCard from "./components/ModalEditCard.jsx";

function App() {
  return (
    <>
      <ContextProvider>
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
      </ContextProvider>
    </>
  );
}

export default App;
