import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const timeLeft = useCountdown(new Date('2025-01-10T00:00:00'));

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
          <div className="text-4xl font-bold text-white mb-2">{value}</div>
          <div className="text-sm text-white/80 uppercase tracking-wider">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;