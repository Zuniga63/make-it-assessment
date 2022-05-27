import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingMessage from '../components/LoadingMessage';
import ProductDetailCard from '../components/ProductDetailCard';
import '../styles/pages/ProductDetail.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://fakestoreapi.com/products/${id}`;
      try {
        const res = await axios.get(url);
        setProduct({ ...res.data, rate: 4, stock: 120 });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="product-detail">
      <header className="product-detail__header">
        <h2 className="product-detail__title">Detalles del producto</h2>
      </header>

      <div className="product-detail__body">
        {loading ? <LoadingMessage /> : <ProductDetailCard product={product} />}
      </div>
    </div>
  );
}
