
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes: number;
  initialSeconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes,
  initialSeconds,
}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex items-center justify-center w-full px-4 py-3 mt-2 mb-4 bg-gradient-to-r from-[#FFE29F] to-[#FF719A] rounded-lg shadow-sm">
      <div className="flex items-center justify-center gap-2">
        <Clock className="w-5 h-5 text-white" />
        <div className="text-white font-medium">
          Complete order within{' '}
          <span className="font-bold">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>{' '}
          to claim <span className="font-bold">FREE SHIPPING</span>
        </div>
      </div>
    </div>
  );
};
