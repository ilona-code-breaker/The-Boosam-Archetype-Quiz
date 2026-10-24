import React, { useState } from 'react';
import { ARCHETYPES, ArchetypeKey } from '../data/quizData';
import { ArchetypeBadge } from './ArchetypeBadge';
import { X, Sparkles, Compass, ShieldCheck, Heart, Coffee, Check, ArrowRight } from 'lucide-react';

interface AllArchetypesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentResultKey?: ArchetypeKey;
}

export const AllArchetypesModal: React.FC<AllArchetypesModalProps> = ({
  isOpen,
  onClose,
  currentResultKey,
}) => {
  const [selectedKey, setSelectedKey] = useState<ArchetypeKey>(currentResultKey || 'A');

  if (!isOpen) return null;

  const active = ARCHETYPES[selectedKey];
  const keys: ArchetypeKey[] = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-stone-50 rounded-3xl border border-stone-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-100/70">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              The Field Guide
            </span>
            <h2 className="text-2xl font-bold font-editorial text-stone-900">
              The 5 Signature Archetypes
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 overflow-x-auto bg-stone-100/40 p-2 gap-2 scrollbar-none">
          {keys.map((k) => {
            const item = ARCHETYPES[k];
            const isCurrent = selectedKey === k;
            const isUserArchetype = currentResultKey === k;
            return (
              <button
                key={k}
                onClick={() => setSelectedKey(k)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  isCurrent
                    ? 'bg-stone-900 text-amber-50 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <ArchetypeBadge archetypeKey={k} size="sm" />
                <span>{item.title}</span>
                {isUserArchetype && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-stone-950">
                    You
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-br from-stone-100 to-amber-50/40 border border-stone-200">
            <div className="flex items-center gap-4">
              <ArchetypeBadge archetypeKey={selectedKey} size="lg" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Archetype {selectedKey}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-editorial text-stone-900">
                  {active.title}
                </h3>
                <p className="text-sm font-medium text-amber-900/80 mt-0.5">
                  {active.vibe}
                </p>
              </div>
            </div>
            <div className="italic text-sm text-stone-600 border-l-2 border-stone-400 pl-3 max-w-sm">
              {active.quote}
            </div>
          </div>

          <div className="prose prose-stone max-w-none">
            <p className="text-base text-stone-700 leading-relaxed font-normal">
              {active.overview}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <Sparkles size={14} className="text-amber-600" />
                Superpower
              </div>
              <p className="text-sm text-stone-800 font-medium">{active.superpower}</p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <ShieldCheck size={14} className="text-rose-600" />
                Kryptonite
              </div>
              <p className="text-sm text-stone-800 font-medium">{active.kryptonite}</p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <Heart size={14} className="text-pink-600" />
                Ideal Bra Match
              </div>
              <p className="text-sm text-stone-800 font-medium">{active.idealBraMatch}</p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <Coffee size={14} className="text-amber-700" />
                Signature Drink & Fuel
              </div>
              <p className="text-sm text-stone-800 font-medium">{active.signatureDrink}</p>
            </div>
          </div>

          {/* Dynamics */}
          <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-600">
              Social & Silhouette Dynamics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs font-semibold text-stone-500 block">
                  Best Bra / Partner in Crime:
                </span>
                <span className="text-stone-800 font-medium">
                  {active.compatibility.partnerInCrime}
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-stone-500 block">
                  Aesthetic Counterpart:
                </span>
                <span className="text-stone-800 font-medium">
                  {active.compatibility.polarOpposite}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-stone-900 text-amber-50 font-medium text-sm hover:bg-stone-800 transition-colors shadow"
          >
            Back to Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
