import { useContext } from 'react'
import { FAKE_USER } from '../FakeUser'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    logout()
    navigate('/')
  }

  return (
    <div className="flex items-center gap-4">
      <span className="hidden text-ctp-lavender sm:inline">
        Welcome, {FAKE_USER.name}
      </span>
      <button
        className="rounded-full border border-ctp-lavender bg-ctp-crust px-4 text-ctp-text hover:bg-ctp-lavender hover:text-ctp-crust"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default User
