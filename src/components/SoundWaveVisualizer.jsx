import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundWaveVisualizer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-cabernet dark:bg-darkForest text-cream-100 p-6 rounded-2xl border border-cream-100/20 space-y-4 my-8 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-pixel-line uppercase tracking-widest text-flame font-bold">
            [ INTERACTIVE ALGORITHM AUDIO SIMULATION ]
          </span>
          <h4 className="text-lg font-pixel-square font-bold mt-1">Sorting Frequency Soundscape</h4>
        </div>
        <button
          onClick={toggleSound}
          className="px-4 py-2 bg-flame text-white rounded-full font-pixel-line text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-flame-light transition-colors"
          data-cursor="hover"
          data-cursor-label={isPlaying ? 'MUTE' : 'LISTEN'}
        >
          {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span>{isPlaying ? 'Pause Audio' : 'Play Tone Audio'}</span>
        </button>
      </div>

      {/* Animated Sound Waves Bars */}
      <div className="flex items-end justify-between h-20 bg-cabernet-dark/80 dark:bg-forest/80 rounded-xl p-4 gap-1.5 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="w-full bg-flame rounded-t-sm transition-all duration-300"
            style={{
              height: isPlaying ? `${Math.floor(Math.random() * 85) + 15}%` : `${(i * 3) % 40 + 10}%`,
              opacity: isPlaying ? 0.95 : 0.4
            }}
          />
        ))}
      </div>
      <p className="text-xs text-cream-100/70 font-pixel-line italic">
        Simulating Web Audio API frequency feedback generated when comparing elements during Quick Sort and Merge Sort passes.
      </p>
    </div>
  );
};
