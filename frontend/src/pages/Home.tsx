export function Home() {
  return (
    <div className="bg-secondary text-text-soft min-h-screen selection:bg-accent selection:text-primary overflow-x-hidden">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-16 py-8 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter italic">
          CORTEX<span className="text-accent">EVO</span>
        </h1>
        <button className="border-2 border-accent text-accent px-6 py-2 rounded-full font-bold hover:bg-accent hover:text-primary transition-all duration-300 uppercase text-xs tracking-widest">
          Agendar
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
        {/* TEXTO - Com padding maior para dar espaço à imagem */}
        <div className="flex-1 px-6 md:pl-16 md:pr-0 z-10 py-12 text-center md:text-left">
          <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            The Next Level
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 uppercase italic">
            Cortes que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              impactam.
            </span>
          </h2>

          <p className="text-muted text-lg md:text-xl mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
            A técnica encontra o estilo. Onde cada detalhe é projetado para
            elevar sua presença.
          </p>

          <button className="bg-accent text-primary px-12 py-5 rounded-full font-black uppercase tracking-tighter hover:scale-105 hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] transition-all">
            Agendar agora
          </button>
        </div>

        {/* COLUNA DA IMAGEM - O segredo do "Fade" está aqui */}
        <div className="flex-1 relative w-full h-full min-h-[500px] md:min-h-[90vh]">
          {/* Camada de gradiente para suavizar a transição lateral (Mobile e Desktop) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-secondary" />

          <img
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700 ease-in-out"
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070"
            alt="Barber Shop"
          />

          <div className="absolute inset-0 z-20 bg-gradient-to-tr from-secondary/40 via-transparent to-accent/5 pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
