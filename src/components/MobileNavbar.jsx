import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/MobileNavbar.scss';

export default class MobileNavbar extends PureComponent {
  render() {
    const { routes, show, handleClick } = this.props;
    return (
      <nav className={show ? 'mobile-navbar show' : 'mobile-navbar'}>
        <ul className="mobile-navbar__list">
          {routes.map((route) => (
            <li className="mobile-navbar__list__item" key={route.id}>
              <Link
                to={route.path}
                onClick={handleClick}
                className="mobile-navbar__link"
              >
                {route.name}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
