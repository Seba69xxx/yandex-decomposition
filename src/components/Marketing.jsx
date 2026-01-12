import React from 'react';

/**
 * Отображает рекламный блок или ссылку на сервис с изображением и описанием.
 */
const Marketing = ({ img, title, text, link }) => {
  return (
    <div style={{ width: '150px', marginLeft: 'auto' }}>
      <img src={img} alt={title} style={{ width: '100%', borderRadius: '50%' }} />
      <h3><a href={link}>{title}</a></h3>
      <p>{text}</p>
    </div>
  );
};

export default Marketing;
