import { translations } from '../i18n'
import { useAuth } from '../context/AuthContext'

export default function Navbar({ lang, setLang, setPage }) {
  const t = translations[lang].nav
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    setPage('landing')
  }

  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => setPage('landing')}>
        Bac<span>Matte</span>
      </button>

      <div className="nav-center">
        <button className="nav-link" onClick={() => setPage('pricing')}>{t.pricing}</button>
        <button className="nav-link" onClick={() => setPage('contact')}>{t.contact}</button>
      </div>

      <div className="nav-right">
        <div className="lang-sw">
          {['ar', 'fr'].map(l => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        
        {user ? (
          <>
            <button className="btn btn-outline" onClick={() => setPage('profile')} style={{ padding: '7px 11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              👤 <span className="hide-mobile">{t.profile}</span>
            </button>
          </>
        ) : (
          <button className="btn btn-outline" onClick={() => setPage('auth')}>
            {t.signin}
          </button>
        )}
        
        <button className="btn btn-primary" onClick={() => setPage('select')}>
          {t.start}
        </button>
      </div>
    </nav>
  )
}
