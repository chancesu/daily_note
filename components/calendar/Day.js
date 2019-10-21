import React from 'react';

const Day = ({ day, current }) => {
  return (
    <div className={`day ${current ? 'active' : ''}`}><span>{day}</span></div>
  );
}




export default Day;