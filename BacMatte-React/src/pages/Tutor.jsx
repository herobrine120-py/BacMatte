import { useState, useRef, useEffect, useCallback } from 'react'
import { translations, LESSONS } from '../i18n'
import { sendChat, checkHealth } from '../api'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

// ─── Sub-components ─────────────────────────────────────────

const preprocessMath = (text) => {
  if (!text) return ''
  return text.replace(/\\\(/g, '$').replace(/\\\)/g, '$').replace(/\\\[/g, '$$$$').replace(/\\\]/g, '$$$$')
}

function TypingIndicator() {
  return (
    <div className="tmsg ai">
      <div className="tmsg-av">✦</div>
      <div className="typing-indicator"><span /><span /><span /></div>
    </div>
  )
}

function Message({ msg }) {
  return (
    <div className={`tmsg ${msg.role}`}>
      <div className="tmsg-av">{msg.role === 'ai' ? '✦' : 'A'}</div>
      <div className="tmsg-bubble markdown-body" dir="auto">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {preprocessMath(msg.content)}
        </ReactMarkdown>
      </div>
    </div>
  )
}

// partial message as it streams in
function StreamingMessage({ content }) {
  return (
    <div className="tmsg ai">
      <div className="tmsg-av">✦</div>
      <div className="tmsg-bubble streaming markdown-body" dir="auto">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {preprocessMath(content)}
        </ReactMarkdown>
      </div>
    </div>
  )
}

// ─── Constants ───────────────────────────────────────────────
const MOCK_HISTORY = [
  { id: 1, title: 'شرح قانون انحفاظ الطاقة', sub: 'Physique · il y a 2h' },
  { id: 2, title: 'تمارين على التكامل', sub: 'Maths · il y a 5h' },
  { id: 3, title: 'الموجات الميكانيكية', sub: 'Physique · Hier' },
  { id: 4, title: 'ملخص درس النواة الذرية', sub: 'Physique · Hier' },
  { id: 5, title: 'حل تمرين الاشتقاق', sub: 'Maths · Lundi' },
]

const TEMPLATES = [
  { ico: '📖', label: 'اشرح لي الدرس', hint: 'Expliquer la leçon', mode: 'explain' },
  { ico: '⚙️', label: 'أعطني تمريناً', hint: 'Exercice BAC', mode: 'generate' },
  { ico: '📝', label: 'لخص القوانين', hint: 'Résumé formules', mode: 'summarize' },
  { ico: '✅', label: 'صحح إجابتي', hint: 'Correction', mode: 'correct' },
]

const MODE_LABELS = {
  explain: 'شرح مفصل', summarize: 'تلخيص', generate: 'تمارين',
  correct: 'تصحيح', evaluate: 'تقييم', chat: 'سؤال حر',
}

// Bug 10 fix: modeKeys outside component so it's not recreated on every render
const MODE_KEYS = ['explain', 'summarize', 'generate', 'correct', 'evaluate']

