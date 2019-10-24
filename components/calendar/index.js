import React from 'react';
import Day from '@/calendar/Day';
// useState 앞으로 변경될 값 선언
// --------> 랜더링
// useEffect 값이 변경된 이후 실행될 행동 정의
const Index = () => {
  const getToday = new Date();
  const today = {
    y: getToday.getFullYear(),
    m: getToday.getMonth() + 1,
    d: getToday.getDate(),
  };
  const currentDay = new Date();
  const dayList = [];
  const [date, setDate] = React.useState(currentDay);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const currentModule = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
  };
  const firstDay = new Date(currentModule.y, currentModule.m - 1, 1).getDay();
  const lastDay = new Date(currentModule.y, currentModule.m, 0).getDate();
  const todayActive = (item) => item === today.d && currentModule.m === today.m && currentModule.y === today.y;
  const prevMonth = () => {
    let settingMonth;
    (currentModule.m - 1 === 0)
      ? settingMonth = `${currentModule.y - 1} 12`
      : settingMonth = `${currentModule.y} ${currentModule.m - 1}`;
    return setDate(new Date(settingMonth));
  };
  const nextMonth = () => {
    let settingMonth;
    (currentModule.m + 1 === 13)
      ? settingMonth = `${currentModule.y + 1} 1`
      : settingMonth = `${currentModule.y} ${currentModule.m + 1}`;
    return setDate(new Date(settingMonth));
  };
  for (let d = 1; d <= lastDay; d++) {
    dayList.push(d);
  }
  for (let e = 1; e <= firstDay; e++) {
    dayList.unshift('');
  }

  React.useEffect(() => {
  }, []);

  return (
    <>
      <div className="calendar-title">
        <button onClick={prevMonth}>&lt;</button>
        {currentModule.y}. {currentModule.m}
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-wrap">
        <div className="calendar-header">
          {
            week.map((item, index) => (
              <Day key={`${index}-day`} day={item} />
            ))
          }
        </div>
        <div className="calendar-body">
          {
            dayList.map((item, index) => (
              <Day key={`${index}-day`} day={item} current={todayActive(item)} />
            ))
          }
        </div>
      </div>
    </>
  );
};


export default Index;
