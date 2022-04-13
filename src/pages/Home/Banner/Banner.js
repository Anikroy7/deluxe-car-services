import React from 'react';
import { Carousel } from 'react-bootstrap';
import person1 from '../../../images/banner/banner1.jpg'
import person2 from '../../../images/banner/banner1.jpg'
import person3 from '../../../images/banner/banner1.jpg'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={person1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Oren reson</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={person2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Selon Reso</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={person3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Thil Stem</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;