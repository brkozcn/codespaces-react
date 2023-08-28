import { useEffect,useState } from 'react';
import { Box,Text,Flex } from '@chakra-ui/react';


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


    <Flex
    
    >

{
  /**
   * 
   * {`${count.days} gün - ${count.hours} saat ${count.minutes} dakika ${count.seconds} saniye`}
      <br />
      {count.isFinished ? 'bitmedi' : 'Süren Doldu Buton gelecek'}
      <br />
   * 
   */
}
      


<Flex
maxW={800}
display={'flex'}
flexDirection={'row'}
flexWrap={'wrap'}
justifyContent={'space-around'}
m={40}
backgroundColor={'red'}
alignItems={'center'}
>
      <Flex 
      backgroundColor={'#413c69'}
      fontSize={50}
      fontWeight={700}
      color={'#dcd6f7'}
      borderRadius={15}
      w={160}
      h={160}
      m={10}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      >
        <Text
        fontSize={50}
        color={'#dcd6f7'}
        m={0}
        >
{count.days}
        </Text>
        
        <Text
        fontSize={30}
        color={'#a6b1e1'}
        m={0}
        >
          Days
        </Text>
      </Flex>


      <Flex 
      backgroundColor={'#413c69'}
      fontSize={50}
      fontWeight={700}
      color={'#dcd6f7'}
      borderRadius={15}
      w={160}
      h={160}
      m={10}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      >
        <Text
        fontSize={50}
        color={'#dcd6f7'}
        m={0}
        >
{count.hours}
        </Text>
        
        <Text
        fontSize={30}
        color={'#a6b1e1'}
        m={0}
        >
          Hours
        </Text>
      </Flex>


      <Flex 
      backgroundColor={'#413c69'}
      fontSize={50}
      fontWeight={700}
      color={'#dcd6f7'}
      borderRadius={15}
      w={160}
      h={160}
      m={10}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      >
        <Text
        fontSize={50}
        color={'#dcd6f7'}
        m={0}
        >
{count.minutes}
        </Text>
        
        <Text
        fontSize={30}
        color={'#a6b1e1'}
        m={0}
        >
         Minutes
        </Text>
      </Flex>


      <Flex 
      backgroundColor={'#413c69'}
      fontSize={50}
      fontWeight={700}
      color={'#dcd6f7'}
      borderRadius={15}
      w={160}
      h={160}
      m={10}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      >
        <Text
        fontSize={50}
        color={'#dcd6f7'}
        m={0}
        >
{count.seconds}
        </Text>
        
        <Text
        fontSize={30}
        color={'#a6b1e1'}
        m={0}
        >
          Seconds
        </Text>


      </Flex>

      </Flex>

      

    </Flex>
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


/**
 * 
 * background-color: #413c69;
  font-size: 50px;
  font-weight: 700;
  color: #dcd6f7;
  border-radius: 15px;
  width: 160px;
  height: 160px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
 */


  /**
   * 
   * 
   * max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 0;
   */