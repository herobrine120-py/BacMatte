# BacMatte — React App

منصة ذكاء اصطناعي تعليمية لطلاب البكالوريا بالمغرب.

## 🚀 التشغيل

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:5173`

## 🏗️ البناء للإنتاج

```bash
npm run build
npm run preview
```

## 📁 هيكل المشروع

```
src/
├── App.jsx              # الـ Router الرئيسي + state اللغة
├── main.jsx             # نقطة الدخول
├── index.css            # كل الـ styles
├── i18n.js              # ترجمات AR/FR/EN + بيانات الدروس
├── components/
│   └── Navbar.jsx       # شريط التنقل مع تبديل اللغة
└── pages/
    ├── Landing.jsx      # الصفحة الرئيسية
    ├── Select.jsx       # اختيار المستوى والمادة
    ├── Tutor.jsx        # المساعد الذكي (Sidebar + Chat + Modes)
    └── Auth.jsx         # تسجيل الدخول / إنشاء حساب
```

## 🔌 ربط الـ API

في `src/pages/Tutor.jsx`، ابحث عن دالة `sendMessage` واستبدل الـ mock replies بـ:

```js
const sendMessage = async (text) => {
  if (!text.trim()) return
  setMessages(prev => [...prev, { role: 'user', content: text }])
  setInput('')
  setIsTyping(true)

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: text,
      lesson: activeLesson.ar,
      mode: modeKeys[activeMode],
      lang,
    }),
  })

  const data = await response.json()
  setIsTyping(false)
  setMessages(prev => [...prev, { role: 'ai', content: data.response }])
}
```

## 🌍 اللغات المدعومة

- 🇲🇦 العربية (AR) — RTL
- 🇫🇷 الفرنسية (FR) — LTR  
- 🇬🇧 الإنجليزية (EN) — LTR

## ⚙️ التقنيات

- **React 18** + **Vite**
- CSS محض (بدون Tailwind أو أي library)
- i18n مدمج بدون library خارجية
