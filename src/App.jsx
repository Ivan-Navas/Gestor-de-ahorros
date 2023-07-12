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
        <div className="appMainContainer">
          <div className="containermain">
            <Logo />
            <div className="containerOver">
              <Options />
              <Caroucel />
            </div>
          </div>
          <div className="graphicsContainer">
            <Graphics />
          </div>
          <div className="objetivesMainContainer">
            <Objetives />
          </div>
        </div>
        <ModalAddObjetive/>
        <ModalEditCard/>
      </ContextProvider>
    </>
  );
}

export default App;
