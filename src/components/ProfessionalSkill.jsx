import { RingProgress, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ProfessionalSkill = ({ data }) => {
  const { label, number, duration } = data;

  const [count, setCount] = useState(0);

  const { ref, inView, entry } = useInView({ triggerOnce: true });

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
    <div className="text-gray-500 dark:text-gray-300 font-[500] mb-2 w-fit">
        <div className=" relative">
          <RingProgress
            ref={ref}
            thickness={8}
            sections={[{ value: count.toString(), color: "#D1A002" }]}
          />
          <div className="absolute transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
            {count}%
          </div>
        </div>
          <h1 className=" text-center">{label}</h1>

    </div>
  );
};

export default ProfessionalSkill;
