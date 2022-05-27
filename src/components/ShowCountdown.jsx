import React, { useEffect, useState } from 'react';

export default function ShowCountdown({ countdown }) {
  const classNameBase = 'product-card__countdown';
  const success = `${classNameBase}--success`;
  const warning = `${classNameBase}--warning`;
  const danger = `${classNameBase}--danger`;

  const [minutes, setMinutes] = useState(Math.floor(countdown / 60));
  const [seconds, setSeconds] = useState(countdown % 60);
  const [className, setClassName] = useState(classNameBase);

  const filledZero = (number) => (number >= 10 ? number : `0${number}`);

  useEffect(() => {
    setMinutes(filledZero(Math.floor(countdown / 60).toString()));
    setSeconds(filledZero(countdown % 60));

    if (countdown > 120) {
      setClassName(`${classNameBase} ${success}`);
    } else if (countdown <= 120 && countdown > 30) {
      setClassName(classNameBase);
    } else if (countdown <= 30 && countdown > 10) {
      setClassName(`${classNameBase} ${warning}`);
    } else {
      setClassName(`${classNameBase} ${danger}`);
    }
  }, [countdown, className, success, warning, danger]);
  return (
    <div className={className}>
      {minutes}:{seconds}
    </div>
  );
}
