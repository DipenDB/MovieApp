
import React from 'react';

import "./navbar.css";

const NavBar =()=>{

    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="#">DIPEN DB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV-SHOWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MOVIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GENES</a>
                        </li>



                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <form className="form-inline my-2 my-lg-0">
                        <h1>DropDown</h1>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
