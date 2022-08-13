import React from 'react'
import CodePost from './components/codePost/codePost'
import You from './components/you/you'
import Combine from './components/combine/combine'
import SplitScreen from './components/combine/SplitScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JnC from './pages/JnC'
import JnY from './pages/JnY'
import NnC from './pages/NnC'
import Jonly from './pages/Jonly'
import NotFound from './pages/404'
import Nav2 from './components/nav/Nav2'
import { useNavigate } from 'react-router-dom';

const App = () => {

  return (


    <Router>
      <div className='container'>
        <Nav2 />

        <main>
          <Routes>
            <Route path='/' element={<Jonly />}>
            </Route>
            <Route path='/Assignment_Completion' element={<JnY />}>

            </Route>
            <Route path='/Grading_Feedback' element={<JnC />} />
            <Route path='/Fetch_Submit' element={<NnC />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </main>
      </div>
    </Router>



  )
}

export default App