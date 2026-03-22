// Centralized API client for BacMatte RAG backend
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
console.log("BacMatte API running at:", BASE_URL);

/**
 * sendChat — streams an AI response token by token.
 * @param {object} payload - { question, lesson, subject, level, mode }
 * @param {function} onToken - called with each text chunk
 * @param {function} onDone  - called when stream ends
 * @param {function} onError - called on network/api error
 */
export async function sendChat(payload, onToken, onDone, onError) {
  try {
    const res = await fetch(`${BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.text()
      onError?.(err)
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const lines = decoder.decode(value).split('\n')
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6)
        if (data === '[DONE]') {
          onDone?.()
          return
        }
        try {
          const parsed = JSON.parse(data)
          if (parsed.token) onToken(parsed.token)
          if (parsed.error) onError?.(parsed.error)
        } catch {
          // ignore malformed lines
        }
      }
    }
    onDone?.()
  } catch (err) {
    onError?.(err.message)
  }
}

/** Health check */
export async function checkHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`)
    return await res.json()
  } catch {
    return { status: 'offline' }
  }
}
