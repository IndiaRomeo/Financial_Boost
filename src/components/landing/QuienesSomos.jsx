import { Target, Eye, Heart, Users } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const values = [
  { icon: Heart, title: 'Origen', desc: 'Creamos esta plataforma pensando en las familias hispanas que los bancos tradicionales suelen dejar fuera.' },
  { icon: Target, title: 'Propósito', desc: 'Abrir la puerta a financiamiento honesto, sin que el idioma o el papeleo sean un obstáculo.' },
  { icon: Eye, title: 'Hacia dónde vamos', desc: 'Convertirnos en el aliado financiero de referencia para la comunidad hispana en el país.' },
  { icon: Users, title: 'Nuestra gente', desc: 'Un equipo bilingüe que te acompaña de principio a fin, no solo hasta que firmas.' },
]

export default function QuienesSomos() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="quienes-somos" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'animate-fade-up' : 'opacity-0 translate-y-8'}`}>
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Detrás de Financial Boost</p>
          <h2 className="section-title mb-4">Gente que entiende tu situación</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            No somos un banco más. Somos un equipo de profesionales hispanos que vivió de cerca lo difícil
            que es conseguir crédito siendo inmigrante en Estados Unidos, y decidió construir algo distinto:
            un camino directo, claro y en tu propio idioma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className={`transition-all duration-700 delay-100 ${visible ? 'animate-fade-left' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-8 text-white h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-6xl font-black text-accent mb-2">5+</div>
                <p className="text-xl font-bold mb-2">Años acompañando familias</p>
                <p className="text-primary-200 leading-relaxed">
                  Construyendo soluciones financieras pensadas para la realidad de quien empieza de nuevo
                  en este país.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[['500+','Clientes'],['$2M+','Prestado'],['98%','Satisfacción'],['24h','Respuesta']].map(([v,l]) => (
                    <div key={l} className="bg-white/10 rounded-xl p-3 text-center">
                      <p className="text-2xl font-black text-accent">{v}</p>
                      <p className="text-primary-200 text-xs">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${visible ? 'animate-fade-right' : 'opacity-0 translate-x-8'}`}>
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className={`card-hover border border-gray-50 delay-${(i+1)*100}`}>
                  <div className="bg-primary/10 rounded-2xl p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
