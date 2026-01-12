import React from 'react';

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
