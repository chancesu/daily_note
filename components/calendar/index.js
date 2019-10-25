import React from 'react';
import Day from '@/calendar/Day';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const currentDay = new Date();
    this.state = {
      getToday: new Date(),
      currentModule: {
        y: currentDay.getFullYear(),
        m: currentDay.getMonth() + 1,
        d: currentDay.getDate(),
      },
      week: ['일', '월', '화', '수', '목', '금', '토'],
      dayList: [],
    };
  }

  componentDidMount() {
    this.settingCalendar(this.state.currentModule);
  }

  // eslint-disable-next-line class-methods-use-this
  settingCompute(current) {
    const dayList = [];
    const firstDay = new Date(current.y, current.m - 1, 1).getDay();
    const lastDay = new Date(current.y, current.m, 0).getDate();
    for (let d = 1; d <= lastDay; d++) {
      dayList.push(d);
    }
    for (let e = 1; e <= firstDay; e++) {
      dayList.unshift('');
    }
    return dayList;
  }

  settingCalendar(currentModule) {
    this.setState({ currentModule });
    const dayItem = this.settingCompute(currentModule);
    this.setState({
      dayList: dayItem,
    });
  }

  prevMonth = () => {
    let settingMonth;
    (this.state.currentModule.m - 1 === 0)
      ? settingMonth = `${this.state.currentModule.y - 1} 12`
      : settingMonth = `${this.state.currentModule.y} ${this.state.currentModule.m - 1}`;
    const getMonth = new Date(settingMonth);
    const getModule = {
      y: getMonth.getFullYear(),
      m: getMonth.getMonth() + 1,
      d: getMonth.getDate(),
    };
    this.settingCalendar(getModule);
  }

  nextMonth = () => {
    let settingMonth;
    (this.state.currentModule.m + 1 === 13)
      ? settingMonth = `${this.state.currentModule.y + 1} 1`
      : settingMonth = `${this.state.currentModule.y} ${this.state.currentModule.m + 1}`;
    const getMonth = new Date(settingMonth);
    const getModule = {
      y: getMonth.getFullYear(),
      m: getMonth.getMonth() + 1,
      d: getMonth.getDate(),
    };
    this.settingCalendar(getModule);
  }

  todayActive(item) {
    const today = {
      y: this.state.getToday.getFullYear(),
      m: this.state.getToday.getMonth() + 1,
      d: this.state.getToday.getDate(),
    };
    return item === today.d && this.state.currentModule.m === today.m && this.state.currentModule.y === today.y;
  }

  render() {
    return (
      <>
        <div className="calendar-title">
          <button onClick={this.prevMonth}>&lt;</button>
          {this.state.currentModule.y}. {this.state.currentModule.m}
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
