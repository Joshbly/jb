import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";

const TRANSITION_PHRASES = [
  "FADE IN",
  "FADE OUT",
  "FADE TO",
  "FADE TO BLACK",
  "CUT TO",
  "CUT BACK",
  "SMASH CUT",
  "DISSOLVE",
  "MATCH CUT",
  "JUMP CUT",
  "IRIS",
  "WIPE",
  "CREDITS",
  "POST-CREDITS SCENE",
  "POST CREDITS",
];

const HTML_COMMENT = /<!--[\s\S]*?-->/g;

// Real screenplay character cues: name in caps, ending with ":", up to ~50 chars.
// Tolerates lowercase letters from surname prefixes ("McDONALD", "O'BRIEN", "DeNIRO").
function isCharacterCue(text: string): boolean {
  if (text.length > 50 || !text.endsWith(":") || !/^[A-Z]/.test(text)) {
    return false;
  }
  const lowercase = (text.match(/[a-z]/g) ?? []).length;
  return lowercase <= 3;
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textOf).join("");
  }
  if (isValidElement(node)) {
    return textOf((node.props as { children?: ReactNode }).children);
  }
  return "";
}

type WithChildren = { children?: ReactNode };

function Emphasis({ children }: WithChildren) {
  return <em className="italic text-white/90">{children}</em>;
}

function StrongText({ children }: WithChildren) {
  return <strong className="text-white font-bold">{children}</strong>;
}

function isElementOfType<P>(node: ReactNode, type: unknown): node is ReactElement<P> {
  return isValidElement(node) && node.type === type;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`sp-reveal ${className}`}>{children}</div>;
}

function CharacterCue({ text }: { text: string }) {
  return (
    <Reveal>
      <span className="sp-character block text-xl tracking-[0.12em] uppercase mt-10 mb-3 text-white">
        {text.replace(/:$/, "")}
      </span>
    </Reveal>
  );
}

function Banner({ text }: { text: string }) {
  return (
    <Reveal>
      <span className="block text-center text-base tracking-widest uppercase my-4 py-3 text-amber-200/80 border-y border-white/10">
        {text}
      </span>
    </Reveal>
  );
}

function TitleCard({ text }: { text: string }) {
  return (
    <Reveal>
      <span className="sp-titlecard block text-xl tracking-[0.15em] uppercase my-8 text-white/90">
        {text}
      </span>
    </Reveal>
  );
}

function Transition({ text }: { text: string }) {
  return (
    <Reveal>
      <span className="sp-transition block uppercase tracking-[0.15em] text-white/40 my-10 text-base">
        {text}
      </span>
    </Reveal>
  );
}

function Parenthetical({ text }: { text: string }) {
  return (
    <Reveal>
      <span className="sp-parenthetical block text-base text-white/50 mb-3">{text}</span>
    </Reveal>
  );
}

function Dialogue({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="sp-dialogue my-3 leading-[1.85]">{children}</p>
    </Reveal>
  );
}

function Action({ text }: { text: string }) {
  return (
    <Reveal>
      <span className="sp-action block text-white/55 my-6 leading-[1.85]">{text}</span>
    </Reveal>
  );
}

function renderStrongBlock(text: string): ReactNode {
  const trimmed = text.trim();
  if (isCharacterCue(trimmed)) {
    return <CharacterCue text={trimmed} />;
  }
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return <Banner text={trimmed} />;
  }
  if (trimmed === trimmed.toUpperCase() && /[A-Z]/.test(trimmed)) {
    return <TitleCard text={trimmed} />;
  }
  return <StrongText>{text}</StrongText>;
}

function renderEmBlock(text: string): ReactNode {
  const trimmed = text.trim();
  if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
    return <Parenthetical text={trimmed} />;
  }
  const upper = trimmed.toUpperCase();
  if (trimmed === upper && TRANSITION_PHRASES.some((phrase) => upper.includes(phrase))) {
    return <Transition text={trimmed} />;
  }
  return <Action text={trimmed} />;
}

const components: Components = {
  hr: () => (
    <div className="my-12 flex items-center gap-4">
      <div className="sp-scene-break flex-1 flex items-center gap-4">
        <span className="flex-1 h-px bg-white/20" />
        <span className="text-xs tracking-[0.3em] text-white/30">•</span>
        <span className="flex-1 h-px bg-white/20" />
      </div>
    </div>
  ),

  h1: ({ children }) => (
    <Reveal>
      <h1 className="text-2xl tracking-[0.2em] uppercase mb-16 mt-8 text-white/50">{children}</h1>
    </Reveal>
  ),

  em: Emphasis,
  strong: StrongText,

  p: ({ children }) => {
    const nodes = Children.toArray(children).filter(
      (node) => !(typeof node === "string" && node.trim() === ""),
    );

    if (nodes.length === 1) {
      const sole = nodes[0];
      if (isElementOfType<WithChildren>(sole, StrongText)) {
        return renderStrongBlock(textOf(sole.props.children));
      }
      if (isElementOfType<WithChildren>(sole, Emphasis)) {
        return renderEmBlock(textOf(sole.props.children));
      }
    }

    // Character cue immediately followed by a parenthetical share a paragraph
    // in markdown (single line break) but render as two stacked blocks.
    if (nodes.length === 2) {
      const [first, second] = nodes;
      if (
        isElementOfType<WithChildren>(first, StrongText) &&
        isElementOfType<WithChildren>(second, Emphasis)
      ) {
        const cue = textOf(first.props.children).trim();
        const paren = textOf(second.props.children).trim();
        if (isCharacterCue(cue) && paren.startsWith("(") && paren.endsWith(")")) {
          return (
            <>
              <CharacterCue text={cue} />
              <Parenthetical text={paren} />
            </>
          );
        }
      }
    }

    return <Dialogue>{children}</Dialogue>;
  },
};

export function ScreenplayRenderer({ content }: { content: string }) {
  return (
    <div className="screenplay font-mono text-lg leading-[1.7] max-w-[65ch]">
      <Markdown components={components}>{content.replace(HTML_COMMENT, "")}</Markdown>
    </div>
  );
}
