import React from 'react';

const NewsItem = ({ icon, text, link }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
      {icon && <img src={icon} alt="" style={{ width: 16, height: 16 }} />}
      <a href={link} style={{ textDecoration: 'none', color: '#333' }}>{text}</a>
    </div>
  );
};

export default NewsItem;
