import React from 'react';
import { Carousel } from 'react-bootstrap';
import First from '../../assets/carousel/1.png'

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="w-100"
                    src={First}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="w-100"
                    src={First}
                    alt="First slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent