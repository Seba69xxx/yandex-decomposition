import React from 'react';
import NewsItem from './NewsItem';

const NewsBlock = ({ tabs, news, rates }) => {
  return (
    <div className="news-block" style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '15px', color: 'blue', marginBottom: '10px' }}>
        {tabs.map((tab, index) => <span key={index} style={{ cursor: 'pointer' }}>{tab}</span>)}
        <span style={{ color: 'gray' }}>{new Date().toLocaleDateString()}</span>
      </div>

      <div className="news-list">
        {news.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '15px', marginTop: '10px', fontWeight: 'bold' }}>
        {rates.map((rate, index) => (
          <span key={index}>{rate.currency} {rate.value} <span style={{ color: 'gray' }}>{rate.diff}</span></span>
        ))}
      </div>
    </div>
  );
};

export default NewsBlock;
