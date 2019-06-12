import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
export default function Error () {
  return (
    <Hero hero="error-hero">

      <Banner title="404" subtitle="страница не найдена">
        <Link to="/" className="btn-primary">
          Перейти в главную страницу
        </Link>
      </Banner>

    </Hero>
  );
}
