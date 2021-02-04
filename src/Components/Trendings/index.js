
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config";
import CARD from "../Card";
import './trendings.css';

const Trending=()=>{

    const [trendings, setTrendings]= useState([]);


    useEffect(()=> {
        getTrendingMovies()
    },[])
    const getTrendingMovies = async ()=>{
        const res = await axios.get(`${BASE_URL}/trending/all/week`,{params:{api_key:API_KEY}});
        // console.log(res.data.results);
        setTrendings(res.data.results);
    }

    return(
            <div className=" cards_landscape_wrap-2">
                <div className="container">
                    <div className="row ">
                        {trendings.map(movie => {
                            // return <div className="card-deck col-md-2"> <CARD trendings={movie}/> </div>
                            return <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 "> <CARD trendings={movie}/> </div>
                        })
                        }
                    </div>
                </div>
            </div>
    )
}
export default Trending;
