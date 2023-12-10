import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpeg';


const CarouselComponent = () => {
  return (
    <Carousel indicators={true} interval={4000}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Slide 3" />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Slide 4" />
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselComponent;
