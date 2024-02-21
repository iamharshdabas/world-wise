import CurrentLocation from '../components/CurrentLocation'
import LeafletMap from '../components/LeafletMap'
import MapMenu from '../components/MapMenu'
import NavBar from '../components/NavBar'

const Map = () => {
  return (
    <>
      <NavBar bg />
      <LeafletMap />
      <CurrentLocation />
      <MapMenu />
    </>
  )
}

export default Map
