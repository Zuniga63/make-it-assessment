import React, { Component } from 'react';
import '../styles/components/AppBar.scss';

import Brand from './AppBarBrand';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: 'about', name: 'About' },
      ],
      showNavbar: false,
    };
    this.navbarToggle = this.navbarToggle.bind(this);
    this.hiddeNavbar = this.hiddeNavbar.bind(this);
  }

  navbarToggle() {
    const { showNavbar } = this.state;
    this.setState({ showNavbar: !showNavbar });
  }

  hiddeNavbar() {
    this.setState({ showNavbar: false });
  }

  render() {
    const { routes, showNavbar } = this.state;
    return (
      <div className="app-bar">
        <Brand handleClick={this.hiddeNavbar} />
        <MobileNavbar
          routes={routes}
          show={showNavbar}
          handleClick={this.hiddeNavbar}
        />
        <DesktopNavbar routes={routes} />

        <button
          className="app-bar__toggle"
          type="button"
          onClick={this.navbarToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="app-bar__toggle__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  }
}
