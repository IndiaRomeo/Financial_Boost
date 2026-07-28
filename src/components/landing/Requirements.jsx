import { CheckCircle2, DollarSign, MapPin, CreditCard, Building2 } from 'lucide-react'

const reqs = [
  { icon: DollarSign, text: 'Ingresos mensuales que puedas comprobar' },
  { icon: MapPin, text: 'Residir actualmente en Estados Unidos' },
  { icon: CreditCard, text: 'Identificación vigente (licencia o ID estatal)' },
  { icon: Building2, text: 'Cuenta bancaria activa a tu nombre' },
]

export default function Requirements() {
  return (
    <section id="requisitos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Lo que necesitas</p>
            <h2 className="section-title mb-4">Requisitos para calificar</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Nada de trámites imposibles. Si cumples estos cuatro puntos, ya puedes iniciar tu solicitud.
            </p>

            <div className="space-y-4">
              {reqs.map((req, i) => {
                const Icon = req.icon
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="bg-green-100 rounded-xl p-2 flex-shrink-0">
                      <CheckCircle2 size={20} className="text-green-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{req.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            <a href="#formulario" className="btn-cta inline-block mt-8">
              Quiero verificar si califico
            </a>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Lo que nos hace diferentes</h3>
            <div className="space-y-5">
              {[
                { title: 'Trato directo', desc: 'Nada de bancos ni intermediarios entre tú y tu dinero.' },
                { title: 'Reglas claras desde el día uno', desc: 'Conoces cada condición antes de firmar, sin sorpresas.' },
                { title: '100% en tu idioma', desc: 'Todo el acompañamiento, en español, de principio a fin.' },
                { title: 'Respuesta veloz', desc: 'La mayoría de los casos se resuelven en menos de 24 horas.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-black text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-primary-200 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
