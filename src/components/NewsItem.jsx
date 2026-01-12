import React from 'react';

const NewsItem = ({ icon, text, link }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '5px', alignItems: 'center' }}>
      {icon && <span style={{ fontSize: '18px', width: '20px', textAlign: 'center' }}>{icon}</span>}
      <a href={link} style={{ textDecoration: 'none', color: '#333' }}>{text}</a>
    </div>
  );
};

export default NewsItem;
