import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

import '../styles/components/AppBarBrand.scss';

export default class Brand extends PureComponent {
  render() {
    const { handleClick } = this.props;
    return (
      <Link to="/" className="brand" onClick={handleClick}>
        <figure className="brand__fig">
          <img src={logo} alt="brand icon" className="brand__icon" />
        </figure>
        <h1 className="brand__name">
          <span className="italy">Fake</span>{' '}
          <strong className="font-bold">Store</strong>
        </h1>
      </Link>
    );
  }
}
