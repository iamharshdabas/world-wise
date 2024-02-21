import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../context/useFetch'
import BackButton from './BackButton'
import NotLoaded from './NotLoaded'

const formatDate = (originalDate: string | Date | undefined) => {
  if (!originalDate) {
    return ''
  }

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }

  const formattedDate = new Date(originalDate).toLocaleDateString(
    'en-US',
    options
  )
  return formattedDate
}

const City = () => {
  const { id } = useParams()
  const { getCurrentCity, currentCity, loading, error } = useFetch()

  useEffect(() => {
    getCurrentCity(id)
  }, [id])

  if (loading || error) return <NotLoaded />

  const formattedDate = formatDate(currentCity?.date)

  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <h1 className="flex flex-col text-xl text-ctp-text">
          <span className="font-bold text-ctp-lavender">
            {currentCity?.name}
          </span>
          <span>{currentCity?.country}</span>
        </h1>
        <BackButton />
      </div>
      <h3 className="py-4 text-lg text-ctp-text">{formattedDate}</h3>
      <p className="text-lg tracking-wider text-ctp-text">
        {currentCity?.note}
      </p>
    </div>
  )
}

export default City
