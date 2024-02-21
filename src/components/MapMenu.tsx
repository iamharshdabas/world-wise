import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CloseIcon, OpenIcon } from '../Icons'

const MapMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="absolute right-8 top-28 z-10">
        <button
          className={`${menuOpen ? `text-ctp-red hover:bg-ctp-red` : `text-ctp-lavender hover:bg-ctp-lavender`} rounded-full bg-ctp-base p-2 shadow-2xl hover:text-ctp-base`}
          onClick={handleClick}
        >
          {menuOpen ? (
            <CloseIcon height="h-8" width="h-8" />
          ) : (
            <OpenIcon height="h-8" width="h-8" />
          )}
        </button>
      </div>

      <div className="absolute right-0 top-0">
        {menuOpen && (
          <div className="h-screen w-screen bg-ctp-mantle py-28 md:w-[540px] md:rounded-l-3xl">
            <div className="pl-8 pr-28">
              <div className="flex h-12 rounded-full bg-ctp-crust">
                <NavLink
                  to="cities"
                  className="flex h-full w-full items-center justify-center p-2 text-ctp-lavender"
                >
                  City
                </NavLink>
                <NavLink
                  to="countries"
                  className="flex h-full w-full items-center justify-center p-2 text-ctp-lavender"
                >
                  Country
                </NavLink>
              </div>
            </div>
            <div className="m-8 h-full overflow-scroll rounded-3xl bg-ctp-crust p-8">
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MapMenu
