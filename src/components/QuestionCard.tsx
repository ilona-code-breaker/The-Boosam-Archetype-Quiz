import React, { useState } from 'react';
import { QuizQuestion, ArchetypeKey } from '../data/quizData';
import { sounds } from '../utils/soundEffects';
import { ArrowRight, Check } from 'lucide-react';

interface QuestionCardProps {
  question: QuizQuestion;
  selectedKey?: ArchetypeKey;
  onSelectOption: (key: ArchetypeKey) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
  optionsList: { key: ArchetypeKey; text: string }[];
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedKey,
  onSelectOption,
  onNext,
  questionNumber,
  totalQuestions,
  optionsList,
}) => {
  const [animatingKey, setAnimatingKey] = useState<ArchetypeKey | null>(null);

  const handleOptionClick = (key: ArchetypeKey) => {
    setAnimatingKey(key);
    sounds.playSelect();
    onSelectOption(key);

    // Smooth auto-advance after brief visual feedback
    setTimeout(() => {
      setAnimatingKey(null);
      onNext();
    }, 280);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Question Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
          <span className="px-2 py-0.5 rounded bg-stone-200/80 text-stone-800 font-mono">
            {questionNumber} of {totalQuestions}
          </span>
          <span>Question</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-stone-950 leading-snug">
          {question.question}
        </h2>

        {question.subtitle && (
          <p className="text-sm text-stone-600 font-normal">
            {question.subtitle}
          </p>
        )}
      </div>

      {/* Options List */}
      <div className="space-y-3 pt-2">
        {optionsList.map((option, index) => {
          const isSelected = selectedKey === option.key || animatingKey === option.key;

          return (
            <button
              key={`${question.id}-${option.key}`}
              onClick={() => handleOptionClick(option.key)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer relative group ${
                isSelected
                  ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-md scale-[1.01]'
                  : 'bg-white hover:bg-stone-50/90 text-stone-800 border-stone-200/90 hover:border-stone-400 shadow-sm'
              }`}
            >
              {/* Neutral Number Indicator */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 shadow'
                    : 'bg-stone-100 text-stone-600 group-hover:bg-stone-200'
                }`}
              >
                {index + 1}
              </div>

              {/* Text */}
              <div className="flex-1">
                <p
                  className={`text-sm sm:text-base font-medium leading-relaxed ${
                    isSelected ? 'text-stone-50' : 'text-stone-900'
                  }`}
                >
                  {option.text}
                </p>
              </div>

              {/* Right Selection Circle */}
              <div className="shrink-0 pt-0.5">
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-amber-400 border-amber-400 text-stone-950'
                      : 'border-stone-300 group-hover:border-stone-400 text-transparent'
                  }`}
                >
                  <Check size={14} className="stroke-[3]" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Manual Continue button if an option was previously selected and user is navigating back/forth */}
      {selectedKey && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => {
              sounds.playNext();
              onNext();
            }}
            className="px-6 py-2.5 rounded-xl bg-stone-900 text-amber-50 hover:bg-stone-800 font-semibold text-sm flex items-center gap-2 shadow transition-all cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};
