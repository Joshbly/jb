"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden border-b-2 border-foreground">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        
        {/* Left Column: Image (55%) */}
        <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-full bg-black border-b-2 lg:border-b-0 lg:border-r-2 border-foreground overflow-hidden group">
           <Image
            src="/images/header2.png"
            alt="Josh Blyskal"
            fill
            className="object-cover filter grayscale contrast-[1.2] brightness-90 group-hover:contrast-[1.3] transition-all duration-700" 
            priority
            unoptimized
          />
          {/* Halftone / Newsprint Effect Overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '4px 4px'
            }}
          />
          
          {/* Archival Caption */}
          <div className="absolute bottom-6 left-6 bg-background px-3 py-1 border border-foreground z-10">
            <p className="font-mono text-xs tracking-tight text-foreground uppercase">
              Fig. 1 — NYC · 2025
            </p>
          </div>
        </div>

        {/* Right Column: Content (45%) */}
        <div className="relative w-full lg:w-[45%] h-[50vh] lg:h-full flex flex-col justify-center px-6 md:px-8 lg:px-16 z-20 bg-background">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-lg w-full pt-8 lg:pt-0"
          >
            <div className="mb-6 lg:mb-8">
              <h1 className="text-[clamp(3rem,8vw,5rem)] font-display leading-[0.9] font-normal text-foreground tracking-tight mb-3 lg:mb-4">
                Josh Blyskal
              </h1>
              <div className="font-mono text-[10px] lg:text-sm text-foreground/60 uppercase tracking-widest">
                Leading AI Strategy & Research
              </div>
            </div>
            
            <div className="space-y-4 lg:space-y-6 max-w-md mb-8 lg:mb-12">
              <p className="text-lg lg:text-xl font-body leading-relaxed text-foreground">
                Defining how Fortune 500 brands secure visibility in the era of AI Answer Engines. Currently leading AI Strategy & Research at <a href="https://tryprofound.com" target="_blank" rel="noopener noreferrer" className="border-b border-accent text-foreground hover:bg-accent hover:text-background transition-colors">Profound</a>.
              </p>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3 font-mono text-[10px] lg:text-xs uppercase tracking-widest pb-8 lg:pb-0">
              <Link 
                href="#speaking"
                className="group flex items-center gap-3 hover:text-accent transition-colors py-1"
              >
                <span className="w-4 h-px bg-foreground group-hover:bg-accent transition-colors"></span>
                See Speaking
              </Link>
              <Link 
                href="#writing"
                className="group flex items-center gap-3 hover:text-accent transition-colors py-1"
              >
                <span className="w-4 h-px bg-foreground group-hover:bg-accent transition-colors"></span>
                Read Selected Writing
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
