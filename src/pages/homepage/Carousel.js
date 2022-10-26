import React from 'react';
import { Carousel } from 'react-bootstrap';
import First from '../../assets/carousel/1.png'
import Second from '../../assets/carousel/2.jpeg'
import Third from '../../assets/carousel/3.jpeg'
import Fourth from '../../assets/carousel/4.jpeg'


const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    height={300}
                    className="w-100"
                    src={First}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    height={300}
                    className="w-100"
                    src={Second}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    height={300}
                    className="w-100"
                    src={Third}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    height={300}
                    className="w-100"
                    src={Fourth}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent