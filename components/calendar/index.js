import React from 'react';
import Day from '@/calendar/Day';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getToday: new Date(),
      currentDay: new Date(),
      week: ['일', '월', '화', '수', '목', '금', '토'],
      dayList: []
    };
  }

  componentDidMount() {
    this.settingCalendar();
  }

  settingCalendar() {
    const dayItem = this.settingCompute();
    this.setState({
      dayList: dayItem[0],
      currentDay: dayItem[1]
    });
  }

  settingCompute() {
    const dayList = [];
    const currentModule = {
      y: this.state.currentDay.getFullYear(),
      m: this.state.currentDay.getMonth() + 1,
      d: this.state.currentDay.getDate(),
    };
    const firstDay = new Date(currentModule.y, currentModule.m - 1, 1).getDay();
    const lastDay = new Date(currentModule.y, currentModule.m, 0).getDate();
    for (let d = 1; d <= lastDay; d++) {
      dayList.push(d);
    }
    for (let e = 1; e <= firstDay; e++) {
      dayList.unshift('');
    }
    return [dayList, currentModule];
  }

  prevMonth = () => {
    let settingMonth;
    (this.state.currentDay.m - 1 === 0)
      ? settingMonth = `${this.state.currentDay.y - 1} 12`
      : settingMonth = `${this.state.currentDay.y} ${this.state.currentDay.m - 1}`;
    const getMonth = new Date(settingMonth);
    const getModule = {
      y: getMonth.getFullYear(),
      m: getMonth.getMonth() + 1,
      d: getMonth.getDate(),
    };
    this.setState({ currentDay: getModule });
    this.settingCalendar();
  }

  nextMonth = () => {
    let settingMonth;
    (this.state.currentDay.m + 1 === 13)
      ? settingMonth = `${this.state.currentDay.y + 1} 1`
      : settingMonth = `${this.state.currentDay.y} ${this.state.currentDay.m + 1}`;
    const getMonth = new Date(settingMonth);
    const getModule = {
      y: getMonth.getFullYear(),
      m: getMonth.getMonth() + 1,
      d: getMonth.getDate(),
    };
    this.setState({ currentDay: getModule });
    this.settingCalendar();
  }

  todayActive(item) {
    const today = {
      y: this.state.getToday.getFullYear(),
      m: this.state.getToday.getMonth() + 1,
      d: this.state.getToday.getDate(),
    };
    return item === today.d && this.state.currentDay.m === today.m && this.state.currentDay.y === today.y;
  }

  render() {
    return (
      <>
        <div className="calendar-title">
          <button onClick={this.prevMonth}>&lt;</button>
          {this.state.currentDay.y}. {this.state.currentDay.m}
          <button onClick={this.nextMonth}>&gt;</button>
        </div>
        <div className="calendar-wrap">
          <div className="calendar-header">
            {
              this.state.week.map((item, index) => (
                <Day key={`${index}-day`} day={item} />
              ))
            }
          </div>
          <div className="calendar-body">
            {
              this.state.dayList.map((item, index) => (
                <Day key={`${index}-day`} day={item} current={this.todayActive(item)} />
              ))
            }
          </div>
        </div>
      </>
    );
  }
}
