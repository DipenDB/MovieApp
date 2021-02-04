import './App.css';
import NavBar from "./Components/Navbar";
import CAROUSEL from "./Components/Carousel";
import BUTTON from "./Components/Button";
import CARD from "./Components/Card";
import Trending from "./Components/Trendings";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="body">
        <BrowserRouter>
        <NavBar></NavBar>
        <CAROUSEL></CAROUSEL>
        <switch>
            <BUTTON></BUTTON>
            <Trending></Trending>
        </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
