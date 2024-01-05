import "./App.css";
import { ContextProvider } from "./Context/Context";
import Routing from "./Routes/Routing.jsx";



function App() {
  return (
    <>
      <ContextProvider>
        <Routing />
      </ContextProvider>
    </>
  )
}

export default App;
