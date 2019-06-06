import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';

import FeaturedRooms from '../components/FeaturedRooms';
export default function Home () {
  return (
    <React.Fragment>
      <Hero hero="defaultHero">
        <Banner
          title="Пансионат Миф"
          subtitle="Номера повышенной комфортности от 550с"
        >
          <Link to="/rooms" className="btn-primary">
            Наши Номера
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
