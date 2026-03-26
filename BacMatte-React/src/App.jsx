import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Select from './pages/Select'
import Tutor from './pages/Tutor'
import Auth from './pages/Auth'
import { useAuth } from './context/AuthContext'

export default function App() {
  const { user } = useAuth()
  const [lang, setLang] = useState('ar')
  const [page, setPageState] = useState(() => localStorage.getItem('bacmatte_page') || 'landing')
  const [level, setLevelState] = useState(() => localStorage.getItem('bacmatte_level') || '')
  const [subject, setSubjectState] = useState(() => {
    try {
      const saved = localStorage.getItem('bacmatte_subject')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  const setPage = (p) => {
    localStorage.setItem('bacmatte_page', p)
    setPageState(p)
  }

  // Apply lang/dir to document
  useEffect(() => {
    document.body.classList.remove('ar', 'fr', 'en')
    document.body.classList.add(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const handleLangChange = (l) => {
    setLang(l)
  }

  const handleEnterTutor = (lv, sj) => {
    localStorage.setItem('bacmatte_level', lv)
    localStorage.setItem('bacmatte_subject', JSON.stringify(sj))
    setLevelState(lv)
    setSubjectState(sj)
  }

  // Auto-redirect if user returns from Google OAuth and is stuck on Auth page
  useEffect(() => {
    if (user && page === 'auth') {
      setPage('select')
    }
  }, [user, page])

  // Protected Routes Logic
  let currentPage = page
  if (!user && (page === 'select' || page === 'tutor')) {
    currentPage = 'auth'
  }

  const showNav = currentPage !== 'tutor'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {showNav && (
        <Navbar lang={lang} setLang={handleLangChange} setPage={setPage} />
      )}

      {currentPage === 'landing' && (
        <Landing lang={lang} setPage={setPage} setLang={handleLangChange} />
      )}
      {currentPage === 'select' && (
        <Select lang={lang} setPage={setPage} onEnter={handleEnterTutor} />
      )}
      {currentPage === 'tutor' && (
        <Tutor lang={lang} setPage={setPage} level={level} subject={subject} />
      )}
      {currentPage === 'auth' && (
        <Auth lang={lang} setPage={setPage} />
      )}
    </div>
  )
}
