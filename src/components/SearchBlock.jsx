import React from 'react';

/**
 * Отвечает за отображение логотипа, навигационных вкладок и основной строки поиска.
 */
const SearchBlock = () => {
  const searchTabs = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир'];

  return (
    <div style={{ margin: '30px 0' }}>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '5px', color: 'blue' }}>
        {searchTabs.map(tab => <span key={tab}>{tab}</span>)}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '30px', fontWeight: 'bold', color: 'red', marginRight: '10px' }}>Ya</div>
        <input type="text" style={{ width: '100%', padding: '10px', border: '2px solid gold' }} />
        <button style={{ padding: '10px 20px', background: 'gold', border: 'none' }}>Найти</button>
      </div>

      <div style={{ marginTop: '5px', fontSize: '14px' }}>
        Найдется всё. Например, <span style={{ color: 'gray' }}>фаза луны сегодня</span>
      </div>
    </div>
  );
};

export default SearchBlock;
