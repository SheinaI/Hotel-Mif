import React from 'react';
import Hero from '../components/Hero';
// import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {FaCalendarAlt, FaUserTag, FaTasks} from 'react-icons/fa';

export default function Contacts () {
  return (
    <React.Fragment>
      <Hero hero="contactsHero">
        <Link to="/" className="btn-primary">
          На главную
        </Link>
      </Hero>
      <div className="contacts-wrap">
        <section class="titles">
          <h1>Свяжитесь с нами!</h1>
          <p>Забронируйте номер у нас по лучшей цене прямо сейчас! </p>
        </section>

        <section class="container-boxes">
          <div class="box service">
            <span className="icon"><FaCalendarAlt /></span>
            <div class="text">
              <h4>Бронировать номер</h4>
              <p>+996 555 55 22 11</p>
              <p>+996 777 55 22 11</p>
              <p>contactmif@gmail.com</p>
            </div>
          </div>

          <div class="box service">
            <span className="icon"><FaUserTag /></span>
            <div class="text">
              <h4>Обслуживание клиентов</h4>
              <p>+996 555 88 33 00</p>
              <p>+996 777 55 22 11</p>
              <p>c-supportmif@gmail.com</p>
            </div>
          </div>

          <div class="box service">
            <span className="icon"><FaTasks /></span>
            <div class="text">
              <h4>Отзывы и предложения</h4>
              <p>+996 555 88 33 00</p>
              <p>+996 777 55 22 11</p>
              <p>feedbackmif@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
