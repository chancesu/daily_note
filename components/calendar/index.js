import React from 'react';
import Day from '@/calendar/Day.js';

const Index = () => {
  const [date, setDate] = React.useState([]);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let now = new Date();
  let nowModule = {
    y : now.getFullYear(),
    m : now.getMonth()+1,
    d : now.getDate(),
  };
  let firstDay = new Date(nowModule.y, nowModule.m-1, 1).getDay();
  let lastDay = new Date(nowModule.y, nowModule.m, 0).getDate();
  console.log(nowModule.y,nowModule.m,nowModule.d,firstDay,lastDay);
  
  React.useEffect(()=>{
    setDate([1,2,3,4,5])
  },[])
  return (
    <>
        <div>달력을 만들어오시오!</div>
        {
            date.map((item, index)=>(
                <Day key={`${index}-day`} day={item}/>
            ))
        }
    </>
  )
}


export default Index;