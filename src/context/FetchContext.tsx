import { ReactNode, createContext, useEffect, useState } from 'react'
import { FetchContextType } from '../types/fetchContextType'
import { dataType } from '../types/data'

const FetchContext = createContext<FetchContextType>({} as FetchContextType)
const CITIES_URL = 'http://localhost:3000/cities'

type FetchProviderProps = {
  children: ReactNode
}

const FetchProvider = ({ children }: FetchProviderProps) => {
  const [data, setData] = useState<dataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [currentCity, setCurrentCity] = useState<dataType | null>(null)

  useEffect(() => {
    const fetchCities = async (url: string) => {
      try {
        setLoading(true)
        setError(false)
        const response = await fetch(url)
        const api = await response.json()
        setData(api)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCities(CITIES_URL)
  }, [])

  const getCurrentCity = async (id: string | undefined) => {
    try {
      setLoading(true)
      setError(false)
      const response = await fetch(`${CITIES_URL}/${id}`)
      const api = await response.json()
      setCurrentCity(api)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const postCity = async (newCity: dataType) => {
    try {
      setLoading(true)
      setError(false)
      const response = await fetch(`${CITIES_URL}`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const api = await response.json()
      setData((data) => [...data, api])
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const deleteCity = async (id: string) => {
    try {
      setLoading(true)
      setError(false)
      await fetch(`${CITIES_URL}/${id}`, {
        method: 'DELETE',
      })
      setData((data) => data.filter((child) => child.id !== id))
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FetchContext.Provider
      value={{
        data,
        loading,
        error,
        getCurrentCity,
        currentCity,
        postCity,
        deleteCity,
      }}
    >
      {children}
    </FetchContext.Provider>
  )
}

export { FetchContext, FetchProvider }
