import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowCountdown from './ShowCountdown';
import '../styles/components/ProductCard.scss';

function ProductCard({ product }) {
  const minutes = Math.ceil(Math.random() * 3);
  const [countdown, setCountdown] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown <= 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [countdown]);
  return (
    <div className="product-card shadow">
      <figure className="product-card__header">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__img"
          loading="lazy"
        />
      </figure>

      <div className="product-card__body">
        <h2 className="product-card__title">{product.title}</h2>
      </div>

      <footer className="product-card__footer">
        <ShowCountdown countdown={countdown} />
        {countdown > 0 && (
          <Link to={`product/${product.id}`} className="product-card__button">
            Ir a detalle
          </Link>
        )}
      </footer>

      <div className="product-card__category"> {product.category} </div>
    </div>
  );
}

export default ProductCard;
