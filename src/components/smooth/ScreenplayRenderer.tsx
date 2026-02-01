'use client';

import Markdown from 'react-markdown';
import { SceneBlock, SceneBreak } from './SceneBlock';

type Props = {
  content: string;
};

const TRANSITIONS = ['FADE IN', 'FADE OUT', 'FADE TO', 'CUT TO', 'SMASH CUT', 'DISSOLVE', 'MATCH CUT', 'JUMP CUT', 'IRIS', 'WIPE', 'CUT BACK'];

function isTransition(text: string): boolean {
  const upper = text.toUpperCase();
  return TRANSITIONS.some(t => upper.includes(t));
}

function isFadeToBlack(text: string): boolean {
  const upper = text.toUpperCase();
  return upper.includes('FADE TO BLACK') || upper.includes('FADE OUT.');
}

function isTextOnScreen(text: string): boolean {
  const upper = text.toUpperCase();
  return upper.includes('TEXT ON SCREEN') || upper.startsWith('"') && upper.endsWith('"') && text.length < 100;
}

function isPostCredits(text: string): boolean {
  const upper = text.toUpperCase();
  return upper.includes('POST-CREDITS') || upper.includes('POST CREDITS');
}

function isEndOfEpisode(text: string): boolean {
  const upper = text.toUpperCase();
  return upper.includes('END OF EPISODE') || upper === 'ACTUAL END OF EPISODE.';
}

function isCredits(text: string): boolean {
  const upper = text.toUpperCase();
  return upper === 'CREDITS.' || upper === 'CREDITS';
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

function isBannerText(text: string): boolean {
  // Quoted text in bold that looks like signs/banners
  return text.startsWith('"') && text.endsWith('"') && text.length < 80;
}

export function ScreenplayRenderer({ content }: Props) {
  const cleanContent = content.replace(/<!--[\s\S]*?-->/g, '');

  return (
    <div className="screenplay font-mono text-lg leading-[1.7] max-w-[65ch]">
      <Markdown
        components={{
          // Scene breaks with animation
          hr: () => <SceneBreak />,

          // Episode title
          h1: ({ children }) => (
            <SceneBlock>
              <h1 className="text-2xl tracking-[0.2em] uppercase mb-16 mt-8 text-white/50">
                {children}
              </h1>
            </SceneBlock>
          ),

          // Character cues, title cards, and banner text
          strong: ({ children }) => {
            const text = String(children);
            
            if (isCharacterCue(text)) {
              const name = text.replace(/:$/, '');
              return (
                <SceneBlock>
                  <span className="sp-character block text-xl tracking-[0.12em] uppercase mt-10 mb-3 text-white">
                    {name}
                  </span>
                </SceneBlock>
              );
            }
            
            if (isBannerText(text)) {
              // Banner/sign styling - like ship banners, signs, etc.
              return (
                <SceneBlock>
                  <span className="block text-center text-base tracking-widest uppercase my-4 py-3 text-amber-200/80 border-y border-white/10">
                    {text}
                  </span>
                </SceneBlock>
              );
            }
            
            if (isTitleCard(text)) {
              return (
                <SceneBlock>
                  <span className="sp-titlecard block text-xl tracking-[0.15em] uppercase my-8 text-white/90">
                    {text}
                  </span>
                </SceneBlock>
              );
            }
            
            return <strong className="text-white font-bold">{children}</strong>;
          },

          // Action, transitions, parentheticals, emphasis, and special content
          em: ({ children }) => {
            const text = String(children);
            
            // Fade to black - special dramatic effect
            if (isFadeToBlack(text)) {
              return (
                <SceneBlock>
                  <div className="sp-fade-to-black">
                    <span className="block uppercase tracking-[0.2em] text-white/30 my-10 text-base text-center">
                      {text}
                    </span>
                  </div>
                </SceneBlock>
              );
            }
            
            // Text on screen - dramatic card styling
            if (isTextOnScreen(text)) {
              return (
                <SceneBlock>
                  <div className="sp-text-on-screen">
                    <span className="block text-white/70 text-base leading-relaxed">
                      {text}
                    </span>
                  </div>
                </SceneBlock>
              );
            }
            
            // Post-credits scene marker
            if (isPostCredits(text)) {
              return (
                <div className="sp-post-credits">
                  <SceneBlock>
                    <span className="block uppercase tracking-[0.15em] text-white/50 my-8 text-base">
                      {text}
                    </span>
                  </SceneBlock>
                </div>
              );
            }
            
            // End of episode
            if (isEndOfEpisode(text)) {
              return (
                <SceneBlock>
                  <div className="sp-end-card">
                    <span className="block uppercase tracking-[0.3em] text-white/40 text-sm">
                      {text}
                    </span>
                  </div>
                </SceneBlock>
              );
            }
            
            // Credits
            if (isCredits(text)) {
              return (
                <SceneBlock>
                  <span className="block uppercase tracking-[0.2em] text-white/30 my-12 text-base text-center">
                    {text}
                  </span>
                </SceneBlock>
              );
            }
            
            // Regular transition
            if (isTransition(text)) {
              return (
                <SceneBlock>
                  <span className="sp-transition block uppercase tracking-[0.15em] text-white/40 my-10 text-base">
                    {text}
                  </span>
                </SceneBlock>
              );
            }
            
            // Parenthetical
            if (isParenthetical(text)) {
              return (
                <span className="sp-parenthetical block text-base text-white/50 mb-3">
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
            
            // Action/scene description
            return (
              <SceneBlock>
                <span className="sp-action block text-white/55 my-6 leading-[1.85]">
                  {text}
                </span>
              </SceneBlock>
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
            
            // Dialogue
            return (
              <p className="sp-dialogue my-3 leading-[1.85]">
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
