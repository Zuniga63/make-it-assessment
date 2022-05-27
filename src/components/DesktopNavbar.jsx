import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/DesktopNavbar.scss';

export default class DesktopNavbar extends PureComponent {
  render() {
    const { routes } = this.props;

    return (
      <ul className="desktop-navbar">
        {routes.map((route) => (
          <li className="desktop-navbar__item" key={route.id}>
            <Link to={route.path} className="desktop-navbar__link">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
