
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
    <div className="flex items-center justify-center w-full px-4 py-3 mt-2 mb-4 bg-gradient-to-r from-[#cc1653] to-[#e14e7d] rounded-xl shadow-md">
      <div className="flex items-center justify-center gap-3">
        <Clock className="w-6 h-6 text-white/90" strokeWidth={2.5} />
        <div className="text-white text-sm font-medium">
          Complete order within{' '}
          <span className="font-bold bg-white/20 px-2 py-1 rounded-md mx-1">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>{' '}
          to claim <span className="font-bold uppercase">Free Shipping</span>
        </div>
      </div>
    </div>
  );
};
