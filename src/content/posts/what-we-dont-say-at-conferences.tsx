import Image from "next/image";

export const meta = {
  slug: "what-we-dont-say-at-conferences",
  title: "What We Don't Say at Conferences",
  date: "2025-11-24",
  readTime: "4 min",
  description:
    "Is marketing as we know it done? We're witnessing the end of the website as the atomic unit of the internet. The only marketing that works now is marketing that isn't trying to be marketing.",
  excerpt:
    "I had dinner with a Director of Search last week. Halfway through our second glass of wine, she asked me something nobody asks in public...",
  image: "/images/liminal-mall.png",
} as const;

export default function Post() {
  return (
    <div className="prose prose-lg prose-stone font-body text-foreground leading-relaxed space-y-6">
      <p className="first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px] first-letter:text-accent">
        I had dinner with a Director of Search last week. Old friend, sharp, been in it forever.
        Halfway through our second glass of red wine she asked me something nobody asks in public:
        "Josh, are we just... done? Like, is marketing as we know it just done?"
      </p>
      <p>
        I didn't have my usual answer ready. She wasn't asking about tactics. She was asking
        something bigger than that, and I sat there with my mouth half-open like an idiot.
      </p>
      <p>
        I think about you all the time, you know. Not in a creepy way. But when I'm staring at
        citation patterns at 2am, when I'm watching Wikipedia eat another percent of ChatGPT's
        trust, I think about you trying to explain to your CEO why the rules changed again. You in
        budget meetings defending headcount for a discipline that might not exist in five years. How
        fucking tired you must be.
      </p>
      <p className="font-bold">
        Because here's what we don't say at conferences: most of us are building the plane while
        flying it. And that's actually working.
      </p>

      <div className="my-12 p-8 border-l-4 border-accent bg-foreground/5">
        <h3 className="text-2xl font-display italic text-foreground mb-0">
          The website as the atomic unit of the internet is ending.
        </h3>
      </div>

      <p>
        I don't mean websites are dying. I mean they're becoming something else. You know how
        shopping malls didn't disappear? They just stopped being where commerce actually happens.
        They became these vestigial spaces that still exist but don't quite serve their original
        purpose.
      </p>

      <figure className="my-12">
        <Image
          src="/images/liminal-mall.png"
          alt="Empty shopping mall interior with vintage red gumball machine - metaphor for digital spaces without human interaction"
          width={2240}
          height={2021}
          sizes="(max-width: 768px) 100vw, 768px"
          className="w-full h-auto contrast-125 brightness-90 border-2 border-foreground/10"
        />
        <figcaption className="font-mono text-xs uppercase tracking-widest text-center mt-4 text-foreground/60">
          Fig. 1 — Website Circa 2035?
        </figcaption>
      </figure>

      <p>
        Your website is becoming infrastructure instead of destination. Nobody prepared us for that.
      </p>
      <p>
        I pulled 4.6 billion citations last month. You know what pattern emerged? Nothing. And
        everything. Reddit goes from 1% to 7% overnight because of a partnership call. Wikipedia
        swings from 5% to 15% back to 5% again because someone at OpenAI flips a switch. Your decade
        of SEO work is worth exactly as much as OpenAI's product manager decides it's worth on a
        Tuesday afternoon.
      </p>
      <p>This isn't malicious. It's just math. Probabilistic systems doing probabilistic things.</p>

      <h3 className="font-display text-2xl italic mt-12 mb-6">
        The part that's actually interesting (not conference keynote interesting):
      </h3>

      <p>
        We're not helpless. Every day I work with brands building real visibility strategies, not
        because they've cracked some code, but because they've accepted the new statistics of how
        this world works and started building around them.
      </p>
      <p>
        My nephew plays Minecraft. For years I thought the point was building stuff that looked
        good. Then I watched him play with his friends and realized looking good was irrelevant. The
        point was building things that WORKED. Things other people could use, that solved problems
        in the world they were creating together.
      </p>
      <p className="text-xl font-display italic text-accent">
        That's what marketing is becoming. Not the pretty building. The useful one.
      </p>
      <p>
        37% of ChatGPT prompts are now "generative intent," people asking it to CREATE things rather
        than find things. That's not the death of search. And you, reading this, probably managing a
        team, probably reporting metrics that don't make sense anymore, you're not watching this
        happen. You're in it.
      </p>

      <p>
        Last month a Fortune 500 brand saw their sentiment scores tank in ChatGPT responses. The AI
        kept surfacing old negative Reddit threads, outdated reviews, conversations from when they
        genuinely had problems. Visibility was fine. The narrative was killing them.
      </p>
      <p>They wanted to delete the old threads. "Optimize" the negative content away.</p>
      <p>
        What actually worked was stupider and harder: they started new conversations. Real ones. Got
        their actual customers talking about their actual experience today. Not through influencer
        campaigns or paid posts, just by being worth talking about. The old content is still there,
        but it's buried under a flood of recent, authentic experience.
      </p>
      <p>
        The sentiment shifted because they became the company people wanted to recommend. Turns out
        you can't game your way out of a bad reputation, but you can outgrow one.
      </p>

      <div className="my-16 py-12 border-y-2 border-foreground/20 text-center">
        <p className="font-display text-2xl italic max-w-xl mx-auto">
          If you feel overwhelmed, if your attribution models are breaking, if you're still figuring
          out how to track AI visibility, that's not failure. That's the job right now.
        </p>
      </div>

      <p>
        I keep thinking we're at the moment when marketing has to be useful or it dies. Not
        "valuable content" useful. Actually helping people get shit done.
      </p>
      <p>
        We are building the infrastructure for this. Badly, sometimes. Every brand I work with that
        builds for citation consistency, that creates genuinely helpful content, they're seeing
        results. Weird results. Different results. But results.
      </p>
      <p>
        When Atlas executes DOM clicks on your site, it doesn't care about your hero image. It cares
        if your checkout works. When ChatGPT searches for answers, it doesn't care about your
        keyword density. It cares if you actually answered the question.
      </p>
      <p>That's terrifying. It's also kind of beautiful? I go back and forth.</p>

      <p>
        The marketers who survive this won't be the ones who figure out new tricks. They'll be the
        ones who build new monitoring systems that account for 60% citation drift. Who get that
        position 1 doesn't matter when ChatGPT flattens citations across all ten spots.
      </p>
      <p>
        Every time I show a marketer our data, the citation volatility, the Reddit dominance, the
        Wikipedia dependency, there's a moment of panic. And then something else. Determination,
        maybe. Because finally we can see what we're dealing with. We can measure the chaos and
        respond to it.
      </p>

      <div className="bg-foreground text-background p-8 my-12 rounded-sm">
        <p className="font-mono text-xs uppercase tracking-widest mb-4 opacity-70">
          Something I've never said publicly
        </p>
        <p className="font-body text-lg leading-relaxed">
          My dad's a cop. Before that, weirdly, he did a short run in advertising. He wrote this
          Southwest Airlines ad once, just listed the flights and what they cost. That's it. No
          tagline, no concept. Here's when the plane leaves, here's what you'll pay.
          <br />
          <br />
          He brought it up years later over beers. Said it was the only piece of work he was ever
          really proud of. I remember thinking that was kind of sad, a whole stint in advertising
          and the highlight is basically a timetable? But I keep coming back to it. I think he was
          onto something I'm only now starting to get.
        </p>
      </div>

      <p>
        I think my dad's Southwest ad worked because it wasn't trying to be anything. It was just
        useful. Maybe that's where all of this is going.
      </p>
      <p>
        We're building the tools to track and measure all of this. Not the old way. A new way we're
        inventing as we go.
      </p>
      <p>
        You and me, we're figuring it out. We don't have answers. We're just stubborn enough to keep
        building while the ground shifts.
      </p>
      <p className="text-2xl font-display italic text-accent mt-8">
        That's enough. That's more than enough.
      </p>
      <p className="text-xs font-mono opacity-40 mt-4">(I love you, and I'm proud of you)</p>
    </div>
  );
}
