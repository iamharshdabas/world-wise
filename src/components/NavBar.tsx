import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import User from './User'

type Props = {
  bg?: boolean
}

const NavBar = ({ bg }: Props) => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <nav
      className={`${bg && `bg-ctp-mantle`} fixed z-50 flex w-full justify-between p-8`}
    >
      <div>
        <Link
          to="/"
          className="text-ls font-extrabold uppercase tracking-[4px] text-ctp-text sm:text-xl"
        >
          world wise
        </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <User />
        ) : (
          <NavLink className="px-4 py-1 text-ctp-lavender" to="/auth">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default NavBar
