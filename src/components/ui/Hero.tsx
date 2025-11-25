"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-background overflow-hidden border-b border-foreground/10">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        
        {/* Left Column: Image (60%) */}
        <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full bg-background">
           <Image
            src="/images/header2.png"
            alt="Joshua Blyskal - Leading AI Strategy & Research at Profound"
            fill
            className="object-cover" 
            priority
            unoptimized
          />
          {/* Seamless blending vignette:
              1. Inner shadow for edges
              2. Radial gradient overlay to fade edges to background color (#FDFBF7)
          */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{
                 background: 'radial-gradient(circle at 60% 50%, transparent 0%, var(--background) 100%)',
                 boxShadow: 'inset 0 0 100px 50px var(--background)'
               }} 
          />
          
          {/* Right edge fade specifically for the split line */}
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" /> 
        </div>

        {/* Right Column: Content (40%) */}
        <div className="relative w-full lg:w-[40%] h-[50vh] lg:h-full flex flex-col justify-center px-8 lg:px-12 bg-background z-20">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-display leading-none tracking-tight font-bold text-foreground">
              Joshua Blyskal
              <span className="block text-2xl md:text-3xl text-foreground/60 mt-2 font-normal italic">
                Leading AI Strategy <br/> & Research
              </span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80 font-serif italic">
                Defining how Fortune 500 brands secure visibility in the era of AI Answer Engines. 
                Currently leading research at <a href="https://tryprofound.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline decoration-accent/30 underline-offset-4">Profound</a>.
              </p>
              
              <div className="flex items-center gap-3 text-sm text-foreground/60 border-l-2 border-accent pl-4 p-2 bg-foreground/5 rounded-r">
                <span className="block w-2 h-2 rounded-full bg-accent"></span>
                <p className="font-medium">Now: Building the future of AI search from first principles.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 font-serif italic">
              <Link 
                href="#speaking"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors group border-b border-accent/30 hover:border-accent pb-0.5"
              >
                Speaking & Talks
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="#writing"
                className="inline-flex items-center text-foreground/60 hover:text-foreground transition-colors border-b border-transparent hover:border-foreground/30 pb-0.5"
              >
                Selected Writing
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
