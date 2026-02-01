export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="screenplay-theme min-h-screen bg-[#111111] text-[#c8c4bc] selection:bg-white/20 selection:text-white">
      {children}
    </div>
  );
}
