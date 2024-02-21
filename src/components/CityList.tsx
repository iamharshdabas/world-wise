import { Link } from 'react-router-dom'
import { CloseIcon } from '../Icons'
import useFetch from '../context/useFetch'
import NotLoaded from './NotLoaded'

const CityList = () => {
  const { data, loading, error, currentCity, deleteCity } = useFetch()

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    event.preventDefault()
    deleteCity(id)
  }

  if (loading || error) return <NotLoaded />

  return (
    <div className="flex flex-col gap-8">
      {data?.map((child) => (
        <div
          key={child.id}
          className={`${currentCity?.id === child.id && `border border-ctp-lavender`} flex overflow-hidden rounded-xl bg-ctp-mantle`}
        >
          <Link
            className="w-full p-4 text-ctp-lavender hover:bg-ctp-lavender hover:text-ctp-mantle"
            to={`${child.id}?lat=${child.latitude}&lon=${child.longitude}`}
          >
            {child.name}
          </Link>
          <button
            onClick={(event) => handleDelete(event, child.id)}
            className="p-4 text-ctp-red hover:bg-ctp-red hover:text-ctp-crust"
          >
            <CloseIcon height="h-4" width="h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default CityList
