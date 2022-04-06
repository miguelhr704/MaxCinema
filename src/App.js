import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import MoviesGrid from "./components/MovieGrid/MoviesGrid";
function App() {

  useEffect(()=>{
    document.title = "MaxCinema - Vive el Cine";
  },[])
  return (
    <div className="App">
      <Header />
      <MoviesGrid />
    </div>
  );
}

export default App;
