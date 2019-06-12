import React, {Component} from 'react';
import logo from '../images/logo10.jpg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState ({isOpen: !this.state.isOpen});
  };
  render () {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">

            {/* <Link to="/">
              <img src={logo} alt="Beach resort" width="10%" />
            </Link> */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >

              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >

            <img src={logo} alt="Beach resort" width="60px" height="55px" />

            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/rooms">Номера</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
