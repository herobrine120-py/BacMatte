import { useState } from 'react'
import { translations } from '../i18n'

export default function Auth({ lang, setPage }) {
  const t = translations[lang].auth
  const [tab, setTab] = useState('login')

  return (
    <div className="auth-page">
      <div className="auth-shell">
        {/* Left panel */}
        <div className="auth-left">
          <div className="auth-left-logo">Bac<span>Matte</span></div>
          <div className="auth-headline">
            {t.headline.map((line, i) => (
              <span key={i}>
                {i === t.headline.length - 1 ? <em>{line}</em> : line}
                {i < t.headline.length - 1 && <br />}
              </span>
            ))}
          </div>
          <div className="auth-perks">
            {t.perks.map((p, i) => (
              <div key={i} className="perk">
                <div className="perk-ico">{p.ico}</div>
                <div className="perk-text">
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="auth-right">
          <h2>{t.title}</h2>
          <p>{t.sub}</p>

          <div className="auth-tabs">
            <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
              {t.tab1}
            </button>
            <button className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>
              {t.tab2}
            </button>
          </div>

          {tab === 'register' && (
            <div className="form-group">
              <label className="form-label">{t.name}</label>
              <input className="form-input" type="text" />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">{t.email}</label>
            <input className="form-input" type="email" placeholder="example@gmail.com" />
          </div>
          <div className="form-group">
            <label className="form-label">{t.pass}</label>
            <input className="form-input" type="password" placeholder="••••••••" />
          </div>

          <button className="auth-submit" onClick={() => setPage('select')}>
            {tab === 'login' ? t.submit1 : t.submit2}
          </button>

          <div className="auth-sep">{t.or}</div>

          <button className="auth-google" onClick={() => setPage('select')}>
            {t.google}
          </button>

          <div className="auth-footer-link">
            <button onClick={() => setPage('landing')}>{t.back}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
