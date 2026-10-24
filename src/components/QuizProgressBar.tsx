import React from 'react';
import { ArrowLeft, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface QuizProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  onBack: () => void;
  onRestart: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const QuizProgressBar: React.FC<QuizProgressBarProps> = ({
  currentIndex,
  totalQuestions,
  onBack,
  onRestart,
  soundEnabled,
  onToggleSound,
}) => {
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto mb-6 sm:mb-8 space-y-3">
      {/* Top action row */}
      <div className="flex items-center justify-between text-xs text-stone-500 font-semibold uppercase tracking-wider">
        <div className="flex items-center gap-3">
          {currentIndex > 0 ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-stone-700 bg-stone-200/60 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Previous</span>
            </button>
          ) : (
            <span className="text-stone-400">Question 1</span>
          )}
          <span className="text-stone-600">
            Step {currentIndex + 1} of {totalQuestions}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={onRestart}
            title="Start over"
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Progress track */}
      <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-stone-900 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
