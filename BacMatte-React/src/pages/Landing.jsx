import { useState } from 'react'
import { translations } from '../i18n'

export default function Landing({ lang, setPage }) {
  const t = translations[lang]
  const [activeMode, setActiveMode] = useState(0)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">{t.hero.badge}</div>
        <h1>
          {t.hero.title1}<br />
          {t.hero.title2}<em>{t.hero.titleAccent}</em>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" style={{ padding: '11px 24px', fontSize: '15px' }} onClick={() => setPage('select')}>
            {t.hero.cta1}
          </button>
          <button className="btn btn-secondary" style={{ padding: '11px 20px', fontSize: '15px' }} onClick={() => setPage('tutor')}>
            {t.hero.cta2}
          </button>
        </div>
      </section>

      {/* Browser Mockup */}
      <div style={{ margin: '0 60px 64px' }}>
        <div className="mockup">
          <div className="mockup-bar">
            <div className="mk-dots">
              <span className="d-r" /><span className="d-y" /><span className="d-g" />
            </div>
            <div className="mk-url">bacmatte.ma/tutor</div>
          </div>
          <div className="mockup-body">
            <div className="mk-sb">
              <div className="mk-sb-title">{t.mockup.lessons}</div>
              {t.mockItems.map((item, i) => (
                <div key={i} className={`mk-item ${i === 1 ? 'active' : ''}`}>{item}</div>
              ))}
            </div>
            <div className="mk-chat">
              <div className="mk-modes">
                {t.modes.map((m, i) => (
                  <div key={i} className={`mk-mode ${i === 0 ? 'active' : ''}`}>{m}</div>
                ))}
              </div>
              <div className="mk-msg ai">
                <span className="mk-trm">Énergie cinétique</span> : <span className="mk-f">Ec = ½mv²</span>
                &nbsp;·&nbsp;
                <span className="mk-trm">Énergie potentielle</span> : <span className="mk-f">Ep = mgh</span>
              </div>
              <div className="mk-msg user">
                {lang === 'ar' ? 'اشرح قانون انحفاظ الطاقة' : lang === 'fr' ? "Explique la conservation de l'énergie" : 'Explain energy conservation'}
              </div>
              <div className="mk-msg ai" style={{ opacity: .5 }}>{t.mockup.typing}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ margin: '0 60px 80px' }}>
        <div className="stats-row">
          {t.stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="features-section">
        <div className="sec-tag">{t.secTags.why}</div>
        <h2 className="sec-h">{t.secH.why[0]}<em>{t.secH.why[1]}</em></h2>
        <div className="feat-grid">
          {t.features.map((f, i) => (
            <div key={i} className="feat-cell">
              <div className="feat-ico">{f.ico}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modes */}
      <section className="modes-section">
        <div className="sec-tag">{t.secTags.modes}</div>
        <h2 className="sec-h">{t.secH.modes[0]}<em>{t.secH.modes[1]}</em></h2>
        <div className="modes-row">
          {t.modeCards.map((m, i) => (
            <div key={i} className={`mode-card ${activeMode === i ? 'active' : ''}`} onClick={() => setActiveMode(i)}>
              <div className="mode-card-ico">{m.ico}</div>
              <div className="mode-card-name">{m.name}</div>
              <div className="mode-card-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="sec-tag">{t.secTags.pricing}</div>
        <h2 className="sec-h">{t.secH.pricing[0]}<em>{t.secH.pricing[1]}</em></h2>
        <div className="pricing-grid">
          {/* Free */}
          <div className="price-box">
            <div className="price-tier">{t.pricing.free.tier}</div>
            <div className="price-num">0 <sup>{t.pricing.free.cur}</sup></div>
            <div className="price-per">{t.pricing.free.per}</div>
            <ul className="price-list">
              {t.pricing.free.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '11px' }} onClick={() => setPage('select')}>
              {t.pricing.free.cta}
            </button>
          </div>
          {/* Pro */}
          <div className="price-box featured">
            <div className="price-badge">{t.pricing.pro.badge}</div>
            <div className="price-tier">{t.pricing.pro.tier}</div>
            <div className="price-num">50 <sup>{t.pricing.pro.cur}</sup></div>
            <div className="price-per">{t.pricing.pro.per}</div>
            <ul className="price-list">
              {t.pricing.pro.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px' }} onClick={() => setPage('auth')}>
              {t.pricing.pro.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Bac<span>Matte</span></div>
        <div className="footer-text">{t.footer}</div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['ar', 'fr', 'en'].map(l => (
            <button key={l} className="lang-btn" style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg2)', color: 'var(--text2)', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}
