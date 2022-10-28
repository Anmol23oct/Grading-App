import React from 'react'
import CodePost from './components/codePost/codePost'
import You from './components/you/you'
import Combine from './components/combine/combine'
import SplitScreen from './components/combine/SplitScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JnC from './pages/JnC'
import JnY from './pages/JnY'
import NnC from './pages/NnC'
import HomeOnly from './pages/HomeOnly'
import NotFound from './pages/404'
import Nav2 from './components/nav/Nav2'
import ContactForm from './components/Contact-Us/ContactForm2'

const App = () => {

  return (


    <Router>
      <div className='container'>
        <Nav2 />

        <main>
          <Routes>
            <Route path='/' element={<HomeOnly />}/>
            <Route path='/Fetch_Code_Submit' element={<JnY />}>

            </Route>
            <Route path='/Grading_Feedback' element={<JnC />} />
            <Route path='/Admin' element={<NnC />} /> 
            <Route path='/Help' element={<ContactForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </main>
      </div>
    </Router>



  )
}

export default App