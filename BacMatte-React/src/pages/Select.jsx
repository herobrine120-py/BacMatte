import { useState } from 'react'
import { translations } from '../i18n'

export default function Select({ lang, setPage, onEnter }) {
  const t = translations[lang]
  const [selLevel, setSelLevel] = useState('')
  const [selSubject, setSelSubject] = useState(null)

  const handleEnter = () => {
    onEnter(selLevel, selSubject)
    setPage('tutor')
  }

  return (
    <div className="select-page">
      <div className="select-shell">
        <div className="select-top">
          <button className="select-logo" onClick={() => setPage('landing')}>
            Bac<span>Matte</span>
          </button>
          <h2>{t.select.title}</h2>
          <p>{t.select.sub}</p>
        </div>

        {/* Step 1: Level */}
        <div className="sel-step">
          <div className="sel-label">
            <span className="sel-num">1</span>
            {t.select.step1}
          </div>
          <div className="level-row">
            {t.select.levels.map((lv, i) => (
              <div
                key={i}
                className={`level-card ${selLevel === lv.n + 'BAC' ? 'selected' : ''}`}
                onClick={() => setSelLevel(lv.n + 'BAC')}
              >
                <span className="level-big">{lv.n}</span>
                <span className="level-sub">{lv.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Subject */}
        <div className="sel-step">
          <div className="sel-label">
            <span className="sel-num">2</span>
            {t.select.step2}
          </div>
          <div className="subject-grid">
            {t.subjects.map((s) => (
              <div
                key={s.key}
                className={`subject-card ${selSubject?.key === s.key ? 'selected' : ''}`}
                onClick={() => setSelSubject(s)}
              >
                <span className="subject-ico">{s.ico}</span>
                <span className="subject-name">{s.name}</span>
                <span className="subject-fr">{s.fr}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sel-cta">
          <button
            className="btn btn-primary"
            disabled={!(selLevel && selSubject)}
            style={{ fontSize: '15px', padding: '13px 36px', opacity: selLevel && selSubject ? 1 : 0.4 }}
            onClick={handleEnter}
          >
            {t.select.cta}
          </button>
          {!selLevel && !selSubject && (
            <p style={{ marginTop: '10px', fontSize: '13px', color: 'var(--text3)', textAlign:'center' }}>
              {lang === 'ar' ? 'اختر المستوى والمادة أولاً' : lang === 'fr' ? "Choisissez d'abord le niveau et la matière" : 'Choose your level and subject first'}
            </p>
          )}
          {selLevel && !selSubject && (
            <p style={{ marginTop: '10px', fontSize: '13px', color: 'var(--text3)', textAlign:'center' }}>
              {lang === 'ar' ? 'اختر المادة الآن' : lang === 'fr' ? 'Choisissez maintenant la matière' : 'Now choose your subject'}
            </p>
          )}
        </div>
        <div className="sel-back">
          <button onClick={() => setPage('landing')}>{t.select.back}</button>
        </div>
      </div>
    </div>
  )
}
