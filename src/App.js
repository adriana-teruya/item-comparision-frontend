import React, { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import LayoutToggle from './components/LayoutToggle';
import ProductCard from './components/ProductCard';
import ProductTable from './components/ProductTable';
import { fetchProducts } from './services/api';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [layout, setLayout] = useState('cards');

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.error('Erro ao carregar produtos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleRetry = () => {
    loadProducts();
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Comparação de Produtos</h1>
          <p className="subtitle">Compare características e especificações para encontrar o produto ideal para você.</p>
        </div>
      </header>
      
      <main className="main-content">
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        {!loading && !error && (
          <>
            <div className="search-context">
              <h2 className="search-title">Fones de Ouvido</h2>
              <p className="search-subtitle">Comparando {products.length} produtos encontrados</p>
            </div>

            <LayoutToggle layout={layout} onLayoutChange={setLayout} />

            <div className="comparison-container">
              {layout === 'cards' ? (
                <div className="card-grid">
                  {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              ) : (
                <ProductTable products={products} />
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App; 