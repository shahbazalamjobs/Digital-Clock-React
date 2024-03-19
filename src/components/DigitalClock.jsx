// import React, { useState, useEffect } from 'react';


// const DigitalClock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (time) => {
//     return time.toLocaleTimeString([], { hour12: true });
//   };

//   return (
//     <div className="clock-container">
//       <h1>Digital Clock</h1>
//       <p className="clock">{formatTime(time)}</p>
//     </div>
//   );
// };

// export default DigitalClock;

import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const hours = formatTime(currentTime.getHours());
  const minutes = formatTime(currentTime.getMinutes());
  const seconds = formatTime(currentTime.getSeconds());

  return (
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <div className="time">
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
