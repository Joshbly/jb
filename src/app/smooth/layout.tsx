export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="screenplay-theme min-h-screen bg-[#0d0d0d] text-[#c8c4bc] selection:bg-amber-500/30 selection:text-white relative">
      {/* Vignette overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{ 
          boxShadow: 'inset 0 0 150px 60px rgba(0,0,0,0.8)',
        }} 
      />
      
      {/* Ambient glow - warm spot behind content */}
      <div 
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(251,191,36,0.03) 0%, transparent 70%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
