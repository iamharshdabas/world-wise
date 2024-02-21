import { BrowserRouter, Route, Routes } from 'react-router-dom'
import City from './components/City'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import Form from './components/Form'
import { FetchProvider } from './context/FetchContext'
import Home from './pages/Home'
import Auth from './pages/Login'
import Map from './pages/Map'
import { AuthProvider } from './context/AuthContext'
import Protect from './Protect'

const App = () => {
  return (
    <>
      <FetchProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="map" element={ <Protect><Map/></Protect> }>
                <Route path="form" element={<Form />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
              </Route>
              <Route path="auth" element={<Auth />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </FetchProvider>
    </>
  )
}

export default App
