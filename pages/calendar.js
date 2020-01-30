import React from 'react';
import Helmet from 'react-helmet';
import CalendarContainer from '@/calendar';
import '@styles/index.scss';
import '@styles/calendar.scss';

const Calendar = () => (
  <>
    <Helmet title="Calendar Page" />
    <CalendarContainer />
  </>
);

export default Calendar;
