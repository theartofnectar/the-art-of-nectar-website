import EmailSignup from "@/components/EmailSignup";

/* ─── Reusable SVG elements ─── */

function HexOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 87"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="98,43.5 74,2 26,2 2,43.5 26,85 74,85"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function BotanicalSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* stem */}
      <line
        x1="40"
        y1="180"
        x2="40"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* leaf pairs */}
      <path
        d="M40 155 Q68 140 62 118 Q50 130 40 155Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M40 155 Q12 140 18 118 Q30 130 40 155Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M40 115 Q70 98 63 74 Q50 90 40 115Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M40 115 Q10 98 17 74 Q30 90 40 115Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M40 74 Q68 56 60 32 Q48 50 40 74Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M40 74 Q12 56 20 32 Q32 50 40 74Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.25"
      />
      {/* top bud */}
      <ellipse
        cx="40"
        cy="14"
        rx="6"
        ry="10"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}

function HoneycombBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hc"
          x="0"
          y="0"
          width="56"
          height="97"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z
               M28 64 L56 80 L56 112 L28 128 L0 112 L0 80 Z"
            fill="none"
            stroke="#C8941A"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc)" opacity="0.04" />
    </svg>
  );
}

function BeeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      {/* body */}
      <ellipse
        cx="24"
        cy="26"
        rx="9"
        ry="13"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* head */}
      <circle
        cx="24"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* wings */}
      <ellipse
        cx="14"
        cy="20"
        rx="8"
        ry="4"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.1"
        transform="rotate(-20 14 20)"
      />
      <ellipse
        cx="34"
        cy="20"
        rx="8"
        ry="4"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.1"
        transform="rotate(20 34 20)"
      />
      {/* stripes */}
      <line
        x1="15.5"
        y1="24"
        x2="32.5"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="16"
        y1="30"
        x2="32"
        y2="30"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* antennae */}
      <path
        d="M21 7 Q17 2 14 1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M27 7 Q31 2 34 1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Social icons ─── */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

/* ─── Gallery data ─── */

const galleryItems = [
  {
    title: "Mountain Wildflowers",
    label: "BLUE RIDGE FOOTHILLS",
    fromColor: "from-honey-pale",
    toColor: "to-honey-light",
    hex: "#E8B84B",
  },
  {
    title: "Liquid Gold",
    label: "SMALL-BATCH HARVEST",
    fromColor: "from-honey",
    toColor: "to-bark-mid",
    hex: "#C8941A",
  },
  {
    title: "Among the Trees",
    label: "APPALACHIAN CANOPY",
    fromColor: "from-green",
    toColor: "to-bark",
    hex: "#3D5C35",
  },
  {
    title: "In Full Bloom",
    label: "WILDFLOWER MEADOW",
    fromColor: "from-green-light",
    toColor: "to-honey-pale",
    hex: "#6B8E5E",
  },
  {
    title: "Raw Honeycomb",
    label: "UNFILTERED · NATURAL",
    fromColor: "from-cream-deep",
    toColor: "to-honey-light",
    hex: "#EDE0CA",
  },
  {
    title: "Misty Mornings",
    label: "NORTH GEORGIA",
    fromColor: "from-bark-mid",
    toColor: "to-green",
    hex: "#4A2D10",
  },
];

const varieties = [
  "Mountain Wildflower",
  "Blue Ridge Clover",
  "Sourwood Blossom",
  "Autumn Goldenrod",
];

