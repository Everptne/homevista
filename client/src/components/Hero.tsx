interface HeroProps {
  imageUrl: string;
}

export default function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
      <img 
        src={imageUrl} 
        alt="Estate Luxury - Immobili di Prestigio"
        className="w-full h-full object-cover"
        data-testid="img-hero"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
            Trova la Casa dei Tuoi Sogni
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium" data-testid="text-hero-subtitle">
            Immobili di lusso nelle migliori location
          </p>
        </div>
      </div>
    </section>
  );
}
