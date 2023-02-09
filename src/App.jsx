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
import Code from './pages/code'
import Search from './pages/search'
import Grades from './pages/grades'
import Help from './pages/help'
import Nav2 from './components/nav/Nav2'
import Nav3 from './components/nav/Nav3'
import Nav from './components/nav/nav1'
import Nav4 from './components/combine/SideMenu'
import ContactForm from './components/Contact-Us/ContactForm2'

const App = () => {

  return (


    <Router>
      <div className='container'>
      
        <main>
          <Routes>
            <Route path='/' element={<HomeOnly />}/>
            <Route path='/code' element={<Code/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/grades' element={<Grades/>}/>
            {/* <Route path='/Fetch_Code_Submit' element={<JnY />}>
            
            </Route> */}
            {/* <Route path='/Grading_Feedback' element={<JnC />} />
            <Route path='/Admin' element={<NnC />} />  */}
            <Route path='/Help' element={<Help />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </main>
        <Nav2 />
      </div>
    </Router>



  )
}

export default App