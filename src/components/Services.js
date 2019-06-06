import React, {Component} from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaProcedures} from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Бесплатный лимонад',
        info: 'У нас вы можете наслаждаться бесплатным лимонадом. Лимонад замечательно утоляет жажду и способствует охлаждению организма. Также является отличным источником витаминов для нашего организма. ',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Интересные туры',
        info: 'Мы по желанию организуем нашим посетителям туры. Вас ждет экскурсия по основным достопримечательностям Бишкека и Каракола. В программе тура: ущелье Джеты-Огуз, озеро Иссык-Куль, вкусный ужин и многое другое.',
      },
      {
        icon: <FaHiking />,
        title: 'Треккинг',
        info: 'Походы будут наполнены настоящими чудесами природы. Поднявшись на перевал (3800 м), можно будет увидеть потрясающе красивое озеро Алаколь (Ала-Кёль) — одно из самых красивых в Кыргызстане.',
      },
      {
        icon: <FaProcedures />,
        title: 'Все виды массажа',
        info: 'Вы можете воспользоваться услугами профессиональных массажистов. Среди различных способов оздоровления и релаксации один из лучших – массаж. Основная цель массажа – снятие напряжения.',
      },
    ],
  };
  render () {
    return (
      <section className="services">
        <Title title="Услуги" />
        <div className="services-center">
          {this.state.services.map ((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
