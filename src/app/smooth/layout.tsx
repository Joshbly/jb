export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="screenplay-theme min-h-screen bg-[#0d0d0d] text-[#c8c4bc] selection:bg-amber-500/30 selection:text-white">
      {children}
    </div>
  );
}
