import React from 'react';
import NavbarComponent from '../navbar/NavBar';
import CarouselComponent from '../carousal/Carousal';
import OptionsComponent from '../options/Options';

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div>
          <CarouselComponent />
        </div>
        <OptionsComponent />
      </div>
    </div>
  );
};

export default Home;
