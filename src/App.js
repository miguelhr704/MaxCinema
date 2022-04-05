import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import { useEffect } from "react";
function App() {

  useEffect(()=>{
    document.title = "MaxCinema - Vive el Cine";
  },[])
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
