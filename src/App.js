import './App.css';
import NavBar from "./Components/Navbar";
import CAROUSEL from "./Components/Carousel";
import BUTTON from "./Components/Button";
import CARD from "./Components/Card";
import Trending from "./Components/Trendings";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import NowPlaying from "./Components/Nowplaying";
import Popular from "./Components/Popular";
import FOOTER from "./Components/Footer";
import TvSeries from "./Components/TvSeries";

function App() {
  return (
    <div className="body">


        <BrowserRouter>
            <NavBar></NavBar>
            <CAROUSEL></CAROUSEL>
            <BUTTON></BUTTON>
            <switch>

            <Route exact path="/" component={Trending}></Route>

            <Route exact path="/trending" component={Trending}></Route>
            <Route exact path="/nowplaying" component={NowPlaying}></Route>
            <Route exact path="/popular" component={Popular}></Route>


                <Route exact path="/tvseries" component={TvSeries}></Route>





        </switch>
            <FOOTER></FOOTER>
        </BrowserRouter>
    </div>
  );
}

export default App;
