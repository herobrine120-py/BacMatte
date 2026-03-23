import { useState } from 'react'
import { translations } from '../i18n'
import { supabase } from '../supabase'

export default function Auth({ lang, setPage }) {
  const t = translations[lang].auth
  const [tab, setTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleAuth = async () => {
    if (!email || !password) {
      setErrorMsg(lang === 'ar' ? 'يرجى إدخال البريد الإلكتروني وكلمة المرور' : 'Veuillez saisir l\'email et le mot de passe')
      return
    }

    setLoading(true)
    setErrorMsg('')

    try {
      if (tab === 'register') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        // Note: For simplicity, without email confirmation requirement this logs them right in if disabled in Supabase console,
        // otherwise it asks them to check their email.
        setPage('select')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        setPage('select')
      }
    } catch (err) {
      // Map common Supabase errors to Arabic/French
      if (err.message.includes('Invalid login credentials')) {
         setErrorMsg(lang === 'ar' ? 'خطأ في البريد الإلكتروني أو كلمة المرور' : 'Email ou mot de passe incorrect')
      } else if (err.message.includes('Password should be at least')) {
         setErrorMsg(lang === 'ar' ? 'يجب أن تكون كلمة المرور 6 أحرف على الأقل' : 'Le mot de passe doit comporter au moins 6 caractères')
      } else if (err.message.includes('already registered')) {
         setErrorMsg(lang === 'ar' ? 'هذا الحساب موجود مسبقاً' : 'Ce compte existe déjà')
      } else {
         setErrorMsg(err.message) // Fallback
      }
    } finally {
      setLoading(false)
    }
  }

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
            <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => { setTab('login'); setErrorMsg('') }}>
              {t.tab1}
            </button>
            <button className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => { setTab('register'); setErrorMsg('') }}>
              {t.tab2}
            </button>
          </div>

          {errorMsg && (
            <div style={{ background: 'var(--red-light)', color: 'var(--red)', padding: '10px 14px', borderRadius: '8px', fontSize: '14px', marginBottom: '16px', border: '1px solid rgba(220, 53, 69, 0.2)' }}>
              ⚠️ {errorMsg}
            </div>
          )}

          {tab === 'register' && (
            <div className="form-group">
              <label className="form-label">{t.name}</label>
              <input className="form-input" type="text" placeholder="Mohammed Doe" />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">{t.email}</label>
            <input className="form-input" type="email" placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">{t.pass}</label>
            <input className="form-input" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <button className="auth-submit" onClick={handleAuth} disabled={loading} style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? '...' : (tab === 'login' ? t.submit1 : t.submit2)}
          </button>

          <div className="auth-sep">{t.or}</div>

          {/* Social login handled seamlessly via Supabase */}
          <button className="auth-google" onClick={async () => {
             const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } })
             if (error) setErrorMsg(error.message)
          }}>
            {t.google}
          </button>

          <div className="auth-footer-link">
            <button onClick={() => setPage('landing')} disabled={loading}>{t.back}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
