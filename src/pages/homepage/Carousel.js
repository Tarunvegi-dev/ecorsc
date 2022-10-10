import React from 'react';
import { Carousel} from 'react-bootstrap';
import First from '../../assets/carousel/1.png'

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <div className="screen">
                    <img
                        className="d-block w-100"
                        src={First}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent