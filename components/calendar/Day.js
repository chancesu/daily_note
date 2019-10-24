import React from 'react';

const Day = ({ day, current }) => (
  <div className={`day ${current ? 'active' : ''}`}><span>{day}</span></div>
);

export default Day;
