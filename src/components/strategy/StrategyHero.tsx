"use client";

export default function StrategyHero() {
  return (
    <section
      className="relative h-[300px] md:h-[380px] flex items-center"
      style={{
        backgroundImage: "url('/assets/strategy/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-white">
        <h2 className="text-lg md:text-xl font-medium mb-4 border-l-2 pl-4 border-white">
          Strategy
        </h2>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl">
          Making businesses rapidly adapt to changing circumstances
        </h1>
      </div>
    </section>
  );
}