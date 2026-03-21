import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Select from './pages/Select'
import Tutor from './pages/Tutor'
import Auth from './pages/Auth'

export default function App() {
  const [lang, setLang] = useState('ar')
  const [page, setPage] = useState('landing')
  const [level, setLevel] = useState('')
  const [subject, setSubject] = useState(null)

  // Apply lang/dir to document
  useEffect(() => {
    // Bug 4 fix: use classList to avoid destroying other body classes
    document.body.classList.remove('ar', 'fr', 'en')
    document.body.classList.add(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const handleLangChange = (l) => {
    setLang(l)
  }

  const handleEnterTutor = (lv, sj) => {
    setLevel(lv)
    setSubject(sj)
  }

  const showNav = page !== 'tutor'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {showNav && (
        <Navbar lang={lang} setLang={handleLangChange} setPage={setPage} />
      )}

      {page === 'landing' && (
        <Landing lang={lang} setPage={setPage} setLang={handleLangChange} />
      )}
      {page === 'select' && (
        <Select lang={lang} setPage={setPage} onEnter={handleEnterTutor} />
      )}
      {page === 'tutor' && (
        <Tutor lang={lang} setPage={setPage} level={level} subject={subject} />
      )}
      {page === 'auth' && (
        <Auth lang={lang} setPage={setPage} />
      )}
    </div>
  )
}
