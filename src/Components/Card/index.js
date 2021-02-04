
import React, {useEffect, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./card.css"
import {BASE_URL, IMAGE_BASE_URL} from "../../config";




const CARD =(props)=>{




    console.log(props)
    return(

         // <Card key={`${IMAGE_BASE_URL}${props.trendings.id}`} className="cards mt-2">
         //        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${props.trendings.poster_path}`} alt="Card image cap" />
         //        <CardBody>
         //            <CardTitle className="title" tag="h5">
         //                {props.trendings.title || props.trendings.name}
         //            </CardTitle>
         //
         //            <CardSubtitle   tag="h6"  className="subtitle" >
         //
         //                <div>
         //                    {props.trendings.adult ? <span className="badges badge badge-danger">Adult</span>:<span className="badges badge badge-success">Safe</span> }
         //
         //                    <span className="badges badge badge-primary">{props.trendings.media_type}</span>
         //
         //                    <span className="badges badge badge-secondary">{props.trendings.popularity}</span>
         //
         //                    <span className="badges badge badge-warning">{props.trendings.original_language}</span>
         //
         //                </div>
         //
         //            </CardSubtitle>
         //
         //        </CardBody>
         //
         // </Card>

            <div key={`${IMAGE_BASE_URL}${props.trendings.id}`} className="card-flyer">
                <div className="text-box">
                    <div className="image-box">
                        <img src={`${IMAGE_BASE_URL}${props.trendings.poster_path}`} alt="Card image cap"/>
                    </div>
                    <div className="text-container">
                        <h6>{props.trendings.title || props.trendings.name}</h6>
                        <div>
                            {props.trendings.adult ? <span className="m-1 badges badge badge-danger">Adult</span>:<span className=" m-1 badges badge badge-success">Safe</span> }

                            <span className=" m-1 badges badge badge-primary">{props.trendings.media_type}</span>

                            <span className="m-1 badges badge badge-secondary">{props.trendings.popularity}</span>

                            <span className="m-1 badges badge badge-warning">{props.trendings.original_language}</span>

                        </div>
                    </div>
                </div>
            </div>



    )
}
export default CARD;

