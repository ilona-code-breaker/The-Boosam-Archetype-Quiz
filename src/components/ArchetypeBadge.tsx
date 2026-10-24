import React from 'react';
import { ArchetypeKey } from '../data/quizData';
import { Building2, Compass, Feather, Flame, HeartHandshake, Sparkles, Trophy, Wind } from 'lucide-react';

interface ArchetypeBadgeProps {
  archetypeKey: ArchetypeKey;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ArchetypeBadge: React.FC<ArchetypeBadgeProps> = ({
  archetypeKey,
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-lg',
  };

  const iconSizes = {
    sm: 16,
    md: 22,
    lg: 30,
    xl: 44,
  };

  const currentIconSize = iconSizes[size];

  switch (archetypeKey) {
    case 'A':
      return (
        <div
          className={`relative rounded-2xl flex items-center justify-center bg-stone-900 text-amber-200 border border-stone-700 shadow-md transition-transform duration-300 ${sizeMap[size]} ${className}`}
        >
          <Building2 size={currentIconSize} className="stroke-[1.75]" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-stone-950">
            A
          </span>
        </div>
      );
    case 'B':
      return (
        <div
          className={`relative rounded-2xl flex items-center justify-center bg-emerald-800 text-emerald-100 border border-emerald-600 shadow-md transition-transform duration-300 ${sizeMap[size]} ${className}`}
        >
          <Feather size={currentIconSize} className="stroke-[1.75]" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-300 text-[10px] font-bold text-emerald-950">
            B
          </span>
        </div>
      );
    case 'C':
      return (
        <div
          className={`relative rounded-2xl flex items-center justify-center bg-blue-900 text-sky-200 border border-blue-700 shadow-md transition-transform duration-300 ${sizeMap[size]} ${className}`}
        >
          <Trophy size={currentIconSize} className="stroke-[1.75]" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-300 text-[10px] font-bold text-blue-950">
            C
          </span>
        </div>
      );
    case 'D':
      return (
        <div
          className={`relative rounded-2xl flex items-center justify-center bg-rose-900 text-rose-100 border border-rose-600 shadow-md transition-transform duration-300 ${sizeMap[size]} ${className}`}
        >
          <Sparkles size={currentIconSize} className="stroke-[1.75]" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-300 text-[10px] font-bold text-rose-950">
            D
          </span>
        </div>
      );
    case 'E':
      return (
        <div
          className={`relative rounded-2xl flex items-center justify-center bg-amber-800 text-amber-100 border border-amber-600 shadow-md transition-transform duration-300 ${sizeMap[size]} ${className}`}
        >
          <HeartHandshake size={currentIconSize} className="stroke-[1.75]" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-300 text-[10px] font-bold text-amber-950">
            E
          </span>
        </div>
      );
    default:
      return null;
  }
};
