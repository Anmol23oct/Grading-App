import React from 'react'
import CodePost from './components/codePost/codePost'
import You from './components/you/you'
import Nav from './components/nav/Nav'
import Combine from './components/combine/combine'
import SplitScreen from './components/combine/SplitScreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import JnC from './pages/JnC'
import JnY from './pages/JnY'
import Jonly from './pages/Jonly'
import NotFound from './pages/404'
const App = () => {
    return (
      <>

    <div>
          

      <Router>
        <Nav/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<JnC/>}>
              
            </Route>
            <Route path='/JnY' element={<JnY/>}>
           
            </Route>
            <Route path='/Jupyter' element={<Jonly/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>

        </div>
      </Router>
          
          
          
          {/*<SplitScreen/>*/}
          
          
    </div>
            {/*<div className='codePost'><CodePost/></div>  
            <div className="you"><You/></div> 
            <div id="nav"><Nav/></div>  */}
              
      </>
    )
  }

  export default App