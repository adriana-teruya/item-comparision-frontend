import React from 'react';
import { FaTh, FaList } from 'react-icons/fa';
import './LayoutToggle.css';

const LayoutToggle = ({ layout, onLayoutChange }) => {
  return (
    <div className="layout-toggle">
      <button
        className={`toggle-button ${layout === 'cards' ? 'active' : ''}`}
        onClick={() => onLayoutChange('cards')}
        title="Visualização em cards"
      >
        <FaTh />
        <span>Cards</span>
      </button>
      <button
        className={`toggle-button ${layout === 'table' ? 'active' : ''}`}
        onClick={() => onLayoutChange('table')}
        title="Visualização em tabela"
      >
        <FaList />
        <span>Tabela</span>
      </button>
    </div>
  );
};

export default LayoutToggle; 