import React from 'react'
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Movements from './Pages/Movements';
import Contactus from './Pages/Contactus';
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
   <Main>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='Todo' element={<Todo/>}/>
      <Route exact path='Movements' element={<Movements/>}/>
      <Route exact path='Contactus' element={<Contactus/>}/>
    </Routes>
   </Main>
    </div>
  )
}

export default App