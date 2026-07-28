import { X, FileText, Printer } from 'lucide-react'

function buildContractHTML({ clientName, clientEmail, amount, term, rate, monthly, total, disbursementDate, signDate, numero }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Contrato de Crédito - ${clientName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Times New Roman', Times, serif; font-size: 12pt; color: #1a1a1a; background: white; padding: 40px 60px; line-height: 1.7; }
    .header { text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #7f1d1d; }
    .logo-text { font-size: 28pt; font-weight: 900; }
    .logo-il { color: #7f1d1d; }
    .logo-an { color: #d97706; }
    .logo-sub { font-size: 9pt; color: #666; letter-spacing: 3px; text-transform: uppercase; margin-top: 4px; }
    .contract-number { font-size: 9pt; color: #999; margin-top: 6px; }
    h1 { font-size: 16pt; text-align: center; text-transform: uppercase; letter-spacing: 2px; margin: 30px 0 20px; color: #7f1d1d; border-bottom: 1px solid #7f1d1d; padding-bottom: 8px; }
    h2 { font-size: 12pt; text-transform: uppercase; letter-spacing: 1px; color: #7f1d1d; margin: 24px 0 8px; }
    p { margin-bottom: 10px; text-align: justify; }
    .parties { background: #fdf4f4; border-left: 4px solid #7f1d1d; padding: 16px 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
    .conditions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
    .condition-item { background: #fdf4f4; padding: 12px 16px; border-radius: 8px; border: 1px solid #e7e0e0; }
    .condition-label { font-size: 9pt; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .condition-value { font-size: 13pt; font-weight: bold; color: #7f1d1d; }
    .highlight { background: #7f1d1d; color: white; padding: 16px 20px; border-radius: 8px; margin: 20px 0; }
    .highlight .label { font-size: 9pt; opacity: 0.8; margin-bottom: 4px; }
    .highlight .value { font-size: 16pt; font-weight: 900; }
    .alert-box { background: #fff8e1; border: 1px solid #d97706; border-radius: 8px; padding: 14px 18px; margin: 16px 0; }
    .divider { border: none; border-top: 1px solid #e7e0e0; margin: 24px 0; }
    .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
    .sig-block { text-align: center; }
    .sig-line { border-top: 1px solid #1a1a1a; margin-bottom: 8px; width: 100%; }
    .sig-name { font-weight: bold; font-size: 11pt; }
    .sig-role { font-size: 9pt; color: #666; }
    .footer { margin-top: 40px; padding-top: 16px; border-top: 2px solid #7f1d1d; text-align: center; font-size: 8pt; color: #999; }
    @media print {
      body { padding: 20px 40px; }
      @page { margin: 1.5cm; size: Letter; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-text">
      <span class="logo-il">Financial </span><span class="logo-an">Boost</span>
    </div>
    <div class="logo-sub">Servicios Financieros</div>
    ${numero ? `<div class="contract-number">Préstamo No. ${numero}</div>` : ''}
  </div>

  <h1>Contrato de Crédito Personal</h1>

  <div class="parties">
    <p><strong>Entre:</strong> Financial Boost, en calidad de entidad financiera prestamista,</p>
    <p><strong>y el cliente:</strong> ${clientName}${clientEmail ? ` &lt;${clientEmail}&gt;` : ''}.</p>
  </div>

  <p><strong>Objeto del contrato:</strong> Mediante este documento se formaliza el crédito personal aprobado al cliente, bajo los términos y condiciones descritos a continuación.</p>

  <h2>Condiciones del Crédito</h2>

  <div class="conditions-grid">
    <div class="condition-item">
      <div class="condition-label">Monto del préstamo</div>
      <div class="condition-value">$${amount} USD</div>
    </div>
    <div class="condition-item">
      <div class="condition-label">Plazo de pago</div>
      <div class="condition-value">${term} meses</div>
    </div>
    <div class="condition-item">
      <div class="condition-label">Tasa de interés anual</div>
      <div class="condition-value">${rate}%</div>
    </div>
    <div class="condition-item">
      <div class="condition-label">Cuota mensual</div>
      <div class="condition-value">$${monthly} USD</div>
    </div>
  </div>

  <div class="highlight">
    <div class="label">Monto total a pagar</div>
    <div class="value">$${total} USD</div>
  </div>

  <p>El total de <strong>$${total} USD</strong> se pagará en cuotas mensuales de <strong>$${monthly} USD</strong>, a lo largo de <strong>${term} meses</strong>.</p>

  <hr class="divider">

  <h2>Forma y Condiciones de Pago</h2>

  <p><strong>Método de pago:</strong> Los pagos mensuales se realizan a través de Western Union.</p>
  <p><strong>Destino:</strong> El envío se dirige a Colombia, al beneficiario que le será indicado.</p>
  <p><strong>Desembolso:</strong> El crédito se depositará directamente en su cuenta bancaria el <strong>${disbursementDate}</strong>.</p>
  <p><strong>Fecha de corte:</strong> Cada cuota vence el <strong>día 15</strong> del mes correspondiente, con un margen de 3 días adicionales antes de considerarse atrasada.</p>

  <hr class="divider">

  <h2>Condiciones Adicionales</h2>

  <div class="alert-box">
    <p><strong>Sobre los pagos atrasados:</strong> El incumplimiento de una cuota será reportado a las centrales de riesgo crediticio, lo cual puede afectar su historial y su acceso a crédito en el futuro.</p>
  </div>

  <h2>Declaraciones del Cliente</h2>

  <p><strong>${clientName}</strong> confirma haber recibido y comprendido toda la información sobre las condiciones de este crédito, y acepta los términos aquí descritos.</p>

  <p>El cliente se compromete a realizar sus pagos mensuales a través de Western Union, siguiendo las instrucciones que le proporcione Financial Boost en cada caso.</p>

  <div class="signatures">
    <div class="sig-block">
      <br><br>
      <div class="sig-line"></div>
      <div class="sig-name">Representante Financial Boost</div>
      <div class="sig-role">Asesor(a) Financiero(a)</div>
      <div class="sig-role">Financial Boost</div>
      <div class="sig-role">Fecha: ${signDate}</div>
    </div>
    <div class="sig-block">
      <br><br>
      <div class="sig-line"></div>
      <div class="sig-name">${clientName}</div>
      <div class="sig-role">Cliente</div>
      <div class="sig-role">Fecha: ${signDate}</div>
    </div>
  </div>

  <div class="footer">
    <p>Financial Boost · Servicios Financieros · Este documento es un contrato legalmente vinculante.</p>
    <p>Generado el ${signDate}</p>
  </div>
</body>
</html>`
}

export default function ContractModal({ clientName, clientEmail, loan, onClose }) {
  const fmt = (n) => Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const fmtDate = (d) => d ? new Date(d + 'T12:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }) : '—'
  const today = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })

  const amount   = fmt(loan?.monto)
  const monthly  = fmt(loan?.cuota_mensual)
  const total    = fmt(loan?.total_pagar)
  const term     = loan?.plazo_meses || 12
  const rate     = loan ? Math.round(loan.tasa_interes * 100) : 4
  const disbDate = fmtDate(loan?.fecha_inicio)
  const numero   = loan?.numero_prestamo || ''

  function printContract() {
    const html = buildContractHTML({ clientName, clientEmail, amount, term, rate, monthly, total, disbursementDate: disbDate, signDate: today, numero })
    const win = window.open('', '_blank', 'width=900,height=750')
    win.document.write(html)
    win.document.close()
    setTimeout(() => { win.focus(); win.print() }, 600)
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between rounded-t-2xl flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-lg p-2"><FileText size={18} className="text-white"/></div>
            <div>
              <h2 className="text-white font-bold text-base">Contrato de Crédito Personal</h2>
              <p className="text-primary-200 text-xs">{clientName}{numero && ` · ${numero}`}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={printContract}
              className="flex items-center gap-2 bg-accent hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors"
            >
              <Printer size={15}/> Descargar / Imprimir
            </button>
            <button onClick={onClose} className="text-white/70 hover:text-white ml-1"><X size={20}/></button>
          </div>
        </div>

        {/* Contract Preview */}
        <div className="overflow-y-auto flex-1 p-6 bg-gray-50">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>

            {/* Logo */}
            <div className="text-center mb-8 pb-5 border-b-2 border-primary">
              <div className="text-2xl font-black">
                <span className="text-primary">Financial </span>
                <span className="text-accent">Boost</span>
              </div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-1">Servicios Financieros</p>
              {numero && <p className="text-xs text-gray-400 mt-1">Préstamo No. {numero}</p>}
            </div>

            <h1 className="text-center text-sm font-bold text-primary uppercase tracking-wider mb-6 underline">
              Contrato de Crédito Personal
            </h1>

            <div className="bg-primary-50 border-l-4 border-primary rounded-r-lg p-4 mb-5 text-sm">
              <p><strong>Entre:</strong> Financial Boost, en calidad de entidad financiera prestamista,</p>
              <p className="mt-1"><strong>y el cliente:</strong> {clientName}{clientEmail && <span className="text-gray-500"> &lt;{clientEmail}&gt;</span>}.</p>
            </div>

            <p className="text-sm mb-5 leading-relaxed">
              <strong>Objeto del contrato:</strong> Mediante este documento se formaliza el crédito personal aprobado al cliente, bajo los términos y condiciones descritos a continuación.
            </p>

            <h2 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Condiciones del Crédito</h2>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                ['Monto del préstamo', `$${amount} USD`],
                ['Plazo de pago', `${term} meses`],
                ['Tasa de interés anual', `${rate}%`],
                ['Cuota mensual', `$${monthly} USD`],
              ].map(([label, value]) => (
                <div key={label} className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                  <p className="font-bold text-primary text-sm">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-xl p-4 text-white text-center mb-5">
              <p className="text-xs opacity-75 mb-1">Monto total a pagar</p>
              <p className="text-2xl font-black">${total} USD</p>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-4">
              <h2 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Forma y Condiciones de Pago</h2>
              <div className="space-y-2 text-sm">
                <p><strong>Método de pago:</strong> Western Union.</p>
                <p><strong>Destino:</strong> Colombia, al beneficiario que le será indicado.</p>
                <p><strong>Desembolso:</strong> {disbDate}.</p>
                <p><strong>Fecha de corte:</strong> Día 15 de cada mes, con 3 días de margen.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <p className="text-xs font-bold text-yellow-800 mb-1">Sobre los pagos atrasados</p>
              <p className="text-xs text-yellow-700">Una cuota vencida se reporta a las centrales de riesgo crediticio y puede afectar su historial.</p>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-6">
              <p className="text-sm leading-relaxed">
                <strong>{clientName}</strong> confirma haber recibido y comprendido las condiciones de este crédito, y acepta los términos aquí descritos. El cliente se compromete a realizar sus pagos mensuales a través de Western Union, según las instrucciones que le sean proporcionadas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10 pt-4">
              <div className="text-center">
                <div className="border-t border-gray-800 pt-2">
                  <p className="text-xs font-bold">Financial Boost</p>
                  <p className="text-xs text-gray-500">Asesor(a) Financiero(a)</p>
                  <p className="text-xs text-gray-400">{today}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="border-t border-gray-800 pt-2">
                  <p className="text-xs font-bold">{clientName}</p>
                  <p className="text-xs text-gray-500">Cliente</p>
                  <p className="text-xs text-gray-400">{today}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-primary text-center">
              <p className="text-xs text-gray-400">Financial Boost · Servicios Financieros</p>
              <p className="text-xs text-gray-300">Generado el {today}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
