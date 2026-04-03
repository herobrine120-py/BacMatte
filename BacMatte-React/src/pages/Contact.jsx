import { useState } from 'react'
import { translations } from '../i18n'
import { supabase } from '../supabase'

export default function Contact({ lang, setPage }) {
  const t = translations[lang]
  const ct = t.contact
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !message) return
    
    setLoading(true)
    setErrorMsg('')
    setSuccess('')

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ name, email, message }])
        
      if (error) throw error
      
      setSuccess(ct.success)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setErrorMsg(ct.error)
    }
    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-shell" style={{ display: 'block', maxWidth: '600px', margin: '0 auto' }}>
        <div className="auth-right">
          <h2>{ct.title}</h2>
          <p>{ct.sub}</p>

          {success && (
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '10px 14px', borderRadius: '8px', fontSize: '14px', marginBottom: '16px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
              ✅ {success}
            </div>
          )}

          {errorMsg && (
            <div style={{ background: 'var(--red-light)', color: 'var(--red)', padding: '10px 14px', borderRadius: '8px', fontSize: '14px', marginBottom: '16px', border: '1px solid rgba(220, 53, 69, 0.2)' }}>
              ⚠️ {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{ct.name}</label>
              <input className="form-input" type="text" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            
            <div className="form-group">
              <label className="form-label">{ct.email}</label>
              <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            
            <div className="form-group">
              <label className="form-label">{ct.message}</label>
              <textarea className="form-input" rows="5" value={message} onChange={e => setMessage(e.target.value)} required style={{ resize: 'vertical' }} />
            </div>

            <button type="submit" className="auth-submit btn-primary" disabled={loading} style={{ opacity: loading ? 0.6 : 1 }}>
              {loading ? '...' : ct.submit}
            </button>
          </form>

          <div className="sel-back" style={{ marginTop: '30px' }}>
            <button type="button" onClick={() => setPage('landing')}>{t.select.back}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
