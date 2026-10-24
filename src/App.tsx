import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, ArchetypeKey, QuizQuestion } from './data/quizData';
import { WelcomeView } from './components/WelcomeView';
import { QuizProgressBar } from './components/QuizProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultView } from './components/ResultView';
import { AllArchetypesModal } from './components/AllArchetypesModal';
import { sounds } from './utils/soundEffects';
import { BookOpen, Volume2, VolumeX } from 'lucide-react';

function shuffleOptions(options: QuizQuestion['options']) {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ArchetypeKey[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);

  // Store randomized options for each question so the order remains consistent during back/forth navigation
  const [questionOptionsMap, setQuestionOptionsMap] = useState<
    Record<number, QuizQuestion['options']>
  >(() => {
    const initialMap: Record<number, QuizQuestion['options']> = {};
    QUIZ_QUESTIONS.forEach((q) => {
      initialMap[q.id] = shuffleOptions(q.options);
    });
    return initialMap;
  });

  const toggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    sounds.enabled = nextVal;
  };

  const handleStartQuiz = () => {
    // Re-shuffle options on quiz start for maximum unpredictability
    const newMap: Record<number, QuizQuestion['options']> = {};
    QUIZ_QUESTIONS.forEach((q) => {
      newMap[q.id] = shuffleOptions(q.options);
    });
    setQuestionOptionsMap(newMap);

    setAnswers([]);
    setCurrentQuestionIndex(0);
    setStep('quiz');
  };

  const handleSelectOption = (key: ArchetypeKey) => {
    const updated = [...answers];
    updated[currentQuestionIndex] = key;
    setAnswers(updated);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStep('result');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setStep('welcome');
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex];
  const currentOptions = questionOptionsMap[currentQuestion?.id] || currentQuestion?.options || [];

  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#1E1917] flex flex-col justify-between selection:bg-amber-200 selection:text-stone-900">
      {/* Top Editorial Navbar */}
      <header className="sticky top-0 z-40 w-full bg-[#FAF7F4]/90 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={handleRestart}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-200 flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
            ✦
          </div>
          <div>
            <span className="block font-editorial font-bold text-stone-900 text-sm tracking-tight group-hover:text-amber-900 transition-colors">
              The Silhouette Quiz
            </span>
            <span className="block text-[10px] uppercase font-bold tracking-widest text-stone-500">
              Personal Dossier
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {step === 'result' && (
            <button
              onClick={() => setIsLookbookOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <BookOpen size={14} />
              <span className="hidden sm:inline">All 5 Archetypes</span>
              <span className="sm:hidden">Lookbook</span>
            </button>
          )}

          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
            className="p-2 rounded-xl text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>
      </header>

      {/* Main Quiz Body Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 flex flex-col justify-center">
        {step === 'welcome' && <WelcomeView onStart={handleStartQuiz} />}

        {step === 'quiz' && (
          <div className="w-full">
            <QuizProgressBar
              currentIndex={currentQuestionIndex}
              totalQuestions={QUIZ_QUESTIONS.length}
              onBack={handleBackQuestion}
              onRestart={handleRestart}
              soundEnabled={soundEnabled}
              onToggleSound={toggleSound}
            />

            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              optionsList={currentOptions}
              selectedKey={currentAnswer}
              onSelectOption={handleSelectOption}
              onNext={handleNextQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={QUIZ_QUESTIONS.length}
            />
          </div>
        )}

        {step === 'result' && (
          <ResultView answers={answers} onRetake={handleStartQuiz} />
        )}
      </main>

      {/* Chic Minimalist Footer */}
      <footer className="w-full border-t border-stone-200/80 py-6 px-4 text-center text-xs text-stone-500 space-y-1">
        <p className="font-editorial text-stone-700 text-sm">
          The Silhouette Personality Quiz &copy; {new Date().getFullYear()}
        </p>
        <p>
          A confidential, blind-scored assessment. All results revealed upon quiz completion.
        </p>
      </footer>

      {/* Global Lookbook modal (accessible only after quiz is completed) */}
      <AllArchetypesModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
      />
    </div>
  );
}
