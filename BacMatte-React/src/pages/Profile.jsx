import { useState, useEffect } from 'react'
import { translations } from '../i18n'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../supabase'
import { User, BookOpen, Clock, Settings, LogOut, ChevronLeft, ChevronRight, Sparkles, Activity } from 'lucide-react'

export default function Profile({ lang, setPage }) {
  const t = translations[lang]
  const pt = t.profile || {}
  const { user } = useAuth()
  
  const [level, setLevel] = useState(user?.profile?.level || '2BAC')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const [sessions, setSessions] = useState([])
  const [totalSessions, setTotalSessions] = useState(0)

  useEffect(() => {
    if (user) {
      fetchHistory()
    }
  }, [user])

  const fetchHistory = async () => {
    try {
      // Get recent 5
      const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(5)
      
      if (data) setSessions(data)

      // Get total count
      const { count } = await supabase
        .from('chat_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
      
      if (count !== null) setTotalSessions(count)

    } catch (err) {
      console.error('Error fetching history:', err)
    }
  }

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

  const getPlanBadge = () => {
    const p = user?.profile?.plan
    if (p === 'pro') return 'Pro ⭐️'
    if (p === 'go') return 'Go 🚀'
    if (p === 'ultra') return 'Ultra 💎'
    return 'Free'
  }

  // Formatting date
  const formatDate = (ds) => {
    if (!ds) return ''
    const d = new Date(ds)
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-MA' : 'fr-FR', {
      month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'
    }).format(d)
  }

  const DirArrow = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <div className="dash-page">
      <div className="dash-shell">
        
        {/* Header */}
        <div className="dash-header">
          <div>
            <h1>{pt.title || (lang === 'ar' ? 'لوحة التحكم' : 'Tableau de bord')}</h1>
            <p>{pt.sub || (lang === 'ar' ? 'مرحباً، تابع تفوقك الدراسي من هنا.' : 'Bienvenue, suivez votre activité éducative.')}</p>
          </div>
          <div className="dash-actions">
            <button className="btn btn-outline" onClick={() => setPage('select')}>
              {t.select?.back || (lang === 'ar' ? 'عودة للدروس' : 'Retour aux cours')}
            </button>
          </div>
        </div>

        <div className="dash-grid">
          
          {/* Stats Bar */}
          <div className="dc-stats">
            <div className="stat-item">
              <div className="stat-lbl">{lang === 'ar' ? 'جلسات الدراسة' : 'Sessions d\'étude'}</div>
              <div className="stat-val"><Activity className="stat-icon" size={24} /> {totalSessions}</div>
            </div>
            <div className="stat-item">
              <div className="stat-lbl">{lang === 'ar' ? 'الباقة الحالية' : 'Plan actuel'}</div>
              <div className="stat-val"><Sparkles className="stat-icon" size={24} /> <span style={{ fontSize: '20px' }}>{getPlanBadge()}</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-lbl">{lang === 'ar' ? 'المستوى الدراسي' : 'Niveau'}</div>
              <div className="stat-val"><BookOpen className="stat-icon" size={24} /> {user?.profile?.level || 'BAC'}</div>
            </div>
          </div>

          {/* Recent History */}
          <div className="dash-card dc-history">
            <div className="dash-card-title">
              <Clock size={20} className="text-text2" style={{color: 'var(--text2)'}} />
              {lang === 'ar' ? 'النشاط الأخير' : 'Activité récente'}
            </div>
            
            {sessions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text3)' }}>
                {lang === 'ar' ? 'لم تقم بأي جلسة دراسية بعد. اختر درساً وابدأ الآن!' : 'Aucune session d\'étude pour le moment.'}
                <br/>
                <button className="btn btn-primary" style={{ marginTop: '15px' }} onClick={() => setPage('select')}>
                  {t.hero?.startBtn || (lang === 'ar' ? 'ابدأ الآن' : 'Commencer')}
                </button>
              </div>
            ) : (
              <div className="recent-list">
                {sessions.map(s => (
                  <div key={s.id} className="recent-item" onClick={() => setPage('tutor')} title="ملاحظة: النقر سيوجهك للبوت لمتابعة آخر درس">
                    <div className="ri-info">
                      <div className="ri-title">{s.lesson || (lang === 'ar' ? 'درس غير محدد' : 'Leçon non spécifiée')}</div>
                      <div className="ri-meta">
                        <span className="ri-chip">{s.subject || (lang === 'ar' ? 'مادة' : 'Sujet')}</span>
                        <span>{formatDate(s.updated_at || s.created_at)}</span>
                      </div>
                    </div>
                    <DirArrow size={20} className="ri-arrow" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Settings */}
          <div className="dash-card dc-settings">
            <div className="dash-card-title">
              <Settings size={20} className="text-text2" style={{color: 'var(--text2)'}} />
              {lang === 'ar' ? 'الإعدادات' : 'Paramètres'}
            </div>
            
            <div className="dash-settings-group">
              <div className="form-group">
                <label className="form-label">{lang === 'ar' ? 'الاسم الكامل' : 'Nom complet'}</label>
                <div style={{ padding: '10px 14px', background: 'var(--bg3)', borderRadius: '8px', fontSize: '14px', color: 'var(--text)' }}>
                  {user?.user_metadata?.full_name || 'طالب BAC'}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{pt.level || 'المستوى'}</label>
                <select className="form-input" value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="1BAC">1BAC (السنة الأولى)</option>
                  <option value="2BAC">2BAC (السنة الثانية)</option>
                </select>
              </div>

              {success && (
                <div style={{ color: '#28c840', fontSize: '13px' }}>✅ {lang === 'ar' ? 'تم التحديث بنجاح' : 'Mise à jour réussie'}</div>
              )}

              <button className="btn btn-primary" onClick={handleUpdate} disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                {loading ? '...' : (pt.updateLevel || (lang === 'ar' ? 'تحديث المستوى' : 'Mettre à jour'))}
              </button>

              {(user?.profile?.plan === 'free' || !user?.profile?.plan) && (
                <button className="btn btn-primary" onClick={() => setPage('pricing')} style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, var(--accent), #e05e1b)', border: 'none' }}>
                  <Sparkles size={16} style={{ display: 'inline', marginRight: '6px' }}/> 
                  {lang === 'ar' ? 'ترقية حسابي' : 'Mettre à niveau'}
                </button>
              )}

              <div style={{ borderTop: '1px solid var(--border)', marginTop: '8px', paddingTop: '16px' }}>
                <button className="btn btn-outline dash-btn-logout" onClick={handleSignOut} style={{ justifyContent: 'center' }}>
                  <LogOut size={16} style={{marginRight: lang === 'fr' ? '6px' : '0', marginLeft: lang === 'ar' ? '6px' : '0'}} /> {pt.signOut || (lang === 'ar' ? 'تسجيل الخروج' : 'Déconnexion')}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
