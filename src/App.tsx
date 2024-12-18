import React, { useEffect } from 'react';
import { PartyPopper } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import { triggerConfetti } from './utils/confetti';

function App() {
  useEffect(() => {
    triggerConfetti();
    const interval = setInterval(triggerConfetti, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl w-full mx-auto p-8">
        <div className="text-center backdrop-blur-lg bg-black/30 rounded-3xl p-12 shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <PartyPopper className="w-12 h-12 text-yellow-300" />
            <h1 className="text-5xl font-bold text-white">
              Happy Birthday Natasha & Zen!
            </h1>
            <PartyPopper className="w-12 h-12 text-yellow-300" />
          </div>
          
          <p className="text-xl text-white/90 mb-12">
            Counting down to your special day...
          </p>
          
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}

export default App;