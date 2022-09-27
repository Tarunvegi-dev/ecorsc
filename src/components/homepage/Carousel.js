import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import First from '../public/carousel/1.jpg'

const CarouselComponent = () => {
    return (
        <Carousel>
            <div>
                <Image src={First} layout='fill' />
                <p className="legend">Legend 1</p>
            </div>
            {/* <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
    )
}

export default CarouselComponent