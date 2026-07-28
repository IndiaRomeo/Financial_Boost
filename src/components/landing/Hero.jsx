import LoanCalculator from './LoanCalculator.jsx'

export default function Hero() {
  return (
    <section className="bg-animated-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-20 right-[5%] w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob delay-400"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-blob delay-200"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize:'40px 40px'}}></div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-7 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-primary-100 text-sm font-medium">Financiamiento directo · Cero intermediarios</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up delay-100">
              El impulso financiero que tu familia{' '}
              <span className="text-accent">necesita hoy</span> 🇺🇸
            </h1>

            <p className="text-xl text-primary-100 mb-9 leading-relaxed animate-fade-up delay-200">
              Conectamos a la comunidad hispana en Estados Unidos con capital rápido y accesible, sin bancos tradicionales ni procesos eternos de por medio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <a href="#formulario" className="btn-cta text-center text-lg animate-glow-pulse">
                Empezar solicitud →
              </a>
              <a href="#como-funciona" className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                Ver el proceso
              </a>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 mt-10 md:mt-12 animate-fade-up delay-400">
              {[['500+','Familias apoyadas'],['24h','Respuesta express'],['100%','Trato en español']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-black text-accent">{val}</p>
                  <p className="text-primary-200 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up md:animate-fade-right delay-300 mt-10 md:mt-0">
            <div className="animate-float">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}
