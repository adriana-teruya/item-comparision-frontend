import React from 'react';
import { FaStar, FaTruck, FaShieldAlt } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatInstallments = (installments, installmentValue) => {
    return `${installments}x de ${formatPrice(installmentValue)}`;
  };

  // Extrair dados da estrutura do backend
  const currentPrice = product.price?.current || product.price;
  const originalPrice = product.price?.original;
  const discount = product.price?.discount;
  const rating = product.rating?.stars || product.rating;
  const reviews = product.rating?.reviews || product.reviews;
  const imageUrl = product.image_url || product.image;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={product.name} />
        {discount && (
          <div className="discount-badge">
            -{discount}%
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < rating ? 'star filled' : 'star'} 
              />
            ))}
          </div>
          <span className="rating-text">({reviews} avaliações)</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">{formatPrice(currentPrice)}</span>
          {originalPrice && (
            <span className="original-price">{formatPrice(originalPrice)}</span>
          )}
        </div>
        
        {product.installments && (
          <div className="installments">
            {formatInstallments(product.installments.count, product.installments.value)}
            {product.installments.interestFree && (
              <span className="interest-free"> sem juros</span>
            )}
          </div>
        )}
        
        <div className="product-features">
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
        
        <div className="product-specs">
          {Object.entries(product.specifications || {}).map(([key, value]) => (
            <div key={key} className="spec-item">
              <span className="spec-label">{key}:</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>
        
        <button className="buy-button">
          Comprar agora
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 