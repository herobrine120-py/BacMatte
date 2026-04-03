import { useState } from 'react'
import { translations } from '../i18n'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../supabase'

export default function Profile({ lang, setPage }) {
  const t = translations[lang]
  const pt = t.profile
  const { user } = useAuth()
  
  const [level, setLevel] = useState(user?.profile?.level || '2BAC')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleUpdate = async () => {
    setLoading(true)
    setSuccess(false)
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ level })
        .eq('id', user?.id)
      
      if (!error) {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setPage('landing')
  }

  return (
    <div className="auth-page">
      <div className="auth-shell" style={{ display: 'block', maxWidth: '600px', margin: '0 auto' }}>
        <div className="auth-right">
          <h2>{pt.title}</h2>
          <p>{pt.sub}</p>

          <div style={{ marginTop: '20px', padding: '20px', background: 'var(--bg2)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{user?.user_metadata?.full_name || 'طالب BAC'}</h3>
            <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: '20px' }}>{user?.email}</p>

            <div className="form-group">
              <label className="form-label">{pt.plan}</label>
              <div style={{ display: 'inline-block', padding: '6px 12px', background: 'var(--accent-bg)', color: 'var(--accent)', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
                {user?.profile?.plan === 'pro' ? 'Pro ⭐️' : user?.profile?.plan === 'go' ? 'Go 🚀' : user?.profile?.plan === 'ultra' ? 'Ultra 💎' : 'Free'}
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">{pt.level}</label>
              <select className="form-input" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="1BAC">1BAC (السنة الأولى)</option>
                <option value="2BAC">2BAC (السنة الثانية)</option>
              </select>
            </div>

            {success && (
              <div style={{ color: '#28c840', fontSize: '13px', marginBottom: '10px' }}>✅ تم التحديث بنجاح</div>
            )}

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button className="btn btn-primary" onClick={handleUpdate} disabled={loading}>
                {loading ? '...' : pt.updateLevel}
              </button>
            </div>
          </div>

          <div style={{ marginTop: '30px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <button className="btn btn-outline" onClick={handleSignOut} style={{ color: 'var(--red)', borderColor: 'var(--red-light)' }}>
              {pt.signOut}
            </button>
          </div>

          <div className="sel-back" style={{ marginTop: '30px' }}>
            <button onClick={() => setPage('landing')}>{t.select.back}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
