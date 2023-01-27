import Navbar from "./components/Navbar";
import MiApi from "./components/MiApi";
import Footer from "./components/Footer";
import { useState } from "react";



function App() {

  const [valorBuscadorState, setValorBuscadorState] = useState('');



  return (
    <div className="App">
      <Navbar valorBuscadorState={valorBuscadorState}
       setValorBuscadorState={setValorBuscadorState} ></Navbar>
      <MiApi valorBuscadorState={valorBuscadorState} ></MiApi>
      <Footer></Footer>
    </div>
  );
}

export default App;
