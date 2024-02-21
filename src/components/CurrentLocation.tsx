import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CurrentLocation = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const getLocation = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (location) => {
        navigate(
          `form?lat=${location.coords.latitude}&lon=${location.coords.longitude}`
        )
        setLoading(false)
      },
      () => {
        alert('Error getting location')
        setLoading(false)
      }
    )
  }

  return (
    <button
      onClick={getLocation}
      className="fixed bottom-8 left-8 rounded-full bg-ctp-base px-4 py-2 text-ctp-lavender hover:bg-ctp-lavender hover:text-ctp-base"
    >
      {loading ? 'Loading...' : 'Current location'}
    </button>
  )
}

export default CurrentLocation
