// Centralized API client for BacMatte RAG backend
export const BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? 'https://bacmatte.onrender.com' : 'http://localhost:8000')

/**
 * sendChat — streams an AI response token by token.
 * @param {object} payload - { question, lesson, subject, level, mode }
 * @param {function} onToken - called with each text chunk
 * @param {function} onDone  - called when stream ends
 * @param {function} onError - called on network/api error
 * @param {AbortSignal} signal - signal to cancel request
 */
export async function sendChat(payload, onToken, onDone, onError, signal) {
  try {
    const res = await fetch(`${BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal,
    })

    if (!res.ok) {
      const err = await res.text()
      onError?.(err)
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      
      if (value) {
        buffer += decoder.decode(value, { stream: true })
      }
      
      if (done) {
        // flush any remaining buffer
        buffer += decoder.decode()
      }

      const lines = buffer.split('\n')
      // The last line might be incomplete, keep it in the buffer
      buffer = lines.pop()

      for (const line of lines) {
        if (!line.trim() || !line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        
        if (data === '[DONE]') {
          onDone?.()
          return
        }
        try {
          const parsed = JSON.parse(data)
          if (parsed.token) onToken(parsed.token)
          if (parsed.error) onError?.(parsed.error)
        } catch (e) {
          // ignore malformed lines during parsing, it might be corrupted data
          console.warn("Failed to parse SSE line", line, e)
        }
      }
      
      if (done) break
    }
    onDone?.()
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Chat request aborted')
      return // Don't trigger onError for intentional aborts
    }
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
