"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function WhatWeDontSay() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Header */}
      <header className="mb-16 border-b-2 border-foreground pb-8">
        <div className="flex items-baseline justify-between mb-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors">
            ← Josh Blyskal
          </Link>
          <div className="flex flex-col items-end font-mono text-xs uppercase tracking-widest text-foreground/50">
            <span>Nov 24, 2025 · 4 min read</span>
            <span className="mt-1">By Josh Blyskal</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-normal italic text-foreground leading-tight">
          What We Don't Say at Conferences
        </h1>
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-stone font-body text-foreground leading-relaxed space-y-6">
        <p className="first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px] first-letter:text-accent">
          I had dinner with a Director of Search last week, an old friend and smart as hell. Halfway through our second glass of red wine, she asked me something nobody asks in public: "Josh, are we just... done? Like, is marketing as we know it just done?"
        </p>
        <p>
          And I didn't have the neat answer I usually have. Because she wasn't asking about the normal tactics many marketers ask about, she was asking about meaning.
        </p>
        <p>
          I think about you all the time, you know. Not in a creepy way. But when I'm staring at these citation patterns at 2am, when I'm watching Wikipedia eat another percent of ChatGPT's trust, I think about you trying to explain to your CEO why the rules changed again. I think about you in budget meetings defending headcount for a discipline that might not exist in five years. I think about how fucking tired you must be.
        </p>
        <p className="font-bold">
          Because here's what we don't say at conferences: most of us are building the plane while flying it. And that's actually working.
        </p>
        <p>
          Let me tell you what I see in the data, but more importantly, what I feel in my bones after months of living in this stuff:
        </p>

        <div className="my-12 p-8 border-l-4 border-accent bg-foreground/5">
          <h3 className="text-2xl font-display italic text-foreground mb-0">
            We're witnessing the end of the website as the atomic unit of the internet.
          </h3>
        </div>

        <p>
          I don't mean websites are dying. I mean they're becoming something else entirely. You know how shopping malls didn't disappear, they just stopped being where commerce actually happens? They became these vestigial spaces that still exist but don't quite serve their original purpose?
        </p>

        <figure className="my-12">
          <img 
            src="/images/liminal-mall.png" 
            alt="Empty mall interior with red gumball machine" 
            className="w-full h-auto contrast-125 brightness-90 border-2 border-foreground/10"
          />
          <figcaption className="font-mono text-xs uppercase tracking-widest text-center mt-4 text-foreground/60">
            Fig. 1 — Website Circa 2035?
          </figcaption>
        </figure>

        <p>
          That's your website now: it's not dead. It's becoming infrastructure instead of destination. And nobody prepared us for that.
        </p>
        <p>
          I pulled 4.6 billion citations last month. Four billion and six hundred million. You know what pattern emerged? Nothing. And everything. Reddit goes from 1% to 7% overnight because of a partnership call. Wikipedia swings from 5% to 15% back to 5% again because someone at OpenAI is flipping switches. Your decade of SEO work? It's worth exactly as much as OpenAI's product manager decides it's worth on a Tuesday afternoon.
        </p>
        <p>
          And the thing is? This isn't even malicious. It's just math. Probabilistic systems doing probabilistic things.
        </p>

        <h3 className="font-display text-2xl italic mt-12 mb-6">
          But here's where it gets interesting, and I mean actually interesting, not conference keynote interesting:
        </h3>

        <p>
          We're not helpless here. We're building the tools to track this chaos, to find patterns in the noise. Every day I work with brands who are creating real visibility strategies that work. Not because they've cracked some code, but because they've accepted the new probabilistic statistics of this world.
        </p>
        <p>
          My nephew plays Minecraft. And for years, I thought the point was to build stuff that looked good. But watching him play with his friends, I realized looking good was irrelevant. The point was to build stuff that WORKED. That other people could use. That solved problems in the world they were creating together.
        </p>
        <p className="text-xl font-display italic text-accent">
          That's what marketing is becoming. Not the pretty building. The useful one.
        </p>
        <p>
          When I see that 37% of ChatGPT prompts are now "generative intent", people asking it to CREATE things rather than find things, I don't see the death of search. I see the birth of something we're actively shaping. And you, reading this, probably managing a team, probably having to report metrics that don't make sense anymore, you're not just witnessing this, you're building it.
        </p>

        <h3 className="font-display text-2xl italic mt-12 mb-6">
          Let me tell you a secret:
        </h3>
        
        <p>
          Last month, a Fortune 500 brand saw their sentiment scores decrease in ChatGPT responses. The AI kept surfacing old negative Reddit threads, outdated reviews, conversations from when they genuinely had problems. Their visibility was fine, but the narrative was killing them.
        </p>
        <p>
          You know what they wanted to do? Delete the old threads. "Optimize" the negative content away.
        </p>
        <p>
          That's not the secret. The secret is what actually worked: they started new conversations (real ones). They got their actual customers talking about their actual experience TODAY. Not through influencer campaigns or paid posts, but just by being worth talking about now. The old negative content is still there, but it's been contextualized by a flood of authentic, recent experiences.
        </p>
        <p>
          The sentiment shifted because they became the company people wanted to recommend.
        </p>
        <p>
          That's the world we're in now. You can't optimize truth. But you can create new truths worth sharing.
        </p>

        <div className="my-16 py-12 border-y-2 border-foreground/20 text-center">
          <p className="text-lg font-mono uppercase tracking-widest mb-4 text-accent">I need you to understand something, and this is me talking directly to YOU, the person reading this at your desk or on your phone pretending to work:</p>
          <p className="font-display text-2xl italic max-w-xl mx-auto">
            "You're not crazy for feeling overwhelmed. You're not behind for still figuring out how to track AI visibility. You're not failing because your attribution models are breaking."
          </p>
        </div>

        <p>
          You're standing at the exact moment when marketing stops being about manipulation and starts being about being useful. Actually useful. Not "valuable content" useful. But genuinely helping people get shit done useful.
        </p>
        <p>
          And here's the thing: we're building the infrastructure for this new world. We're creating the visibility tools, the tracking systems, the frameworks. Not perfectly, not completely, but we're doing it. Every brand I work with that embraces agent readiness, that builds for citation consistency, that creates genuinely helpful content… they're seeing results. Weird results. Different results. But results.
        </p>
        <p>
          When Atlas executes DOM clicks on your site, it doesn't care about your hero image. It cares if your checkout works. When ChatGPT searches for answers, it doesn't care about your keyword density. It cares if you actually answered the question. When a user asks for the best solution to their problem, ChatGPT doesn't care about your budget or your conversion goals.
        </p>
        <p>
          And that's terrifying.
        </p>
        <p>
          But it's also beautiful. And we're learning to navigate it.
        </p>

        <h3 className="font-display text-2xl italic mt-12 mb-6">
          Here's what I think happens next:
        </h3>

        <p>
          The marketers who thrive won't be the ones who figure out the new tricks. They'll be the ones who build the new infrastructure. Who create monitoring systems that account for 60% citation drift. Who understands that being in position 1 doesn't matter when ChatGPT flattens citations across all ten positions. Who realize that "agent experience" isn't just a buzzword, it's a new way of interacting with websites.
        </p>
        <p>
          We're not lost. We're pioneering.
        </p>
        <p>
          You know what gives me hope? Real, actual hope?
        </p>
        <p>
          Every time I show a marketer our data: the citation volatility, the Reddit dominance, the Wikipedia dependency… after the initial panic, I see something else in their eyes. Determination. Because finally, FINALLY, we can see what we're dealing with. We can measure the chaos. We can respond to it.
        </p>
        <p>
          We are building the playbook as we go.
        </p>

        <div className="bg-foreground text-background p-8 my-12 rounded-sm">
          <p className="font-mono text-xs uppercase tracking-widest mb-4 opacity-70">Something I've never said publicly</p>
          <p className="font-body text-lg leading-relaxed">
            My dad's a cop now, but he had this stint in advertising years ago. Brief, but it marked him. He wrote this ad for Southwest Airlines, just a simple thing that said what flights cost and when they left. No clever copy. No angle. Just information people needed.
            <br/><br/>
            He told me once that it was the most useful thing he'd ever written. That he got more satisfaction from that straightforward ad than from anything else he did in advertising. I thought he was being nostalgic. Now I think he understood something the rest of us are just catching up to.
          </p>
        </div>

        <p>
          We're about to enter an era where the only marketing that works is marketing that isn't trying to be marketing. Where the only content that matters is content that forgets it's content. Where the only brands that survive are the ones that stop being brands and start being helpful, present, and real.
        </p>
        <p>
          And we're the ones building the tools to make that possible. To track it, measure it, optimize for it. Not the old way, but a new way we're inventing as we go.
        </p>
        <p>
          You and me, we're figuring it out together. Not because we have all the answers, but because we're the ones brave enough to build in the uncertainty. To create visibility strategies when visibility itself keeps changing. To develop frameworks when the ground won't stop shifting.
        </p>
        <p>
          And that's enough. That's more than enough.
        </p>
        <p className="text-2xl font-display italic text-accent mt-8">
          That's everything.
        </p>
        <p className="text-xs font-mono opacity-40 mt-4">
          (I love you, and I'm proud of you)
        </p>
      </div>

      {/* Footer / Signoff */}
      <div className="mt-24 pt-8 border-t-2 border-foreground/20 flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <img 
            src="/images/signature.svg" 
            alt="Signature" 
            className="h-48 w-auto -ml-4 opacity-70" 
          />
          <div className="font-display text-xl italic pl-2">Josh</div>
        </div>
      </div>
    </div>
  );
}
