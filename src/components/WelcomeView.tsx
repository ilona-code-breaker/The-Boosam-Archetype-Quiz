import React from 'react';
import { Sparkles, ArrowRight, Clock, HelpCircle, ShieldAlert } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface WelcomeViewProps {
  onStart: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onStart }) => {
  const handleStart = () => {
    sounds.playNext();
    onStart();
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-10 animate-in fade-in duration-300 pb-16">
      {/* Editorial Cover Header */}
      <div className="text-center space-y-6 pt-4 sm:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-amber-200 text-xs font-bold tracking-widest uppercase shadow-sm">
          <Sparkles size={13} className="text-amber-400" />
          Confidential Personality Quiz
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-editorial text-stone-950 tracking-tight leading-[1.08]">
          The Boob <br />
          <span className="italic font-normal">Archetype Quiz</span>
        </h1>

        <p className="text-base sm:text-lg text-stone-600 max-w-lg mx-auto font-normal leading-relaxed">
          5 intuitive questions designed to uncover your true silhouette persona. Answer quickly based on pure instinct.
        </p>

        {/* Start Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={handleStart}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-amber-100 font-bold text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <span>Start Quiz</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-stone-500 pt-1 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-stone-500" /> 1-2 minutes
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-stone-500" /> Blind scoring
          </span>
        </div>
      </div>

      {/* Blind Quiz Notice Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-stone-800">
          How It Works
        </h2>
        <ul className="space-y-3 text-sm text-stone-600">
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            <span>
              Read each scenario and choose the option that most naturally resonates with you.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            <span>
              Do not overthink. There are no right, wrong, or superior choices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            <span>
              Your full archetype profile, behavioral traits, and complete dossier are calculated and revealed only after the final question.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
