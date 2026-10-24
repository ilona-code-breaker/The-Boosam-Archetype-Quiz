import React, { useState, useEffect } from 'react';
import { ARCHETYPES, ArchetypeKey, ArchetypeProfile } from '../data/quizData';
import { ArchetypeBadge } from './ArchetypeBadge';
import { ShareCardModal } from './ShareCardModal';
import { AllArchetypesModal } from './AllArchetypesModal';
import { sounds } from '../utils/soundEffects';
import {
  RotateCcw,
  Share2,
  BookOpen,
  Sparkles,
  Flame,
  CheckCircle2,
  Shield,
  Coffee,
  HeartHandshake,
  Shirt,
  Compass,
} from 'lucide-react';

interface ResultViewProps {
  answers: ArchetypeKey[];
  onRetake: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ answers, onRetake }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showLookbookModal, setShowLookbookModal] = useState(false);

  // Calculate scores
  const scoreCounts: Record<ArchetypeKey, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  answers.forEach((key) => {
    scoreCounts[key] = (scoreCounts[key] || 0) + 1;
  });

  const total = answers.length || 1;
  const percentages: Record<ArchetypeKey, number> = {
    A: Math.round((scoreCounts.A / total) * 100),
    B: Math.round((scoreCounts.B / total) * 100),
    C: Math.round((scoreCounts.C / total) * 100),
    D: Math.round((scoreCounts.D / total) * 100),
    E: Math.round((scoreCounts.E / total) * 100),
  };

  // Sort archetypes by score descending
  const sortedKeys = (Object.keys(scoreCounts) as ArchetypeKey[]).sort(
    (a, b) => scoreCounts[b] - scoreCounts[a]
  );

  const primaryKey = sortedKeys[0];
  const primary = ARCHETYPES[primaryKey];
  const secondaryKey = sortedKeys[1];
  const hasSecondary = scoreCounts[secondaryKey] > 0 && secondaryKey !== primaryKey;
  const secondary = ARCHETYPES[secondaryKey];

  useEffect(() => {
    sounds.playFanfare();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-16">
      {/* Top Banner / Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-stone-100 border border-stone-800 p-6 sm:p-10 shadow-2xl text-center">
        {/* Decorative corner glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
            <Sparkles size={12} />
            Your Signature Silhouette
          </span>

          <div className="my-2">
            <ArchetypeBadge archetypeKey={primaryKey} size="xl" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            {primary.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">
            {primary.subtitle}
          </p>

          <div className="mt-2 py-2 px-4 rounded-xl bg-stone-800/80 border border-stone-700/80 text-amber-200/90 italic text-sm max-w-lg">
            {primary.quote}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowShareModal(true)}
              className="py-3 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Share2 size={16} />
              Share My Silhouette
            </button>
            <button
              onClick={() => setShowLookbookModal(true)}
              className="py-3 px-6 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-sm flex items-center gap-2 transition-all border border-stone-700 cursor-pointer"
            >
              <BookOpen size={16} />
              Browse All 5 Archetypes
            </button>
          </div>
        </div>
      </div>

      {/* Runner Up / Wingwoman badge if applicable */}
      {hasSecondary && (
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <ArchetypeBadge archetypeKey={secondaryKey} size="md" />
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                Your Wingwoman Energy ({percentages[secondaryKey]}%)
              </span>
              <h3 className="text-base font-bold text-stone-900 font-editorial">
                {secondary.title}
              </h3>
              <p className="text-xs text-stone-600 line-clamp-1">
                {secondary.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowLookbookModal(true)}
            className="text-xs font-semibold text-amber-900 hover:underline whitespace-nowrap"
          >
            View Profile →
          </button>
        </div>
      )}

      {/* Breakdown Percentage Chart */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-editorial text-stone-900">
              Archetype Spectrum Breakdown
            </h3>
            <p className="text-xs text-stone-500">
              How your answers distributed across all 5 archetypes
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
            5/5 Answered
          </span>
        </div>

        <div className="space-y-3.5 pt-1">
          {sortedKeys.map((key) => {
            const item = ARCHETYPES[key];
            const pct = percentages[key];
            const isWinner = key === primaryKey;

            return (
              <div key={key} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-5 font-bold text-stone-400">[{key}]</span>
                    <span className={isWinner ? 'text-stone-900 font-bold' : 'text-stone-600'}>
                      {item.title}
                    </span>
                    {isWinner && (
                      <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                        Primary
                      </span>
                    )}
                  </div>
                  <span className="font-mono font-bold text-stone-700">{pct}%</span>
                </div>
                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      isWinner
                        ? 'bg-stone-900'
                        : pct > 0
                        ? 'bg-amber-600/70'
                        : 'bg-stone-200'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Dive Profile & Characteristics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Intimate Apparel Dossier */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-editorial font-bold text-lg">
            <Shirt size={20} className="text-amber-700" />
            <h3>The Apparel Dossier</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                Ideal Bra Match
              </span>
              <p className="text-stone-800 font-medium mt-0.5">
                {primary.idealBraMatch}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                Underwire Philosophy
              </span>
              <p className="text-stone-800 font-medium mt-0.5">
                {primary.braPhilosophy}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                Signature Outfit
              </span>
              <p className="text-stone-800 font-medium mt-0.5">
                {primary.signatureOutfit}
              </p>
            </div>
          </div>
        </div>

        {/* Behavioral Profile */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-editorial font-bold text-lg">
            <Compass size={20} className="text-amber-700" />
            <h3>Social & Behavioral Intel</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                Group Chat Persona
              </span>
              <p className="text-stone-800 font-medium mt-0.5">
                {primary.groupChatEnergy}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                Superpower
              </span>
              <p className="text-stone-800 font-medium mt-0.5">
                {primary.superpower}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                Signature Fuel
              </span>
              <p className="text-stone-800 font-medium mt-0.5">
                {primary.signatureDrink}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Dynamics / Compatibility */}
      <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-600">
          Archetype Compatibility Chart
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              ✨ Natural Ally / Partner in Crime
            </span>
            <p className="text-stone-800 font-medium">
              {primary.compatibility.partnerInCrime}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
              ⚡ Tension Point / Counterpart
            </span>
            <p className="text-stone-800 font-medium">
              {primary.compatibility.polarOpposite}
            </p>
          </div>
        </div>
      </div>

      {/* Retake and Action Bar */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
        <button
          onClick={onRetake}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-stone-700 bg-stone-200/70 hover:bg-stone-200 font-semibold text-sm transition-all cursor-pointer"
        >
          <RotateCcw size={16} />
          Retake Quiz
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLookbookModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold text-sm transition-all cursor-pointer"
          >
            <BookOpen size={16} />
            Explore All 5
          </button>
          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 font-semibold text-sm transition-all shadow-md cursor-pointer"
          >
            <Share2 size={16} />
            Share Card
          </button>
        </div>
      </div>

      {/* Modals */}
      <ShareCardModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        archetype={primary}
        percentages={percentages}
      />

      <AllArchetypesModal
        isOpen={showLookbookModal}
        onClose={() => setShowLookbookModal(false)}
        currentResultKey={primaryKey}
      />
    </div>
  );
};
