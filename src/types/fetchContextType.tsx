import { dataType } from './data'
import { errorType } from './error'
import { loadingType } from './loading'

export type FetchContextType = {
  data: dataType[] | null
  loading: loadingType
  error: errorType
  getCurrentCity: (id: string | undefined) => void
  currentCity: dataType | null
  postCity: (newCity: dataType) => void
  deleteCity: (id: string) => void
}
