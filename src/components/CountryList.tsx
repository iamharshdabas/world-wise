import useFetch from '../context/useFetch'
import NotLoaded from './NotLoaded'

const CountryList = () => {
  const { data, loading, error } = useFetch()

  if (loading || error) return <NotLoaded />

  const countries = data?.reduce((acc, city) => {
    if (!acc[city.country]) {
      acc[city.country] = {
        id: city.id,
        country: city.country,
      }
    }
    return acc
  }, {})

  const countriesArray = Object.values(
    countries as {
      [key: string]: {
        id: string
        country: string
      }
    }
  )

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
      {countriesArray.map((child) => (
        <div
          className="rounded-xl bg-ctp-mantle p-4 text-ctp-text hover:bg-ctp-base sm:p-6 md:p-8"
          key={child.id}
        >
          {child.country}
        </div>
      ))}
    </div>
  )
}

export default CountryList
