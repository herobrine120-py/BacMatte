import { useState } from 'react'
import { translations } from '../i18n'

export default function Landing({ lang, setPage, setLang }) {
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
          <button className="btn btn-secondary" style={{ padding: '11px 20px', fontSize: '15px' }} onClick={() => setPage('select')}>
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

      {/* Pricing Teaser */}
      <section className="pricing-section" id="pricing">
        <div className="sec-tag">{t.secTags.pricing}</div>
        <h2 className="sec-h">{t.secH.pricing[0]}<em>{t.secH.pricing[1]}</em></h2>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="btn btn-primary" onClick={() => setPage('pricing')} style={{ fontSize: '16px', padding: '14px 30px' }}>
            {lang === 'ar' ? 'عرض باقات الأسعار' : 'Voir nos offres'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Bac<span>Matte</span></div>
        <div className="footer-text">{t.footer}</div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['ar', 'fr', 'en'].map(l => (
            <button key={l} className="lang-btn"
              style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid var(--border)', background: lang === l ? 'var(--text)' : 'var(--bg2)', color: lang === l ? '#fff' : 'var(--text2)', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
              onClick={() => setLang?.(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}
