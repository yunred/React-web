import React, { memo } from 'react';

//Hooks가 아니라 그냥 함수 컴포넌트임 (useEffect, useState를 안씀)
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
  } else {
    background = 'green';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

export default Ball;
