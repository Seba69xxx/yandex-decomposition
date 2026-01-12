import React from 'react';

/**
 * Отображает один элемент новостного списка с иконкой и ссылкой.
 */
const NewsItem = ({ icon, text, link }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '5px', alignItems: 'center' }}>
      {icon && <span style={{ fontSize: '18px', minWidth: '24px', textAlign: 'center' }}>{icon}</span>}
      <a href={link} style={{ textDecoration: 'none', color: '#333' }}>{text}</a>
    </div>
  );
};

export default NewsItem;
