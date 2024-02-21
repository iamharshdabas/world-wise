import { ReactNode, createContext, useReducer } from 'react'
import { userType } from '../types/user'
import { FAKE_USER } from '../FakeUser'

const AuthContext = createContext({})

type AuthProviderProps = {
  children: ReactNode
}

type initialStateType = {
  isAuthenticated: boolean
  user: userType | null
}

const initialState: initialStateType = {
  isAuthenticated: false,
  user: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload }

    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null }

    default:
      return new Error('Action not found')
  }
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const login = (email: string, password: string) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'LOGIN', payload: FAKE_USER })
    } else {
      alert('Invalid credentials')
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
