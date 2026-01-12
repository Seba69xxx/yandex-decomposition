import React from 'react';

/**
 * Компонент для отображения погоды с иконкой и температурой.
 */
export const WeatherContent = ({ icon, temp, text }) => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <span>{icon}</span>
    <span style={{ fontSize: '24px' }}>{temp}°</span>
    <span>{text}</span>
  </div>
);

/**
 * Компонент для отображения одной строки телепрограммы.
 */
export const ProgramItem = ({ time, name, channel }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
    <span>{time}</span>
    <span style={{ flexGrow: 1, marginLeft: '10px' }}>{name}</span>
    <span style={{ color: 'gray' }}>{channel}</span>
  </div>
);
