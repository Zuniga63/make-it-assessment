import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../store';
import '../styles/pages/Home.scss';

function Home() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <main className="home">
      <header className="home__header">
        <h1 className="home__title">Productos</h1>
      </header>
      <div className="home__body">
        {products &&
          products.map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
      </div>
    </main>
  );
}

export default Home;
