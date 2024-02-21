import useFetch from '../context/useFetch'

const NotLoaded = () => {
  const { loading, error } = useFetch()

  return (
    <div className="flex h-full items-center justify-center text-2xl text-ctp-text">
      {loading && 'Loading...'}
      {error && 'Error loading data'}
    </div>
  )
}

export default NotLoaded
