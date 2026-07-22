import "./screenplay.css";

export default function SmoothLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="screenplay-theme min-h-screen bg-screenplay-bg text-screenplay-fg selection:bg-amber-500/30 selection:text-white">
      {children}
    </div>
  );
}
