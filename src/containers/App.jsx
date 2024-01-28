import React, { Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
//home &auth route
import { HomeScreen,Auth } from '../pages'

const App = () => {
  return <Suspense fallback={<div>Loading...</div>}>
<Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/auth' element={<Auth/>}/>
</Routes>
  </Suspense>
}

export default App