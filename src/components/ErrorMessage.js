import React from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <FaExclamationTriangle className="error-icon" />
        <h3>Erro ao carregar produtos</h3>
        <p>{message}</p>
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            <FaRedo />
            Tentar novamente
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 