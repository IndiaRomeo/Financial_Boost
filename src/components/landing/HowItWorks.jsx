import { ClipboardList, Search, Phone, CreditCard } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Cuéntanos de ti',
    desc: 'Un formulario corto desde tu celular, sin papeleo ni filas.',
    color: 'bg-secondary',
  },
  {
    icon: Search,
    title: 'Revisamos tu caso',
    desc: 'Analizamos tu situación en minutos, no en días.',
    color: 'bg-primary',
  },
  {
    icon: Phone,
    title: 'Hablamos contigo',
    desc: 'Un asesor bilingüe confirma los detalles y responde tus dudas.',
    color: 'bg-secondary',
  },
  {
    icon: CreditCard,
    title: 'Tu dinero llega',
    desc: 'Transferencia directa a tu cuenta bancaria, sin vueltas.',
    color: 'bg-primary',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Así de sencillo</p>
          <h2 className="section-title">De la solicitud al depósito</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Cuatro pasos, cero complicaciones. Así conseguirás el dinero que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 z-0" style={{width: 'calc(100% - 5rem)', left: '5rem'}}></div>
                )}
                <div className="card text-center relative z-10 hover:shadow-lg transition-shadow duration-300">
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <a href="#formulario" className="btn-cta inline-block">Empezar solicitud →</a>
        </div>
      </div>
    </section>
  )
}
