
import react from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const BUTTON=(props)=>{
    return(
        <div className="container mt-4 mb-0">
            <Button   className="btn btn-light btn-outline-primary mr-2"> <Link to="/trending">Trendings</Link> </Button>
            <Button   className="btn btn-light btn-outline-primary mr-2"> <Link to="/nowplaying">NOW PLAYING</Link> </Button>
            <Button   className="btn btn-light btn-outline-primary mr-2"> <Link to="/popular">POPULAR</Link> </Button>

        </div>

    )
}
export default BUTTON;
