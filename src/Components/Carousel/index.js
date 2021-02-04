
import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css";



const CAROUSEL =()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <div className="container mt-1">
        <Carousel className="carousel-inner"  activeIndex={index} onSelect={handleSelect} interval={5000} fade={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
        </div>



    )
}
export default CAROUSEL;
