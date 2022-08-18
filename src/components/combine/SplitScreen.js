import { React, useState } from 'react'
import Split from 'react-split'
import './SplitScreen.css'
import Draggable from 'react-draggable';
import SideMenu from './SideMenu';
import { Switch as Switch } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function SplitScreen() {

  function LeftTab() {
    return (
      <div className='frame-container'>
        {/* <Router>
        <Nav/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<JnC/>}>
              
            </Route>
            <Route path='/JnY' element={<JnY/>}>
           
            </Route>
            <Route path='/Jupyter' element={<Jupyter/>}/>
          </Routes>
        </div>
      </Router> */}
        {/*<Draggable defaultClassName='dragger' axis='y'><div><SideMenu /></div></Draggable>*/}
        <iframe className='iframe' src="https://data2.cs.rutgers.edu/?igu=1" ></iframe>
        {/*<iframe className='iframe' src="https://www.codepost.io/?igu=1" ></iframe>*/}
      </div>
    )
  }
  function RightTab() {
    return <iframe className='iframe' src="https://www.codepost.io/?igu=1" ></iframe>;
  }

  /*
  <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        >
      <Menu>
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </Draggable>
      */

  return (
    <div className='container'>
      <Split
        class="split"
        sizes={[50, 50]}
        gutterSize={10}
      >
        <LeftTab />
        <RightTab />
      </Split>
    </div>
  )
}

export default SplitScreen