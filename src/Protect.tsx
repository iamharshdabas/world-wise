import { ReactNode, useEffect } from 'react'
import useAuth from './context/useAuth'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const Protect = ({ children }: Props) => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/auth', { replace: true })
  })

  return isAuthenticated && <>{children}</>
}

export default Protect
