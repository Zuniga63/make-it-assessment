import React from 'react';
import '../styles/components/ProductDetailCard.scss';

export default function ProductDetailCard({ product }) {
  return (
    <div className="product-detail-card">
      <div className="product-detail-card__general">
        <figure className="product-detail-card__fig">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-card__img"
          />
        </figure>

        <h1 className="product-detail-card__title"> {product.title} </h1>
        <p className="product-detail-card__description">
          {product.description}
        </p>

        <p className="product-detail-card__price"> $ {product.price} </p>
      </div>

      <div className="product-detail-card__feature">
        <p className="product-detail-card__header">Caracteristicas</p>
        <div className="product-detail__feature__item">
          <p className="product-detail-card__feature__name">Categoría:</p>
          <p className="product-detail-card__feature__value">
            {product.category}
          </p>
        </div>

        <div className="product-detail__feature__item">
          <p className="product-detail-card__feature__name">Raiting:</p>
          <p className="product-detail-card__feature__value">{product.rate}</p>
        </div>

        <div className="product-detail__feature__item">
          <p className="product-detail-card__feature__name">Stock:</p>
          <p className="product-detail-card__feature__value">{product.stock}</p>
        </div>
      </div>
    </div>
  );
}
