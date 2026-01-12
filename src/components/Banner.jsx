import React from 'react';

/**
 * Отображает рекламный баннер под строкой поиска.
 */
const Banner = ({ img, link }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <a href={link}>
        <img src={img} alt="Banner" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
      </a>
    </div>
  );
};

export default Banner;
