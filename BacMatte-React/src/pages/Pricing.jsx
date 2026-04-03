import { translations } from '../i18n'

export default function Pricing({ lang, setPage }) {
  const t = translations[lang]
  const p = t.pricingPage

  const handleAction = () => {
    alert(lang === 'ar' ? 'طرق الدفع ستتوفر قريباً!' : 'Les méthodes de paiement seront bientôt disponibles!')
  }

  return (
    <div style={{ flex: 1, padding: '60px 20px', background: 'var(--bg)' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px' }}>{p.title}</h1>
        <p style={{ fontSize: '16px', color: 'var(--text2)' }}>{p.sub}</p>
      </div>

      <div className="pricing-grid" style={{ maxWidth: '1000px', margin: '0 auto', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {/* Free */}
        <div className="price-box">
          <div className="price-tier">{p.free.tier}</div>
          <div className="price-num">0 <sup>{p.free.cur}</sup></div>
          <div className="price-per">{p.free.per}</div>
          <ul className="price-list">
            {p.free.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setPage('auth')}>
            {p.free.cta}
          </button>
        </div>

        {/* Go */}
        <div className="price-box">
          <div className="price-tier">{p.go.tier}</div>
          <div className="price-num">50 <sup>{p.go.cur}</sup></div>
          <div className="price-per">{p.go.per}</div>
          <ul className="price-list">
            {p.go.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleAction}>
            {p.go.cta}
          </button>
        </div>

        {/* Pro */}
        <div className="price-box featured">
          <div className="price-badge" style={{ background: 'var(--accent)' }}>{p.pro.badge}</div>
          <div className="price-tier">{p.pro.tier}</div>
          <div className="price-num">75 <sup>{p.pro.cur}</sup></div>
          <div className="price-per">{p.pro.per}</div>
          <ul className="price-list">
            {p.pro.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleAction}>
            {p.pro.cta}
          </button>
        </div>

        {/* Ultra */}
        <div className="price-box" style={{ background: '#000b60', color: 'white', borderColor: '#000b60' }}>
          <div className="price-tier" style={{ color: '#dfe0ff' }}>{p.ultra.tier}</div>
          <div className="price-num" style={{ color: 'white' }}>100 <sup style={{ color: '#dfe0ff' }}>{p.ultra.cur}</sup></div>
          <div className="price-per" style={{ color: '#dfe0ff' }}>{p.ultra.per}</div>
          <ul className="price-list">
            {p.ultra.items.map((item, i) => <li key={i} style={{ color: 'white' }}>{item}</li>)}
          </ul>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', background: 'white', color: '#000b60' }} onClick={handleAction}>
            {p.ultra.cta}
          </button>
        </div>
      </div>
      
      <div className="sel-back" style={{ marginTop: '60px' }}>
        <button onClick={() => setPage('landing')}>{t.select.back}</button>
      </div>
    </div>
  )
}
