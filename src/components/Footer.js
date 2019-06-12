import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsappSquare,
} from 'react-icons/fa';

export default function Footer () {
  return (
    <div>
      <React.Fragment>
        <div className="social_section">
          <div className="col social">
            <div className="service span services-center">
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
              <span><FaTelegram /></span>
              <span><FaWhatsappSquare /></span>
            </div>
          </div>
        </div>
        {/* <!-- FOOTER START --> */}
        <div className="footer">
          <div className="contain">
            <div className="col">
              <h1>Bishkek 2019</h1>
              <ul>
                <li>
                  Кыргызская Республика,
                  Иссык-Кульская обл.

                </li>
                <li>с. Булан-Соготту</li>

              </ul>
            </div>
            <div className="col">
              <h1>Миф</h1>
              <ul>
                <li>О нас </li>
                <li>Миссия</li>
                <li>Услуги</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="col">
              <h1>Номера</h1>
              <ul>
                <li>Однокомнатные</li>
                <li>Двухкомнатные</li>
                <li>Семейные</li>
                <li>Люксовые</li>
              </ul>
            </div>
            <div className="col">
              <h1>Контакты</h1>
              <ul>
                <li>+996 555 22 33 11</li>
                <li>+996 777 22 33 11</li>
                <li>contactmif@gmail.com</li>
                <li>contactmif@mail.ru</li>
              </ul>
            </div>

            <div className="clearfix" />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
