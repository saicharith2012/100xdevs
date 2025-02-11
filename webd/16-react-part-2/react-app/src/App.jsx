import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from './Pages/Landing'
import Class11Program from "./Pages/Class11Program"
import Class12Program from "./Pages/Class12Program"
import ErrorPage from './Pages/ErrorPage'
import Layout from './Components/Layout'

function App() {

  return (
    <div>
      {/* <a href='/'>Skillflow</a> |<a href='/neet/online-coaching-11'> Class 11 </a>| <a href='neet/online-coaching-12'> Class 12 </a> | NEET
       ---> this leads to loading the html again and again, thus not behaving like a SPA */}
      <BrowserRouter>
        {/* link components cannot be used outside browser router. --> Links can only be used inside the Router context i.e. inside BrowserRouter*/}
        {/* <Link to={"/"}>Skillflow</Link> | <Link to="/neet/online-coaching-11">Class 11</Link> | <Link to="/neet/online-coaching-12">Class 12</Link> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/neet/online-coaching-11' element={<Class11Program />} />
            <Route path='/neet/online-coaching-12' element={<Class12Program />} />
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}






export default App
