import React, { useState } from 'react';
import { ArchetypeProfile, ArchetypeKey } from '../data/quizData';
import { ArchetypeBadge } from './ArchetypeBadge';
import { X, Check, Copy, Share2, Sparkles, MessageCircle } from 'lucide-react';

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  archetype: ArchetypeProfile;
  percentages: Record<ArchetypeKey, number>;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({
  isOpen,
  onClose,
  archetype,
  percentages,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const shareText = `✨ I took The Boob Archetype Quiz and my result is: ${archetype.title}!\n\n"${archetype.subtitle}"\n\nSignature Quote: ${archetype.quote}\nBra Philosophy: ${archetype.braPhilosophy}\n\nWhat archetype are you? Take the quiz to find out!`;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-stone-900 text-stone-100 rounded-3xl border border-stone-700 shadow-2xl p-6 sm:p-7 flex flex-col space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-400">
              Share Your Silhouette
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Visual Share Card */}
        <div className="relative rounded-2xl p-6 bg-gradient-to-b from-stone-800 to-stone-950 border border-stone-700 shadow-inner flex flex-col items-center text-center space-y-4">
          <ArchetypeBadge archetypeKey={archetype.key} size="xl" />

          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400">
              Official Archetype
            </span>
            <h3 className="text-2xl font-bold font-editorial text-white">
              {archetype.title}
            </h3>
            <p className="text-xs text-stone-300 italic max-w-xs mt-1">
              {archetype.quote}
            </p>
          </div>

          <div className="w-full bg-stone-800/80 rounded-xl p-3 border border-stone-700/60 text-left space-y-2 text-xs">
            <div className="flex justify-between items-center text-stone-300">
              <span className="font-semibold text-stone-400">Match Affinity:</span>
              <span className="font-bold text-amber-300">
                {percentages[archetype.key]}%
              </span>
            </div>
            <div className="flex justify-between items-center text-stone-300">
              <span className="font-semibold text-stone-400">Bra Match:</span>
              <span className="truncate max-w-[190px] text-right font-medium text-stone-200">
                {archetype.idealBraMatch}
              </span>
            </div>
            <div className="flex justify-between items-center text-stone-300">
              <span className="font-semibold text-stone-400">Superpower:</span>
              <span className="truncate max-w-[190px] text-right font-medium text-stone-200">
                {archetype.superpower}
              </span>
            </div>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold pt-1">
            The Boob Archetype Quiz
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleCopyText}
            className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            {copiedText ? (
              <>
                <Check size={18} className="text-stone-950" />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <MessageCircle size={18} />
                Copy Group Chat Summary
              </>
            )}
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-sm flex items-center justify-center gap-2 transition-colors border border-stone-700"
          >
            {copiedLink ? (
              <>
                <Check size={16} className="text-emerald-400" />
                Quiz Link Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy Quiz Link
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