// ─── Main Component ──────────────────────────────────────────
export default function Tutor({ lang, setPage, level, subject }) {
  const t = translations[lang] || translations['ar']
  const subjectKey = subject?.key || 'phys'
  const lessons = LESSONS[subjectKey] || LESSONS.phys
  const modeKeys = MODE_KEYS  // alias for backward compat

  // Core state
  const [activeLesson, setActiveLesson] = useState(lessons.find(l => l.active) || lessons[0])
  const [activeMode, setActiveMode] = useState(0)
  const [messages, setMessages] = useState([])
  const [streaming, setStreaming] = useState('')   // token accumulator while streaming
  const [isStreaming, setIsStreaming] = useState(false)
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const [activeConvId, setActiveConvId] = useState(null)
  const [backendStatus, setBackendStatus] = useState('checking') // checking | ok | offline
  // Layout state
  const [rightLevel, setRightLevel] = useState(level || '2BAC')
  const [rightSubject, setRightSubject] = useState(subjectKey)
  const [showMobileLeft, setShowMobileLeft] = useState(false)
  const [showMobileRight, setShowMobileRight] = useState(false)

  const chatRef = useRef(null)
  const textareaRef = useRef(null)

  const filteredLessons = lessons.filter(l =>
    l.ar.includes(search) || l.fr.toLowerCase().includes(search.toLowerCase())
  )

  // Check backend health on mount
  useEffect(() => {
    checkHealth().then(res => setBackendStatus(res.status === 'ok' ? 'ok' : 'offline'))
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages, streaming, isStreaming])

  // ── Core: send a message to the RAG API ────────────────────
  const askRAG = useCallback((question, modeOverride) => {
    if (!question.trim()) return
    const mode = modeOverride || modeKeys[activeMode]
    const lessonLabel = `${activeLesson.fr} - ${activeLesson.ar}`
    const subjectLabel = subject?.fr || 'Physique-Chimie'

    setMessages(prev => [...prev, { role: 'user', content: question, id: `u-${Date.now()}` }])
    setStreaming('')
    setIsStreaming(true)

    let accumulated = ''

    sendChat(
      { question, lesson: lessonLabel, subject: subjectLabel, level: rightLevel, mode },
      (token) => {
        accumulated += token
        setStreaming(accumulated)
      },
      () => {
        // Stream done — commit to messages
        setMessages(prev => [...prev, { role: 'ai', content: accumulated, id: `a-${Date.now()}` }])
        setStreaming('')
        setIsStreaming(false)
      },
      (err) => {
        setMessages(prev => [...prev, {
          role: 'ai',
          content: `⚠️ **خطأ في الاتصال**:<br>${err}<br><br>الرجاء التأكد من اتصالك بالإنترنت، أو المحاولة لاحقاً.`,
          id: `err-${Date.now()}`
        }])
        setStreaming('')
        setIsStreaming(false)
      }
    )
  }, [activeMode, activeLesson, subject, rightLevel, modeKeys])

  const sendMessage = (text) => {
    if (isStreaming) return
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
    askRAG(text)
  }

  const switchLesson = (lesson) => {
    if (isStreaming) return
    setActiveLesson(lesson)
    setMessages([])
    const greeting = `تم الانتقال إلى درس: **${lesson.ar}** (${lesson.fr})\n\nاستخدم الأزرار أدناه أو اطرح سؤالك.`
    setTimeout(() => setMessages([{ role: 'ai', content: greeting, id: `switch-${Date.now()}` }]), 50)
  }

  const switchMode = (idx) => {
    setActiveMode(idx)
    askRAG(`${modeKeys[idx]} درس ${activeLesson.ar}`, modeKeys[idx])
  }

  const useTemplate = (tpl) => {
    askRAG(tpl.label + ' — درس ' + activeLesson.ar, tpl.mode)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) }
  }
  const autoResize = (e) => {
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 130) + 'px'
  }

  const lessonName = lang === 'ar' ? activeLesson.ar : activeLesson.fr
  const subjectLabel = lang === 'ar' ? (subject?.name || 'الفيزياء') : (subject?.fr || 'Physique-Chimie')

  return (
    <div className="tutor-layout" onClick={() => { if (showMobileLeft) setShowMobileLeft(false); if (showMobileRight) setShowMobileRight(false) }}>

      {/* Backdrop overlay for mobile */}
      {(showMobileLeft || showMobileRight) && (
        <div className="t-backdrop" onClick={() => { setShowMobileLeft(false); setShowMobileRight(false) }} />
      )}

      {/* ── LEFT SIDEBAR ──────────────────────────── */}
      <div className={`t-sidebar ${showMobileLeft ? 'mobile-open' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="tsb-brand">
          <button className="tsb-logo" onClick={() => setPage('landing')}>Bac<span>Matte</span></button>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {/* Backend status dot */}
            <span title={backendStatus === 'ok' ? 'Backend connected' : backendStatus === 'offline' ? 'Backend offline' : 'Checking...'}
              style={{ width: 8, height: 8, borderRadius: '50%', background: backendStatus === 'ok' ? '#22c55e' : backendStatus === 'offline' ? '#ef4444' : '#f59e0b', display: 'inline-block' }} />
            <button className="tsb-new-chat" title="New chat"
              onClick={() => { setMessages([]); setStreaming(''); setActiveConvId(null) }}>✏️</button>
          </div>
        </div>

        <div className="tsb-search">
          <span className="tsb-search-ico">⌕</span>
          <input type="text" placeholder={t.select?.search || 'بحث...'} value={search} onChange={e => setSearch(e.target.value)} />
          <kbd>K</kbd>
        </div>

        <nav className="tsb-nav">
          <button className="tsb-nav-item active"><span className="tsb-nav-ico">💬</span><span>{lang === 'ar' ? 'المحادثات' : 'AI Chat'}</span></button>
          <button className="tsb-nav-item" onClick={() => setPage('select')}><span className="tsb-nav-ico">📚</span><span>{lang === 'ar' ? 'المواد' : 'Matières'}</span></button>
          <button className="tsb-nav-item"><span className="tsb-nav-ico">📝</span><span>{lang === 'ar' ? 'القوالب' : 'Templates'}</span></button>
          <button className="tsb-nav-item"><span className="tsb-nav-ico">📜</span><span>{lang === 'ar' ? 'وثائقي' : 'Documents'}</span></button>
        </nav>

        <div className="tsb-section-label">{lang === 'ar' ? 'قوالب الدراسة' : 'Modèles d\'étude'}</div>
        <div className="tsb-templates">
          {TEMPLATES.map((tpl, i) => (
            <button key={i} className="tsb-template-btn" onClick={() => useTemplate(tpl)} disabled={isStreaming}>
              <span className="tsb-tpl-ico">{tpl.ico}</span>
              <div><div className="tsb-tpl-label">{tpl.label}</div><div className="tsb-tpl-hint">{tpl.hint}</div></div>
              <span className="tsb-tpl-plus">+</span>
            </button>
          ))}
        </div>

        <div className="tsb-section-label" style={{ marginTop: 12 }}>{lang === 'ar' ? 'المحادثات السابقة' : 'Historique'}</div>
        <div className="tsb-history">
          {MOCK_HISTORY.map(c => (
            <div key={c.id} className={`tsb-conv ${activeConvId === c.id ? 'active' : ''}`} onClick={() => setActiveConvId(c.id)}>
              <div className="tsb-conv-title">{c.title}</div>
              <div className="tsb-conv-sub">{c.sub}</div>
            </div>
          ))}
        </div>

        <div className="tsb-settings-row">
          <button className="tsb-settings-btn">⚙️ {lang === 'ar' ? 'إعدادات' : 'Settings'}</button>
          <button className="tsb-settings-btn">❓ {lang === 'ar' ? 'مساعدة' : 'Help'}</button>
        </div>

        <div className="tsb-footer">
          <div className="user-avatar">A</div>
          <div style={{ flex: 1 }}>
            <div className="user-name">{t.tutor?.userName || 'طالب BAC'}</div>
            <div className="tsb-user-email">student@bacmatte.ma</div>
          </div>
          <span className="user-plan">Pro</span>
        </div>
      </div>

      {/* ── CENTER: MAIN CHAT ────────────────────── */}
      <div className="t-main">
        <div className="t-topbar">
          <button className="t-mobile-toggle" onClick={e => { e.stopPropagation(); setShowMobileLeft(v => !v) }}>☰</button>
          <div className="t-lesson-name">{lessonName}</div>
          <div className="t-modes">
            {modeKeys.map((mk, i) => (
              <button key={i} className={`t-mode-btn ${activeMode === i ? 'active' : ''}`}
                onClick={() => switchMode(i)} disabled={isStreaming}>
                {t.tutor?.modeBtns?.[i] || MODE_LABELS[mk]}
              </button>
            ))}
          </div>
          <button className="t-mobile-toggle" onClick={e => { e.stopPropagation(); setShowMobileRight(v => !v) }}>⋮</button>
        </div>

        {/* Welcome state */}
        {messages.length === 0 && !isStreaming && streaming === '' && (
          <div className="t-welcome">
            <div className="t-welcome-icon">✦</div>
            <h2>{lang === 'ar' ? `مرحباً! درس اليوم: ${activeLesson.ar}` : `Bienvenue! Leçon: ${activeLesson.fr}`}</h2>
            <p>{lang === 'ar' ? 'اختر إجراءً سريعاً أو اكتب سؤالك مباشرة' : 'Choisissez une action rapide ou posez votre question'}</p>
            {backendStatus === 'offline' && (
              <div className="t-offline-banner">
                ⚠️ الخادم غير متصل حالياً. الرجاء المحاولة لاحقاً.
              </div>
            )}
            <div className="t-welcome-cards">
              {TEMPLATES.map((tpl, i) => (
                <button key={i} className="t-welcome-card" onClick={() => useTemplate(tpl)}>
                  <span>{tpl.ico}</span><strong>{tpl.label}</strong><small>{tpl.hint}</small>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat messages */}
        <div className="t-chat" ref={chatRef}>
          {messages.map((msg) => <Message key={msg.id || msg.content.slice(0,20)} msg={msg} />)}
          {isStreaming && streaming === '' && <TypingIndicator />}
          {streaming && <StreamingMessage content={streaming} />}
        </div>

        {/* Quick action chips */}
        <div className="t-quick">
          {t.tutor?.quickBtns?.map((btn, i) => (
            <button key={i} className="quick-btn" onClick={() => sendMessage(btn)} disabled={isStreaming}>{btn}</button>
          ))}
        </div>

        {/* Input bar */}
        <div className="t-inputbar">
          <div style={{ flex: 1 }}>
            <textarea
              ref={textareaRef} className="t-textarea" rows={1}
              placeholder={isStreaming ? (lang === 'ar' ? '...BacMatte يكتب' : 'BacMatte est en train de répondre...') : (t.tutor?.placeholder || 'اطرح سؤالك عن هذا الدرس…')}
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey} onInput={autoResize} disabled={isStreaming}
            />
            <div className="t-inputbar-actions">
              <button className="t-attach-btn" disabled>📎 {lang === 'ar' ? 'مرفق' : 'Attach'}</button>
              <button className="t-prompt-btn" onClick={() => useTemplate(TEMPLATES[0])}>💡 {lang === 'ar' ? 'قوالب' : 'Browse Prompts'}</button>
              <span className="t-charcount">{input.length} / 3,000</span>
            </div>
          </div>
          <button className="t-send-btn" onClick={() => sendMessage(input)} disabled={isStreaming || !input.trim()}>↑</button>
        </div>
      </div>

      {/* ── RIGHT PANEL ─────────────────────────── */}
      <div className={`t-right-panel ${showMobileRight ? 'mobile-open' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="trp-header">
          <span className="trp-title">{lang === 'ar' ? 'سياق الجلسة' : 'Contexte'}</span>
          <span className="trp-count">{filteredLessons.length}</span>
        </div>

        <div className="trp-section">
          <div className="trp-label">{lang === 'ar' ? 'الدرس الحالي' : 'Leçon active'}</div>
          <div className="trp-lesson-card">
            <div className="trp-lesson-name">{lessonName}</div>
            <div className="trp-lesson-fr">{activeLesson.fr}</div>
          </div>
        </div>

        <div className="trp-section">
          <div className="trp-label">{lang === 'ar' ? 'المستوى' : 'Niveau'}</div>
          <div className="trp-level-row">
            {['1BAC', '2BAC'].map(lv => (
              <button key={lv} className={`trp-level-btn ${rightLevel === lv ? 'active' : ''}`} onClick={() => setRightLevel(lv)}>{lv}</button>
            ))}
          </div>
        </div>

        <div className="trp-section">
          <div className="trp-label">{lang === 'ar' ? 'المادة' : 'Matière'}</div>
          <div className="trp-subjects">
            {[
              { key: 'phys', ico: '⚗️', label: 'Physique-Chimie' },
              { key: 'math', ico: '📐', label: 'Mathématiques' },
              { key: 'svt', ico: '🧬', label: 'SVT' },
              { key: 'phil', ico: '🏛️', label: 'Philosophie' },
              { key: 'ar', ico: '📖', label: 'العربية' },
            ].map(s => (
              <button key={s.key} className={`trp-subject-btn ${rightSubject === s.key ? 'active' : ''}`} onClick={() => setRightSubject(s.key)}>
                <span>{s.ico}</span><span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="trp-section" style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="trp-label">{lang === 'ar' ? 'الدروس' : 'Leçons'}</div>
          <div className="trp-lesson-list">
            {filteredLessons.map((l) => (
              <div key={l.ar} className={`trp-lesson-item ${l.ar === activeLesson.ar ? 'active' : ''}`}
                onClick={() => switchLesson(l)}>
                <span className="trp-lesson-num">{l.n}</span>
                <span className="trp-lesson-text">{lang === 'ar' ? l.ar : l.fr}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="trp-new-btn" onClick={() => { setMessages([]); setStreaming(''); setActiveConvId(null) }}>
          ✏️ {lang === 'ar' ? 'محادثة جديدة' : 'Nouvelle discussion'}
        </button>
      </div>
    </div>
  )
}
