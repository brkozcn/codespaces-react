import { useEffect } from 'react';
import { useState } from 'react';


function Counter() {

  const birthday = new Date('2023-08-28 20:29:00 GMT+0300');

  const [count,setCount] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    isFinished: false
  }); 

  useEffect(()=> {
    setInterval(() => {

     //Bugünün tarihleri
    const currentDate =  new Date();

    if (birthday > currentDate){
      const timeRemaining = birthday.getTime() - currentDate.getTime()
   
      let seconds = Math.floor(timeRemaining / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
       
       seconds %= 60;
       minutes %= 60;
       hours %= 24;
    
       setCount({
        ...count, 
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
       })
    } else {
        setCount({
          ...count,
          isFinished: true
        })
    }
   
    


   }, 1000);
  },[]);

  


  return (


    <div className="App">


      {`${count.days} gün - ${count.hours} saat ${count.minutes} dakika ${count.seconds} saniye`}
      <br />
      {count.isFinished ? 'bitmedi' : 'Süren Doldu Buton gelecek'}


    </div>
  );
}

export default Counter;


/**
 * 
 * 
 * gün saat dakika saniye
 * 
 * şimdiki zamanı al.
 * 
 * 
 */
