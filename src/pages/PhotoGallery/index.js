import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase-utils'
import { Carousel } from 'react-bootstrap';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'


const PhotoGallery = () => {
    const [videos, setvideos] = useState([]);
    const [photos, setphotos] = useState([]);

    useEffect(() => {
        firestore.collection('photo-gallery').orderBy('time', 'desc').onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data()
                }
            })
            setvideos(data.filter((x) => x.category === 'Videos'));
            setphotos(data.filter((x) => x.category === 'Photos'));
        })
    }, []);
    return (
        <div className='container gallery'>
            <Helmet>
                <title>ECoRSC - Photo Gallery</title>
            </Helmet>
            <Navbar /><br />
            <h4>
                ECoRSC Photos
            </h4>
            <Carousel fade>
                {photos.map((image, i) => (
                    <Carousel.Item key={i} interval={3000}>
                        <img
                            height="400px"
                            className="d-block w-100"
                            src={image.url}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <br />
            <br />
            <h4>
                ECoRSC Videos
            </h4>
            <center>
                {videos.map((video, i) => <div key={i} dangerouslySetInnerHTML={{ __html: video.url }}></div>)}
            </center>
            <Footer />
        </div >
    );
};

export default PhotoGallery;