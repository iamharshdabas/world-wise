import { LeafletMouseEvent } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../context/useFetch'
import { MapPositionType } from '../types/mapPosition'

const ChangeView = ({ position }: { position: MapPositionType }) => {
  const map = useMap()
  map.setView(position, map.getZoom())
  return null
}

const DetectClick = () => {
  const navigate = useNavigate()

  useMapEvents({
    click: (event: LeafletMouseEvent) => {
      navigate(`form?lat=${event.latlng.lat}&lon=${event.latlng.lng}`)
    },
  })

  return null
}

const LeafletMap = () => {
  const { data } = useFetch()
  const [mapPosition, setMapPosition] = useState<MapPositionType>([0, 0])
  const [searchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  useEffect(() => {
    if (lat && lon) {
      setMapPosition([Number(lat), Number(lon)])
    }
  }, [lat, lon])

  return (
    <div className="fixed left-0 top-0 h-screen w-screen">
      <MapContainer className="h-full" center={mapPosition} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((child) => (
          <Marker position={[child.latitude, child.longitude]} key={child.id}>
            <Popup>{child.name}</Popup>
          </Marker>
        ))}
        <ChangeView position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  )
}

export default LeafletMap
