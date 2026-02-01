export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="screenplay-theme min-h-screen bg-[#0a0a0a] text-[#e8e4dc] selection:bg-white selection:text-black">
      {children}
    </div>
  );
}