/* ─── Page ─── */

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ══ HERO ══ */}
      <section className="relative h-screen min-h-160 flex flex-col bg-cream overflow-hidden">
        <HoneycombBg />

        {/* Decorative hex outlines */}
        <HexOutline className="absolute -right-16 top-1/4 w-72 text-honey opacity-10 hidden md:block" />
        <HexOutline className="absolute -left-24 bottom-1/4 w-64 text-green opacity-10 hidden md:block" />
        <HexOutline className="absolute right-1/4 -top-8 w-32 text-terracotta opacity-10 hidden lg:block" />

        {/* Botanical sprig */}
        <BotanicalSprig className="absolute left-6 bottom-12 h-40 text-green opacity-20 hidden lg:block" />
        <BotanicalSprig className="absolute right-8 top-24 h-28 text-honey opacity-15 hidden lg:block" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-8 sm:px-12 py-8">
          <span className="font-serif text-xs tracking-[0.35em] uppercase text-bark/50">
            North Georgia
          </span>
          <div className="flex gap-8">
            <a
              href="#story"
              className="font-sans text-xs tracking-widest uppercase text-bark/60 link-hover"
            >
              Our Story
            </a>
            <a
              href="#honey"
              className="font-sans text-xs tracking-widest uppercase text-bark/60 link-hover hidden sm:inline"
            >
              Honey
            </a>
            <a
              href="#signup"
              className="font-sans text-xs tracking-widest uppercase text-bark/60 link-hover"
            >
              Join Us
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-16">
          <p className="hero-anim-1 font-sans text-xs tracking-[0.5em] uppercase text-terracotta mb-8">
            Blue Ridge Mountains · Georgia
          </p>

          <h1 className="hero-anim-2 font-serif font-light text-bark leading-none">
            <span className="block text-[clamp(3rem,10vw,8rem)] tracking-tight">
              The Art of
            </span>
            <span className="block text-[clamp(3.5rem,12vw,10rem)] tracking-tight italic text-honey">
              Nectar
            </span>
          </h1>

          <div className="hero-anim-3 gold-rule w-24 mx-auto my-6" />

          <p className="hero-anim-3 font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-bark/60">
            Wildflower Honey Co.
          </p>

          <p className="hero-anim-4 font-serif font-light text-lg sm:text-xl text-bark/70 max-w-sm mt-6 leading-relaxed">
            Small-batch honey harvested from mountain wildflower meadows in the
            heart of North Georgia.
          </p>

          <div className="hero-anim-5 flex items-center gap-3 mt-10">
            <BeeIcon className="w-8 h-8 text-honey" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-anim-scroll relative z-10 flex flex-col items-center gap-2 pb-8">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-bark/40">
            Scroll
          </span>
          <div className="scroll-bounce">
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 text-honey"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 8l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ══ OUR STORY ══ */}
      <section id="story" className="bg-cream-deep py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Decorative left column */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm">
              {/* Layered hex frames */}
              <HexOutline className="w-full text-honey opacity-20" />
              <HexOutline className="absolute inset-4 text-terracotta opacity-15" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-10">
                <BotanicalSprig className="h-48 text-green opacity-60" />
                <p className="font-serif italic text-bark/50 text-sm text-center leading-relaxed">
                  &ldquo;Tended by hand,<br />slow and unhurried.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-terracotta mb-4">
              Our Story
            </p>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-bark leading-tight mb-8">
              Born from a love<br />
              <span className="italic text-honey">of the land.</span>
            </h2>
            <div className="gold-rule w-16 mb-8" />
            <div className="space-y-5 font-sans font-light text-bark/75 leading-relaxed text-base sm:text-lg">
              <p>
                Nestled in the foothills of the Blue Ridge Mountains, The Art of
                Nectar began as a simple love affair with the wild and unhurried
                rhythms of North Georgia.
              </p>
              <p>
                Our bees roam freely through sun-warmed meadows and shaded
                hardwood hollows, gathering nectar from native blooms that define
                this region&apos;s character — clover, sourwood, goldenrod, and
                wildflowers too numerous to name.
              </p>
              <p>
                We believe the best honey asks nothing more of you than to slow
                down and taste where it came from. Every jar carries the story of
                a season, a place, and the quiet work of ten thousand bees.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-10">
              <div className="gold-rule flex-1 max-w-15" />
              <p className="font-serif italic text-honey text-base">
                Small-batch &middot; Unfiltered &middot; Mountain-grown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HONEY COMING SOON ══ */}
      <section
        id="honey"
        className="relative bg-bark py-24 sm:py-32 px-6 overflow-hidden"
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <HoneycombBg />
        </div>

        {/* Decorative large hex */}
        <HexOutline className="absolute -right-32 top-1/2 -translate-y-1/2 w-125 text-honey opacity-5 hidden lg:block" />
        <HexOutline className="absolute -left-40 top-1/2 -translate-y-1/2 w-100 text-honey opacity-5 hidden lg:block" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-honey mb-6">
            Coming Soon
          </p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-7xl text-cream leading-tight mb-6">
            Something golden<br />
            <em className="text-honey italic">is nearly ready.</em>
          </h2>
          <div className="gold-rule w-24 mx-auto my-8" />
          <p className="font-sans font-light text-cream/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-16">
            Our first harvest is almost here. We&apos;re finishing the last
            details — the labels, the jars, the care — before our honey finds
            its way to your table.
          </p>

          {/* Variety grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-honey/20">
            {varieties.map((v) => (
              <div
                key={v}
                className="flex flex-col items-center justify-center py-10 px-4 border border-honey/10 group"
              >
                <HexOutline className="w-10 h-10 text-honey opacity-40 mb-4 group-hover:opacity-80 transition-opacity duration-300" />
                <p className="font-serif font-light text-cream text-sm sm:text-base leading-snug text-center">
                  {v}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs tracking-[0.35em] uppercase text-honey/50 mt-12">
            Join our list to be notified first
          </p>
          <svg
            viewBox="0 0 20 20"
            className="w-4 h-4 text-honey/40 mx-auto mt-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 8l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section id="gallery" className="bg-cream py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-terracotta mb-4">
              From the Mountains
            </p>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-bark">
              Life at the <em className="italic text-honey">apiary</em>
            </h2>
            <div className="gold-rule w-20 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="gallery-card group cursor-default">
                {/* Gradient image placeholder */}
                <div
                  className={`relative aspect-4/5 bg-linear-to-br ${item.fromColor} ${item.toColor} overflow-hidden`}
                >
                  {/* Overlay hexagon decoration */}
                  <HexOutline className="absolute inset-0 m-auto w-3/4 text-white opacity-5" />
                  {/* Botanical sprig */}
                  <BotanicalSprig className="absolute right-4 top-4 h-24 text-white opacity-10" />
                  {/* Label overlay */}
                  <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/60 mb-1">
                      {item.label}
                    </p>
                    <p className="font-serif font-light text-xl text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EMAIL SIGNUP ══ */}
      <section
        id="signup"
        className="relative bg-green py-24 sm:py-32 px-6 overflow-hidden"
      >
        {/* Decorative elements */}
        <BotanicalSprig className="absolute left-8 top-1/2 -translate-y-1/2 h-64 text-green-light opacity-20 hidden lg:block" />
        <BotanicalSprig className="absolute right-8 top-1/2 -translate-y-1/2 h-64 text-green-light opacity-20 hidden lg:block" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <BeeIcon className="w-12 h-12 text-honey mx-auto mb-8" />
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-honey/70 mb-4">
            Join the Apiary
          </p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-cream leading-snug mb-6">
            Be first to know<br />
            when the <em className="italic text-honey">honey is ready.</em>
          </h2>
          <div className="gold-rule w-20 mx-auto my-8" />
          <p className="font-sans font-light text-cream/65 text-base mb-10 max-w-md mx-auto leading-relaxed">
            We&apos;ll send you one quiet note when our jars are ready to ship —
            no noise, just honey.
          </p>
          <div className="flex justify-center">
            <EmailSignup />
          </div>
          <p className="font-sans text-[11px] text-cream/30 mt-6 tracking-wide">
            No spam. Ever. Unsubscribe any time.
          </p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-bark py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top: brand + socials */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-10">
            <div className="text-center sm:text-left">
              <p className="font-serif font-light text-2xl text-cream tracking-wide">
                The Art of Nectar
              </p>
              <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream/40 mt-1">
                Wildflower Honey Co.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-cream/50 hover:text-honey transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-cream/50 hover:text-honey transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-cream/50 hover:text-honey transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="gold-rule mb-10" />

          {/* Bottom: links + copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <nav className="flex gap-6">
              {["Our Story", "Honey", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="font-sans text-xs tracking-widest uppercase text-cream/40 hover:text-honey transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
            <p className="font-sans text-xs text-cream/30 tracking-wide">
              &copy; 2026 The Art of Nectar Honey Co.
            </p>
          </div>

          {/* Tagline */}
          <p className="font-serif italic text-center text-cream/20 text-sm mt-10">
            Tended by hand &middot; North Georgia Mountains
          </p>
        </div>
      </footer>
    </main>
  );
}
