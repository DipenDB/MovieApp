
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config";
import CARD from "../Card";
import NowPlayingCard from "./NowPlayingCard";

const NowPlaying=()=>{

    const [nowplayings, setNowplayings]= useState([]);


    useEffect(()=> {
        getTrendingMovies()
    },[])
    const getTrendingMovies = async ()=>{
        const res = await axios.get(`${BASE_URL}/movie/now_playing`,{params:{api_key:API_KEY}});
        // console.log(res.data.results);
        setNowplayings(res.data.results);
    }

    return(
        <div className=" cards_landscape_wrap-2">
            <div className="container">
                <div className="row ">
                    {nowplayings.map(movie => {
                        // return <div className="card-deck col-md-2"> <CARD trendings={movie}/> </div>
                        return <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 "> <NowPlayingCard nowplaying={movie}/> </div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default NowPlaying;
