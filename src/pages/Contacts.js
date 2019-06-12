import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Contacts () {
  return (
    <React.Fragment>
      <Hero hero="contactsHero">
        <Banner title="Позвоните нам">
          <Link to="/" className="btn-primary">
            На главную
          </Link>
        </Banner>
      </Hero>

      <div className="contacts" />
    </React.Fragment>
  );
}
