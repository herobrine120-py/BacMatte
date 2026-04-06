import { useState } from 'react'
import { translations } from '../i18n'
import { useAuth } from '../context/AuthContext'

export default function Landing({ lang, setPage, setLang }) {
  const t = translations[lang]
  const { user } = useAuth()
  const [activeMode, setActiveMode] = useState(0)

  return (
    <div className="landing">

      {/* ── HERO ── */}
      <section className="l-hero">
        <div className="l-hero-content">
          <div className="hero-badge">{t.hero.badge}</div>
          <h1 className="l-hero-title">
            {t.hero.title1}<br />
            {t.hero.title2}<em>{t.hero.titleAccent}</em>
          </h1>
          <p className="l-hero-sub">{t.hero.sub}</p>
          <div className="l-hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => setPage(user ? 'select' : 'auth')}>
              {t.hero.cta1}
            </button>
            <button className="btn btn-ghost" onClick={() => setPage('select')}>
              {t.hero.cta2}
            </button>
          </div>
          <div className="l-hero-social">
            <div className="l-avatars">
              <div className="l-av" style={{ background: '#6366f1' }}>م</div>
              <div className="l-av" style={{ background: '#ec4899' }}>ف</div>
              <div className="l-av" style={{ background: '#14b8a6' }}>ع</div>
            </div>
            <span>{lang === 'ar' ? '+5,000 طالب ليستخدمونا هذه السنة' : '+5 000 étudiants nous font confiance'}</span>
          </div>
        </div>

        <div className="l-hero-mockup">
          <div className="mockup">
            <div className="mockup-bar">
              <div className="mk-dots"><span className="d-r" /><span className="d-y" /><span className="d-g" /></div>
              <div className="mk-url">bacmatte.ma/tutor</div>
            </div>
            <div className="mockup-body">
              <div className="mk-sb">
                <div className="mk-sb-title">{t.mockup.lessons}</div>
                {t.mockItems.map((item, i) => (
                  <div key={i} className={`mk-item ${i === 1 ? 'active' : ''}`}>{item}</div>
                ))}
              </div>
              <div className="mk-chat">
                <div className="mk-modes">
                  {t.modes.map((m, i) => (
                    <div key={i} className={`mk-mode ${i === 0 ? 'active' : ''}`}>{m}</div>
                  ))}
                </div>
                <div className="mk-msg ai">
                  <span className="mk-trm">Énergie cinétique</span> : <span className="mk-f">Ec = ½mv²</span>
                  &nbsp;·&nbsp;
                  <span className="mk-trm">Énergie potentielle</span> : <span className="mk-f">Ep = mgh</span>
                </div>
                <div className="mk-msg user">
                  {lang === 'ar' ? 'اشرح قانون انحفاظ الطاقة' : "Explique la conservation de l'énergie"}
                </div>
                <div className="mk-msg ai" style={{ opacity: .5 }}>{t.mockup.typing}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="l-section" id="features">
        <div className="l-section-header">
          <div className="sec-tag">{t.secTags.why}</div>
          <h2 className="sec-h">{t.secH.why[0]}<em>{t.secH.why[1]}</em></h2>
          <p className="l-section-sub">
            {lang === 'ar'
              ? 'كل ما تحتاجه لاجتياز البكالوريا بنجاح، في واجهة واحدة ذكية ومتكاملة.'
              : "Tout ce dont vous avez besoin pour réussir au Baccalauréat National, dans une interface fluide et intelligente."}
          </p>
        </div>

        <div className="l-features-grid">
          {/* Feature card 1 - wide */}
          <div className="l-feat-card l-feat-wide">
            <div className="l-feat-icon-box"><span>🤖</span></div>
            <h3>{t.features[0].title}</h3>
            <p>{t.features[0].desc}</p>
            <ul className="l-feat-checks">
              <li>{lang === 'ar' ? '✦ تقنية RAG' : '✦ Technologie RAG'}</li>
              <li>{lang === 'ar' ? '✦ منهج مغربي رسمي' : '✦ Programme officiel'}</li>
              <li>{lang === 'ar' ? '✦ إجابات دقيقة' : '✦ Réponses précises'}</li>
            </ul>
          </div>

          {/* Feature card 2 - compact */}
          <div className="l-feat-card">
            <div className="l-feat-icon-box accent"><span>🇲🇦</span></div>
            <h3>{lang === 'ar' ? 'بكالوريا مغربية' : 'Bac Marocain Pur'}</h3>
            <p>{lang === 'ar' ? 'محتوى مبني حصريا على الإمتحانات الوطنية: BAC, PC, SVT وأكثر.' : 'Contenu basé sur les examens nationaux: BAC, PC, SVT et plus.'}</p>
            <ul className="l-feat-checks">
              <li>{lang === 'ar' ? '✦ امتحانات وطنية' : '✦ Examens Nationaux'}</li>
              <li>{lang === 'ar' ? '✦ التصحيح الرسمي' : '✦ Corrigés Officiels'}</li>
              <li>{lang === 'ar' ? '✦ نتائج مبهرة' : '✦ Résultats probants'}</li>
            </ul>
          </div>

          {/* Feature card 3 - compact */}
          <div className="l-feat-card">
            <div className="l-feat-icon-box"><span>✏️</span></div>
            <h3>{t.features[1].title}</h3>
            <p>{t.features[1].desc}</p>
            <button className="l-feat-link" onClick={() => setPage('select')}>
              {lang === 'ar' ? 'جرّب التصحيح ←' : "S'entraîner maintenant →"}
            </button>
          </div>

          {/* Feature card 4 - highlight center */}
          <div className="l-feat-card l-feat-highlight">
            <h3>{lang === 'ar' ? 'التركيز على التميز' : "Focus sur l'Excellence"}</h3>
            <p>{lang === 'ar' ? 'نظامنا مصمم للتركيز على "العمل العميق" والتميز الأكاديمي.' : 'Notre système est conçu pour favoriser le "Deep Work" et la réussite du long terme.'}</p>
            <div className="l-feat-pills">
              <span className="l-pill">{lang === 'ar' ? '📚 شرح مفصل' : '📚 Explications'}</span>
              <span className="l-pill">{lang === 'ar' ? '📊 تقييم ذكي' : '📊 Évaluation'}</span>
              <span className="l-pill">{lang === 'ar' ? '✍️ تمارين' : '✍️ Exercices'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="l-section l-pricing-section" id="pricing">
        <div className="l-section-header">
          <div className="sec-tag">{t.secTags.pricing}</div>
          <h2 className="sec-h">{t.secH.pricing[0]}<em>{t.secH.pricing[1]}</em></h2>
        </div>

        <div className="l-pricing-row">
          {/* Free */}
          <div className="l-price-card">
            <div className="l-price-tier">{t.pricingPage.free.tier}</div>
            <div className="l-price-amount">0 <sup>DH</sup></div>
            <div className="l-price-per">{t.pricingPage.free.per}</div>
            <ul className="price-list">
              {t.pricingPage.free.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setPage('auth')}>
              {t.pricingPage.free.cta}
            </button>
          </div>

          {/* Pro - featured */}
          <div className="l-price-card l-price-featured">
            <div className="l-price-popular-badge">{t.pricingPage.pro.badge}</div>
            <div className="l-price-tier">{t.pricingPage.pro.tier}</div>
            <div className="l-price-amount">75 <sup>DH</sup></div>
            <div className="l-price-sub">{lang === 'ar' ? 'فاتورة شهرية (750DH/السنة)' : 'Facturation mensuelle (750DH/an)'}</div>
            <ul className="price-list">
              {t.pricingPage.pro.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => alert(lang === 'ar' ? 'طرق الدفع ستتوفر قريباً!' : 'Bientôt disponible!')}>
              {lang === 'ar' ? 'اشترك في Pro' : "Accéder à l'Excellence"}
            </button>
          </div>

          {/* Ultra */}
          <div className="l-price-card">
            <div className="l-price-tier">{lang === 'ar' ? 'مؤسسات' : 'Établissement'}</div>
            <div className="l-price-amount" style={{ fontSize: '26px', fontWeight: 700 }}>
              {lang === 'ar' ? 'حسب الطلب' : 'Sur devis'}
            </div>
            <div className="l-price-per">&nbsp;</div>
            <ul className="price-list">
              {t.pricingPage.ultra.items.slice(0, 3).map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setPage('contact')}>
              {lang === 'ar' ? 'تواصل معنا' : 'Contactez l\'équipe'}
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button className="l-feat-link" onClick={() => setPage('pricing')} style={{ fontSize: '14px' }}>
            {lang === 'ar' ? '← جميع باقات الأسعار' : 'Voir toutes les offres →'}
          </button>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="l-cta-banner">
        <h2>{lang === 'ar' ? 'مستعد لتحصل على الباكالوريا بميزة؟' : 'Prêt à décrocher votre Bac avec mention ?'}</h2>
        <p>{lang === 'ar'
          ? 'انضم إلينا الآن وابدأ باستخدام الذكاء الاصطناعي لتحقيق النجاح.'
          : "Rejoignez la nouvelle génération d'étudiants qui utilisent l'Intelligence artificielle pour réussir l'examen."}</p>
        <button className="btn l-cta-btn" onClick={() => setPage(user ? 'select' : 'auth')}>
          {lang === 'ar' ? 'سجّل مجاناً' : 'Inscrivez-vous gratuitement'}
        </button>
      </section>

      {/* ── Footer ── */}
      <footer className="l-footer">
        <div className="l-footer-top">
          <div>
            <div className="l-footer-logo">Bac<span>Matte</span></div>
            <p className="l-footer-desc">
              {lang === 'ar'
                ? 'المنصة التعليمية الأولى للطلاب المغاربة، المبنية على الذكاء الاصطناعي وفق المنهج الرسمي.'
                : "La plateforme éducative de référence pour les lycéens marocains, propulsée par l'IA et le programme officiel."}
            </p>
          </div>
          <div className="l-footer-links">
            <div>
              <h4>{lang === 'ar' ? 'المنتج' : 'Produit'}</h4>
              <button onClick={() => setPage('select')}>{lang === 'ar' ? 'المساعد' : 'Assistant'}</button>
              <button onClick={() => setPage('pricing')}>{t.nav.pricing}</button>
            </div>
            <div>
              <h4>{lang === 'ar' ? 'قانوني' : 'Légal'}</h4>
              <button onClick={() => setPage('contact')}>{t.nav.contact}</button>
            </div>
          </div>
        </div>
        <div className="l-footer-bottom">
          <span>© 2025 BacMatte — {t.footer}</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['ar', 'fr'].map(l => (
              <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
