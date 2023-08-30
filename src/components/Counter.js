import { useEffect, useState } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import SignInButton from './SignInButton';
import CounterBox from './CounterBox';


function Counter() {

  const birthday = new Date('2023-08-30 20:29:00 GMT+0300');

  const [count, setCount] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    isFinished: false
  });

  useEffect(() => {
    setInterval(() => {

      //Bugünün tarihleri
      const currentDate = new Date();

      if (birthday > currentDate) {
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
  }, []);

  return (
    

      <Flex
        //maxW={800}
        //display={'flex'}
        //flexDirection={'row'}
        //flexWrap={'wrap'}
        //justifyContent={'space-around'}
        //m={40}
        //backgroundColor={'red'}
        //alignItems={'center'}
      >

        <CounterBox number={count.days} text={'Days'} />
        <CounterBox number={count.hours} text={'Hours'} />
        <CounterBox number={count.minutes} text={'Minutes'} />
        <CounterBox number={count.seconds} text={'Seconds'} />

      </Flex>

    
  );
}

export default Counter;


