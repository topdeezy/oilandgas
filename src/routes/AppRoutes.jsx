import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Entertainment from '../pages/Entertainment'


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/entertainment' element={<Entertainment/>}/>
    </Routes>
  )
}

export default AppRoutes