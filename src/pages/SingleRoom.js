import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';
export default class SingleRoom extends Component {
  constructor (props) {
    super (props);
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  // componentDidMount(){}
  render () {
    const {getRoom} = this.context;
    const room = getRoom (this.state.slug);
    // console.log(room)
    if (!room) {
      return (
        <div className="error">
          <h3> По вашему запросу ничего не найден</h3>
          <Link to="/rooms" className="btn-primary">
            Вернуться к выбору номера
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              Вернуться к выбору номера
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map ((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Описание</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Характеристики</h3>
              <h6>Цена:{price}сом</h6>
              <h6>Площадь:{size}кв.м</h6>
              <h6>
                Вместимость:
                {''}
                {capacity > 1 ? `${capacity} человека` : ` ${capacity}человек`}
              </h6>
              <h6>
                {pets ? 'Дом.животные разрешены' : 'Дом.животные не разрешены'}
              </h6>
              <h6> {breakfast && 'Бесплатный завтрак'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Дополнительно</h6>
          <ul className="extras">
            {extras.map ((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
