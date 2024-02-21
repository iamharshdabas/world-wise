import Experience from '../components/Experience'
import Gradient from '../components/Gradient'
import Intro from '../components/Intro'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen overflow-hidden bg-black">
        <Gradient />
        <Experience />
        <Intro />
      </main>
    </>
  )
}

export default Home
