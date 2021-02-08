
import React from "react";
import {IMAGE_BASE_URL} from "../../config";

const TvCard =(props)=>{
    return(
        <div key={props.tvseries.id} className="card-flyer">
            <div className="text-box">
                <div className="image-box">
                    <img src={`${IMAGE_BASE_URL}${props.tvseries.poster_path}`} alt="Card image cap"/>
                </div>
                <div className="text-container">
                    <h6>{props.tvseries.title || props.tvseries.name}</h6>
                    <div>
                        {props.tvseries.adult ? <span className="m-1 badges badge badge-danger">Adult</span>:<span className=" m-1 badges badge badge-success">Safe</span> }

                        <span className=" m-1 badges badge badge-primary">TV</span>

                        <span className="m-1 badges badge badge-secondary">{props.tvseries.popularity}</span>

                        <span className="m-1 badges badge badge-warning">{props.tvseries.original_language}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TvCard;
