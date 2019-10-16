import React from 'react';
import Day from '@/calendar/Day.js';

const Index = () => {
  const [date, setDate] = React.useState([1,2,3,4,5]);
  React.useEffect(()=>{
    setDate([1,2,3,4,5])
  },[])
  return (
    <React.Fragment>
        <div>달력을 만들어오시오!</div>
        {
            date.map((item, index)=>(
                <Day key={`${index}-day`} day={item}/>
            ))
        }
    </React.Fragment>
  )
}


export default Index;