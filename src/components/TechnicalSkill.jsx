import { Progress } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const TechnicalSkill = ({ data }) => {

    const { label, number, duration } = data;

  const [count, setCount] = useState(0);

  const { ref, inView, entry } = useInView({triggerOnce: true});

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
      // if zero, return
      if (start === end) return;

      // find duration per increment
      let totalMilSecDur = duration;
      let incrementTime = (totalMilSecDur / end) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [number, duration, inView]);
  return (
    <div ref={ref} className=' mb-8'>
        <div className=' flex items-center justify-between mb-3 text-gray-500 dark:text-gray-300 font-[500]'>
            <div>{label}</div>
            <div>{count}%</div>
        </div>
      <Progress radius="xs" color="#D1A002" value={count} />

      
    </div>
  )
}

export default TechnicalSkill