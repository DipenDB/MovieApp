

import React from "react";
import {IMAGE_BASE_URL} from "../../config";

const PopularCard=(props)=>{
    console.log(props)
    return(
        <div key={`${IMAGE_BASE_URL}${props.popular.id}`} className="card-flyer">
            <div className="text-box">
                <div className="image-box">
                    <img src={`${IMAGE_BASE_URL}${props.popular.poster_path}`} alt="Card image cap"/>
                </div>
                <div className="text-container">
                    <h6>{props.popular.title || props.popular.name}</h6>
                    <div>
                        {props.popular.adult ? <span className="m-1 badges badge badge-danger">Adult</span>:<span className=" m-1 badges badge badge-success">Safe</span> }

                        <span className=" m-1 badges badge badge-primary">{props.popular.media_type}</span>

                        <span className="m-1 badges badge badge-secondary">{props.popular.popularity}</span>

                        <span className="m-1 badges badge badge-warning">{props.popular.original_language}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopularCard;
