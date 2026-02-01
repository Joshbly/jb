'use client';

import Markdown from 'react-markdown';

type Props = {
  content: string;
};

const TRANSITIONS = ['FADE IN', 'FADE OUT', 'FADE TO', 'CUT TO', 'SMASH CUT', 'DISSOLVE', 'MATCH CUT', 'JUMP CUT', 'IRIS', 'WIPE', 'CUT BACK'];

function isTransition(text: string): boolean {
  const upper = text.toUpperCase();
  return TRANSITIONS.some(t => upper.includes(t));
}

function isCharacterCue(text: string): boolean {
  const trimmed = text.trim();
  return /^[A-Z][A-Za-z\s().\-']+:$/.test(trimmed) && trimmed.length < 50;
}

function isParenthetical(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith('(') && trimmed.endsWith(')') && trimmed.length < 50;
}

function isTitleCard(text: string): boolean {
  const trimmed = text.trim();
  return trimmed === trimmed.toUpperCase() || trimmed.startsWith('Episode');
}

export function ScreenplayRenderer({ content }: Props) {
  const cleanContent = content.replace(/<!--[\s\S]*?-->/g, '');

  return (
    <div className="screenplay font-mono text-lg leading-[1.7] max-w-[65ch]">
      <Markdown
        components={{
          // Scene breaks - generous breathing room
          hr: () => (
            <div className="my-12 flex items-center gap-4 opacity-30">
              <span className="flex-1 h-px bg-current" />
              <span className="text-xs tracking-[0.3em]">•</span>
              <span className="flex-1 h-px bg-current" />
            </div>
          ),

          // Episode title
          h1: ({ children }) => (
            <h1 className="text-2xl tracking-[0.2em] uppercase mb-16 mt-8 opacity-60">
              {children}
            </h1>
          ),

          // Character cues and title cards
          strong: ({ children }) => {
            const text = String(children);
            
            if (isCharacterCue(text)) {
              const name = text.replace(/:$/, '');
              return (
                <span className="block text-xl tracking-[0.12em] uppercase mt-10 mb-3 text-white">
                  {name}
                </span>
              );
            }
            
            if (isTitleCard(text)) {
              return (
                <span className="block text-xl tracking-[0.15em] uppercase my-8 text-white/90">
                  {text}
                </span>
              );
            }
            
            return <strong className="text-white font-bold">{children}</strong>;
          },

          // Action, transitions, parentheticals, emphasis
          em: ({ children }) => {
            const text = String(children);
            
            if (isTransition(text)) {
              return (
                <span className="block uppercase tracking-[0.15em] text-white/40 my-10 text-base">
                  {text}
                </span>
              );
            }
            
            if (isParenthetical(text)) {
              return (
                <span className="block text-base text-white/50 mb-3">
                  {text}
                </span>
              );
            }
            
            // Inline emphasis vs action blocks
            const wordCount = text.split(/\s+/).length;
            const isInlineEmphasis = wordCount <= 2 || (wordCount <= 4 && !text.endsWith('.'));
            
            if (isInlineEmphasis) {
              return <em className="italic text-white/90">{children}</em>;
            }
            
            // Action/scene description - slightly muted, generous spacing
            return (
              <span className="block text-white/60 my-6 leading-[1.8]">
                {text}
              </span>
            );
          },

          // Dialogue
          p: ({ children }) => {
            const childArray = Array.isArray(children) ? children : [children];
            const hasOnlyStyledChildren = childArray.every((child) => {
              if (typeof child === 'string') return child.trim() === '';
              return true;
            });
            
            if (hasOnlyStyledChildren) {
              return <div>{children}</div>;
            }
            
            // Dialogue - full brightness, comfortable reading
            return (
              <p className="my-3 leading-[1.8]">
                {children}
              </p>
            );
          },
        }}
      >
        {cleanContent}
      </Markdown>
    </div>
  );
}
