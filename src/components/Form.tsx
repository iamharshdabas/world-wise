import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import BackButton from './BackButton'
import useFetch from '../context/useFetch'
import NotLoaded from './NotLoaded'

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

const Form = () => {
  const [searchParams] = useSearchParams()
  const paramsLat = searchParams.get('lat')
  const paramsLon = searchParams.get('lon')

  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const { data, loading, error, postCity } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!paramsLat && !paramsLon) return

    const fetchCity = async () => {
      const response = await fetch(
        `${BASE_URL}?latitude=${paramsLat}&longitude=${paramsLon}`
      )
      const api = await response.json()
      setCity(api.city)
      setCountry(api.countryName)
      setDate(new Date().toISOString().split('T')[0])
    }

    fetchCity()
  }, [paramsLat, paramsLon])

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }
  const handleCountryCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }
  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!paramsLat || !paramsLon) return

    let alreadyExists = false
    data?.map((child) => {
      if (city === child.name) {
        alreadyExists = true
        alert('City already exists')
      }
    })

    if (alreadyExists) return

    postCity({
      id: crypto.randomUUID(),
      name: city,
      country,
      latitude: Number(paramsLat),
      longitude: Number(paramsLon),
      note,
      date,
    })

    navigate('/map/cities')
  }

  if (!paramsLat && !paramsLon)
    return (
      <h1 className="text-xl text-ctp-red">
        State by clicking somewhere on the map
      </h1>
    )

  if (loading || error) return <NotLoaded />

  return (
    <form className="relative h-full" onSubmit={handleSubmit}>
      <div className="flex h-full flex-col">
        <div className="flex w-full flex-col sm:flex-row sm:gap-4">
          <div className="w-full">
            <label htmlFor="city" className="block p-2 text-ctp-text">
              City Name
            </label>
            <input
              id="city"
              className="w-full rounded-xl bg-ctp-surface0 p-2 text-ctp-text"
              onChange={handleCityChange}
              value={city}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="country" className="block p-2 text-ctp-text">
              Country Name
            </label>
            <input
              id="country"
              className="w-full rounded-xl bg-ctp-surface0 p-2 text-ctp-text"
              onChange={handleCountryCHange}
              value={country}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="date" className="block p-2 text-ctp-text">
            Date
          </label>
          <input
            id="date"
            className="w-full rounded-xl bg-ctp-surface0 p-2 text-ctp-text"
            onChange={handleDateChange}
            type="date"
            value={date}
            required
          />
        </div>

        <textarea
          placeholder="How was your trip..."
          className="my-8 h-[90%] w-full rounded-xl bg-ctp-surface0 p-2 text-ctp-text"
          onChange={handleNoteChange}
          value={note}
          required
        ></textarea>

        <div className="flex justify-between">
          <BackButton />
          <button
            disabled={loading}
            className="rounded-full border border-ctp-text bg-ctp-lavender px-4 py-2 uppercase text-ctp-crust"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
