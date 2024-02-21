import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate(-1)
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full border border-ctp-text px-4 py-2 uppercase text-ctp-text hover:bg-ctp-lavender hover:text-ctp-crust"
    >
      back
    </button>
  )
}

export default BackButton
