import { useContext } from 'react'
import { FetchContext } from './FetchContext'

const useFetch = () => {
  const context = useContext(FetchContext)
  if (context === undefined) {
    throw new Error('useFetch must be used within a FetchProvider')
  }
  return context
}

export default useFetch
