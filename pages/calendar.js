import React from 'react';
import Helmet from 'react-helmet';
import CalendarContainer from '@/calendar';
import scss from '@styles/index.scss';

const Calendar = () => (
  <React.Fragment>
    <Helmet title="Calendar Page" />
    <CalendarContainer/>
  </React.Fragment>
)

export default Calendar;