import { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/AuthContext'
import { FAKE_USER } from '../FakeUser'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const { login, isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/map', { replace: true })
  }, [isAuthenticated, navigate])

  const email = FAKE_USER.email
  const password = FAKE_USER.password

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(email, password)
  }

  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center justify-center bg-ctp-crust">
        <form
          onSubmit={handleLogin}
          className="rounded-2xl bg-ctp-base p-8 shadow-xl"
        >
          <div className="flex flex-col py-2">
            <label htmlFor="email" className="p-2 text-ctp-text sm:text-xl">
              Email
            </label>
            <input
              disabled
              id="email"
              type="email"
              value={email}
              className="rounded-xl bg-ctp-crust p-4 text-ctp-text sm:text-xl"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password" className="p-2 text-ctp-text sm:text-xl">
              Password
            </label>
            <input
              disabled
              id="password"
              type="password"
              value={password}
              className="rounded-xl bg-ctp-crust p-4 text-ctp-text sm:text-xl"
            />
          </div>
          <button className="my-4 rounded-full border border-ctp-lavender bg-ctp-mantle px-4 py-2 text-ctp-lavender hover:bg-ctp-lavender hover:text-ctp-crust">
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Auth
