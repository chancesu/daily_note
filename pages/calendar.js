import React from 'react';
import Helmet from 'react-helmet';
import scss from '@styles/index.scss';
import calendarStyle from '@styles/calendar.scss';
import CalendarContainer from '@/calendar';

const Calendar = () => (
  <>
    <Helmet title="Calendar Page" />
    <CalendarContainer/>
  </>
);

export default Calendar;
