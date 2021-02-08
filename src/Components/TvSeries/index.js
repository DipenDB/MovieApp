
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config";
import TvCard from "./TvCard";

const TvSeries=()=>{

    const [tvseries, setTvseries]= useState([]);

    useEffect(()=> {
        getTvSeries()
    },[])
    const getTvSeries = async ()=>{
        const res = await axios.get(`${BASE_URL}/movie/popular`,{params:{api_key:API_KEY}});
        console.log(res.data.results);
        setTvseries(res.data.results);
    }

    return(
        <div className=" cards_landscape_wrap-2">
            <div className="container">
                <div className="row ">
                    {tvseries.map(series=> {
                        // return <div className="card-deck col-md-2"> <CARD trendings={movie}/> </div>
                        return <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 ">
                            <TvCard tvseries={series}/>
                                {/*<h1>Tv Series</h1>*/}
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default TvSeries;
