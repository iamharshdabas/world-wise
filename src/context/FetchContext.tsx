// NOTE: i dont have api thats why its hardcoded
import { ReactNode, createContext, useState } from 'react'
import { FetchContextType } from '../types/fetchContextType'
import { dataType } from '../types/data'

const FetchContext = createContext<FetchContextType>({} as FetchContextType)

type FetchProviderProps = {
  children: ReactNode
}

const FetchProvider = ({ children }: FetchProviderProps) => {
  const [data, setData] = useState<dataType[]>([
    {
      id: 'a1b2c3',
      name: 'New York',
      country: 'United States',
      latitude: 40.7128,
      longitude: -74.006,
      note: 'NYC: Pizza in Brooklyn, Times Square mesmerizing. Each moment, a lasting impression.',
      date: '2019-06-12',
    },
    {
      id: 'd4e5f6',
      name: 'London',
      country: 'United Kingdom',
      latitude: 51.5074,
      longitude: -0.1278,
      note: 'London: Wandering history to modernity. Tower of London to Camden, every corner a story.',
      date: '2005-09-05',
    },
    {
      id: 'g7h8i9',
      name: 'Tokyo',
      country: 'Japan',
      latitude: 35.6895,
      longitude: 139.6917,
      note: 'Tokyo: Energy infectious. Harajuku, Akihabara exploration, Tsukiji Market sushi, an immersive adventure.',
      date: '2013-03-20',
    },
    {
      id: 'j1k2l3',
      name: 'Sydney',
      country: 'Australia',
      latitude: -33.8688,
      longitude: 151.2093,
      note: 'Sydney: Coastal walk, vibrant Circular Quay scenes. Every moment, a celebration.',
      date: '2018-10-10',
    },
    {
      id: 'm4n5o6',
      name: 'Dubai',
      country: 'United Arab Emirates',
      latitude: 25.276987,
      longitude: 55.296249,
      note: 'Dubai: Skyline, Burj Khalifa summit, vibrant souks, vast desert. A kaleidoscopic view.',
      date: '2021-05-18',
    },
    {
      id: 'p7q8r9',
      name: 'Paris',
      country: 'France',
      latitude: 48.8566,
      longitude: 2.3522,
      note: 'Paris: Louvre, Seine stroll, croissant in a boulangerie. Unforgettable Parisian experience.',
      date: '2015-02-14',
    },
    {
      id: 's1t2u3',
      name: 'Cape Town',
      country: 'South Africa',
      latitude: -33.918861,
      longitude: 18.4233,
      note: 'Cape Town: Beauty unfolded. Table Mountain top, vibrant waterfront. Breathtaking views, warm hospitality.',
      date: '2008-07-07',
    },
    {
      id: 'v4w5x6',
      name: 'Rio de Janeiro',
      country: 'Brazil',
      latitude: -22.9068,
      longitude: -43.1729,
      note: 'Rio: Contagious energy. Carnival parades, Jardim Botânico landscapes, unforgettable Brazilian barbecue warmth.',
      date: '2003-11-02',
    },
    {
      id: 'y7z8a9',
      name: 'Bangkok',
      country: 'Thailand',
      latitude: 13.7563,
      longitude: 100.5018,
      note: 'Bangkok: Grand Palace, street food indulgence, traditional Thai dance performances. Lasting memories.',
      date: '2019-04-30',
    },
    {
      id: 'b1c2d3',
      name: 'Barcelona',
      country: 'Spain',
      latitude: 41.3851,
      longitude: 2.1734,
      note: 'Barcelona: Visual delight. Sagrada Familia marvel, La Rambla tapas indulgence. Every moment, a layered adventure.',
      date: '2017-08-25',
    },
  ])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [currentCity, setCurrentCity] = useState<dataType | null>(null)

  const getCurrentCity = async (id: string | undefined) => {
    try {
      setLoading(true)
      setError(false)
      const city = data.find((city) => city.id === id)
      setCurrentCity(city || null)
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
      setData([...data, newCity])
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
      setData(data.filter((city) => city.id !== id))
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

// import { ReactNode, createContext, useEffect, useState } from 'react'
// import { FetchContextType } from '../types/fetchContextType'
// import { dataType } from '../types/data'
//
// const FetchContext = createContext<FetchContextType>({} as FetchContextType)
// const CITIES_URL = 'http://localhost:3000/cities'
//
// type FetchProviderProps = {
//   children: ReactNode
// }
//
// const FetchProvider = ({ children }: FetchProviderProps) => {
//   const [data, setData] = useState<dataType[]>([])
//   const [loading, setLoading] = useState<boolean>(true)
//   const [error, setError] = useState<boolean>(false)
//   const [currentCity, setCurrentCity] = useState<dataType | null>(null)
//
//   useEffect(() => {
//     const fetchCities = async (url: string) => {
//       try {
//         setLoading(true)
//         setError(false)
//         const response = await fetch(url)
//         const api = await response.json()
//         setData(api)
//       } catch (error) {
//         setError(true)
//       } finally {
//         setLoading(false)
//       }
//     }
//
//     fetchCities(CITIES_URL)
//   }, [])
//
//   const getCurrentCity = async (id: string | undefined) => {
//     try {
//       setLoading(true)
//       setError(false)
//       const response = await fetch(`${CITIES_URL}/${id}`)
//       const api = await response.json()
//       setCurrentCity(api)
//     } catch (error) {
//       setError(true)
//     } finally {
//       setLoading(false)
//     }
//   }
//
//   const postCity = async (newCity: dataType) => {
//     try {
//       setLoading(true)
//       setError(false)
//       const response = await fetch(`${CITIES_URL}`, {
//         method: 'POST',
//         body: JSON.stringify(newCity),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       const api = await response.json()
//       setData((data) => [...data, api])
//     } catch (error) {
//       setError(true)
//     } finally {
//       setLoading(false)
//     }
//   }
//
//   const deleteCity = async (id: string) => {
//     try {
//       setLoading(true)
//       setError(false)
//       await fetch(`${CITIES_URL}/${id}`, {
//         method: 'DELETE',
//       })
//       setData((data) => data.filter((child) => child.id !== id))
//     } catch (error) {
//       setError(true)
//     } finally {
//       setLoading(false)
//     }
//   }
//
//   return (
//     <FetchContext.Provider
//       value={{
//         data,
//         loading,
//         error,
//         getCurrentCity,
//         currentCity,
//         postCity,
//         deleteCity,
//       }}
//     >
//       {children}
//     </FetchContext.Provider>
//   )
// }
//
// export { FetchContext, FetchProvider }
