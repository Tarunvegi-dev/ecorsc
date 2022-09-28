import React from 'react';
import { Container } from 'react-bootstrap'
import { MdFlashOn } from 'react-icons/md'

const FlashNews = () => {
    return (
        <Container>
            <div className="flash-news">
                <h5><MdFlashOn/> Flash News: </h5>
                <p>
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
        </Container>
    )
}

export default FlashNews