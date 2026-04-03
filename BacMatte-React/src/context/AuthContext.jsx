import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Get initial active session if it exists on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      fetchUserProfile(session?.user ?? null)
    })

    // 2. Listen to all auth events (login, logout, token refresh, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      fetchUserProfile(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const fetchUserProfile = async (authUser) => {
    if (!authUser) {
      setUser(null)
      setLoading(false)
      return
    }
    const { data } = await supabase.from('profiles').select('level, plan, full_name').eq('id', authUser.id).single()
    setUser({ ...authUser, profile: data || {} })
    setLoading(false)
  }

  const value = {
    user,
    loading,
    signOut: () => supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// Hook to simply get user anywhere in the app
export function useAuth() {
  return useContext(AuthContext)
}
