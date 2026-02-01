'use client';

import Markdown from 'react-markdown';
import { ReactNode } from 'react';

type Props = {
  content: string;
};

// Transition keywords that trigger right-aligned styling
const TRANSITIONS = ['FADE IN', 'FADE OUT', 'FADE TO', 'CUT TO', 'SMASH CUT', 'DISSOLVE', 'MATCH CUT', 'JUMP CUT', 'IRIS', 'WIPE'];

function isTransition(text: string): boolean {
  const upper = text.toUpperCase();
  return TRANSITIONS.some(t => upper.includes(t));
}

function isCharacterCue(text: string): boolean {
  // CHARACTER: pattern - ends with colon, starts uppercase, short line
  // Allows mixed case for names like McDonald, O'Brien, DiFranco
  const trimmed = text.trim();
  return /^[A-Z][A-Za-z\s().\-']+:$/.test(trimmed) && trimmed.length < 50;
}

function isParenthetical(text: string): boolean {
  // (quietly) or (V.O.) style - starts and ends with parens, short
  const trimmed = text.trim();
  return trimmed.startsWith('(') && trimmed.endsWith(')') && trimmed.length < 50;
}

function isTitleCard(text: string): boolean {
  // Standalone bold text like YACHT ROCK or Episode title - all caps or "Episode"
  const trimmed = text.trim();
  return trimmed === trimmed.toUpperCase() || trimmed.startsWith('Episode');
}

export function ScreenplayRenderer({ content }: Props) {
  // Strip HTML comments before rendering
  const cleanContent = content.replace(/<!--[\s\S]*?-->/g, '');

  return (
    <div className="screenplay font-mono text-base leading-relaxed">
      <Markdown
        components={{
          // Horizontal rules = scene breaks
          hr: () => (
            <div className="sp-break my-8 flex justify-center">
              <span className="block w-16 h-px bg-[#333]" />
            </div>
          ),

          // Headings = title cards
          h1: ({ children }) => (
            <h1 className="sp-title text-center text-3xl tracking-wider mb-12 mt-8">
              {children}
            </h1>
          ),

          // Bold text = character cues or title cards
          strong: ({ children }) => {
            const text = String(children);
            
            if (isCharacterCue(text)) {
              // Character cue - remove the colon for display
              const name = text.replace(/:$/, '');
              return (
                <span className="sp-character block uppercase tracking-[0.15em] mt-8 mb-2 pl-[15%]">
                  {name}
                </span>
              );
            }
            
            if (isTitleCard(text)) {
              return (
                <span className="sp-titlecard block uppercase tracking-[0.1em] my-6">
                  {text}
                </span>
              );
            }
            
            // Regular bold
            return <strong className="font-bold">{children}</strong>;
          },

          // Italic text = action, transitions, parentheticals, or inline emphasis
          em: ({ children }) => {
            const text = String(children);
            
            if (isTransition(text)) {
              return (
                <span className="sp-transition block uppercase tracking-wider text-[#888] my-6">
                  {text}
                </span>
              );
            }
            
            if (isParenthetical(text)) {
              return (
                <span className="sp-parenthetical block text-sm text-[#666] -mt-1 mb-2 pl-[12%]">
                  {text}
                </span>
              );
            }
            
            // Short italic = inline emphasis (e.g., "You *know* this" or "We had *something.*")
            // Long italic = action/scene description
            const wordCount = text.split(/\s+/).length;
            const isInlineEmphasis = wordCount <= 2 || (wordCount <= 4 && !text.endsWith('.'));
            
            if (isInlineEmphasis) {
              return <em className="italic">{children}</em>;
            }
            
            // Action/scene description
            return (
              <span className="sp-action block text-[#b8b4ac] my-4 leading-relaxed">
                {text}
              </span>
            );
          },

          // Paragraphs - dialogue or standalone text
          p: ({ children }) => {
            // Check if this paragraph only contains styled elements (already handled)
            const childArray = Array.isArray(children) ? children : [children];
            const hasOnlyStyledChildren = childArray.every((child) => {
              if (typeof child === 'string') {
                return child.trim() === '';
              }
              return true;
            });
            
            // If it's just whitespace around styled elements, render minimal wrapper
            if (hasOnlyStyledChildren) {
              return <div className="sp-wrapper">{children}</div>;
            }
            
            // Otherwise it's dialogue - indented from character name
            return (
              <p className="sp-dialogue max-w-[45ch] my-2 leading-relaxed pl-[10%]">
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
