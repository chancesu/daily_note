import React from 'react';
import Helmet from 'react-helmet';
import '@styles/calendar.scss';
import CalendarContainer from '@/calendar';

const Calendar = () => (
  <>
    <Helmet title="Calendar Page" />
    <CalendarContainer />
  </>
);

export default Calendar;
