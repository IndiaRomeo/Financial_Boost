import LoanCalculator from './LoanCalculator.jsx'

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Oversized brand arrow, bleeding off the corner instead of generic blur blobs */}
      <svg
        className="absolute -top-20 -right-28 w-[560px] h-[560px] opacity-[0.09] pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
      >
        <g transform="rotate(-45 50 50)">
          <rect x="42" y="18" width="16" height="72" fill="#22c55e" />
          <polygon points="18,36 50,0 82,36" fill="#22c55e" />
        </g>
      </svg>

      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize:'40px 40px'}}></div>

      {/* Diagonal glass panel behind the calculator, large screens only */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] bg-gradient-to-br from-secondary-900/70 to-primary-950/90"
        style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-28 pb-14 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <span className="w-8 h-[3px] bg-accent"></span>
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Financiamiento directo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 animate-fade-up delay-100">
              El impulso financiero que tu familia{' '}
              <span className="text-accent">necesita hoy</span>
            </h1>

            <p className="text-lg text-primary-200 mb-8 leading-relaxed max-w-md animate-fade-up delay-200">
              Conectamos a la comunidad hispana en Estados Unidos con capital rápido y accesible, sin bancos tradicionales ni procesos eternos de por medio.
            </p>

            <div className="flex items-center gap-6 animate-fade-up delay-300">
              <a href="#formulario" className="btn-cta text-center text-lg animate-glow-pulse">
                Empezar solicitud →
              </a>
              <a href="#como-funciona" className="text-white font-semibold hover:text-accent transition-colors inline-flex items-center gap-1.5">
                Ver el proceso <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 mt-10 lg:mt-0 animate-fade-up md:animate-fade-right delay-300">
            <div className="lg:-rotate-1 lg:hover:rotate-0 transition-transform duration-500">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </div>

      {/* Full-width stats ribbon */}
      <div className="relative z-10 border-t border-white/10 bg-primary-950/60">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-white/10">
          {[['500+','Familias apoyadas'],['24h','Respuesta express'],['100%','Trato en español']].map(([val, label]) => (
            <div key={label} className="text-center px-2">
              <p className="text-2xl sm:text-3xl font-black text-accent">{val}</p>
              <p className="text-primary-300 text-xs sm:text-sm mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
