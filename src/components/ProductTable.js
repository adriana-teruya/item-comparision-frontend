import React from 'react';
import { FaStar, FaTruck, FaShieldAlt } from 'react-icons/fa';
import './ProductTable.css';

const ProductTable = ({ products }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatInstallments = (installments, installmentValue) => {
    return `${installments}x de ${formatPrice(installmentValue)}`;
  };

  // Get all unique specification keys from all products
  const getAllSpecKeys = () => {
    const specKeys = new Set();
    products.forEach(product => {
      Object.keys(product.specifications || {}).forEach(key => {
        specKeys.add(key);
      });
    });
    return Array.from(specKeys);
  };

  const specKeys = getAllSpecKeys();

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th className="product-header">Produto</th>
            <th className="price-header">Preço</th>
            <th className="rating-header">Avaliação</th>
            {specKeys.map(key => (
              <th key={key} className="spec-header">{key}</th>
            ))}
            <th className="features-header">Recursos</th>
            <th className="action-header">Ação</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            // Extrair dados da estrutura do backend
            const currentPrice = product.price?.current || product.price;
            const originalPrice = product.price?.original;
            const discount = product.price?.discount;
            const rating = product.rating?.stars || product.rating;
            const reviews = product.rating?.reviews || product.reviews;
            const imageUrl = product.image_url || product.image;

            return (
              <tr key={index} className="product-row">
                <td className="product-cell">
                  <div className="product-info-cell">
                    <img src={imageUrl} alt={product.name} className="product-thumbnail" />
                    <div className="product-details">
                      <h4 className="product-name">{product.name}</h4>
                      {discount && (
                        <span className="discount-badge">-{discount}%</span>
                      )}
                    </div>
                  </div>
                </td>
                
                <td className="price-cell">
                  <div className="price-info">
                    <div className="current-price">{formatPrice(currentPrice)}</div>
                    {originalPrice && (
                      <div className="original-price">{formatPrice(originalPrice)}</div>
                    )}
                    {product.installments && (
                      <div className="installments">
                        {formatInstallments(product.installments.count, product.installments.value)}
                        {product.installments.interestFree && (
                          <span className="interest-free"> sem juros</span>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                
                <td className="rating-cell">
                  <div className="rating-info">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < rating ? 'star filled' : 'star'} 
                        />
                      ))}
                    </div>
                    <span className="rating-text">({reviews})</span>
                  </div>
                </td>
                
                {specKeys.map(key => (
                  <td key={key} className="spec-cell">
                    {product.specifications?.[key] || '-'}
                  </td>
                ))}
                
                <td className="features-cell">
                  <div className="features-list">
                    {product.freeShipping && (
                      <div className="feature">
                        <FaTruck className="feature-icon" />
                        <span>Frete grátis</span>
                      </div>
                    )}
                    {product.warranty && (
                      <div className="feature">
                        <FaShieldAlt className="feature-icon" />
                        <span>{product.warranty}</span>
                      </div>
                    )}
                  </div>
                </td>
                
                <td className="action-cell">
                  <button className="buy-button">
                    Comprar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable; 