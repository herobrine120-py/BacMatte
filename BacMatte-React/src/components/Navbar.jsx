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
        {/* These can be linked to landing sections if they exist, or keep as static links for now */}
        <button className="nav-link" onClick={() => { const el = document.getElementById('features'); if(el) el.scrollIntoView({behavior:'smooth'}) }}>{t.features}</button>
        <button className="nav-link" onClick={() => { const el = document.getElementById('pricing'); if(el) el.scrollIntoView({behavior:'smooth'}) }}>{t.pricing}</button>
      </div>

      <div className="nav-right">
        <div className="lang-sw">
          {['ar', 'fr', 'en'].map(l => (
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
          <button className="btn btn-outline" onClick={handleSignOut} style={{ borderColor: 'var(--red-light)', color: 'var(--red)' }}>
            {t.signout || (lang === 'ar' ? 'تسجيل الخروج' : 'Déconnexion')}
          </button>
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
