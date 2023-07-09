import "./App.css";
import Logo from "./components/Logo";
import Graphics from "./components/Graphics";
import Caroucel from "./components/caroucel";
import Options from "./components/Options";
import Objetives from "./components/Objetives";
import { ContextProvider } from "./Context/Context";

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
        {/* <ModalAddObjetive/> */}
      </ContextProvider>
    </>
  );
}

export default App;
