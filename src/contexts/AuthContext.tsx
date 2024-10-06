import REAPI from '@/lib/2REAPI'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { createContext, useState, useEffect, useContext, ReactNode } from 'react'

interface AuthContextType {
  token: string | null
  user: any
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    if (token) {
      fetchUser()
    }
  }, [token])

  const fetchUser = async () => {
    try {
      const response = await REAPI.get('/api/Auth/CheckToken')
      setUser(response.data.result.user || null)
      console.log(response.data.result.user)
    } catch (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('token')
      console.error('Fetching user information failed:', error)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await REAPI.post('/api/Auth/Login', { email, password })
      const AccessToken = response.data.result.accessToken
      setToken(AccessToken)
      localStorage.setItem('token', AccessToken)
      toast.success('Đăng nhập tài khoản thành công')
      navigate(-1)
    } catch (error) {
      toast.error('Đăng nhập thất bại')
      console.error('Login failed:', error)
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
    toast.success('Đăng xuất tài khoản thành công')
    navigate('/')
  }

  return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>
}
