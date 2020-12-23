import React, { useEffect, useState, Suspense } from 'react';

import './App.css';
import Layout from './components/Layout';

const Grid = React.lazy(() => import('./components/Grid'));


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://stradiv.herokuapp.com/productos')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  return (
    <div className="App">
      <Layout>
        <div id="slideshow">
          <h3>Colección Fiesta </h3>
          <div className="animation">
          <h2>-</h2>
          <h2 className="animatedNumber"></h2>
          <h2>0%</h2>
          </div>
        </div>
        <main>
          <div className="container">
            <h3 className="text-center">Our Colection</h3>
            <div className="container container2">
            {products ? products.map((product) => <Suspense fallback={<div>Loading...</div>}><Grid 
            title={product.titulo} 
            key={product.id} 
            img={product.imagen[0].name}/></Suspense>) : null}
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default App;
