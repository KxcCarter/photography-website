import React, { useEffect, useState } from 'react';

const Blog = (props) => {
  const [time, setTime] = useState(1000);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(getRandomInt(400, 1600));
    }, time);

    return () => {
      clearInterval(myTimer);
    };
  }, [time]);

  return (
    <div style={{ padding: '70px' }}>
      <h1>{time}</h1>
    </div>
  );
};

export default Blog;
