import React from 'react';

/**
 * Универсальный компонент-обертка для виджетов, принимающий заголовок и children.
 */
const Widget = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: 'blue', marginBottom: '5px' }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Widget;
