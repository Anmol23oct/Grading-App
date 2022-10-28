import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Commontab.css'
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import Split from 'react-split'
import './SplitScreen.css'

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
    </div>
  )
}
function RightTab() {
  return <iframe className='iframe' src="https://www.codepost.io/?igu=1" ></iframe>;
}
const CJtab = () => {
  return (
    <Tabs className='tabs'>
    <TabList>
      {/* <Tab> <SiIcons.SiJupyter /> </Tab>
      <Tab><SiIcons.SiCodecademy /></Tab>
      <Tab><SiIcons.SiJupyter  /> | <SiIcons.SiCodecademy /> </Tab> */}

    <Tab> JupyterLab </Tab>
      <Tab>CodePost </Tab>
      <Tab>JupyterLab | CodePost </Tab>
    </TabList>

    
    <TabPanel>
    <div className='frame-container'>
          <iframe className='iframe' src="https://data2.cs.rutgers.edu/?igu=1" ></iframe>

    </div>
    </TabPanel>
    <TabPanel>
    <iframe className='iframe' src="https://www.codepost.io/?igu=1"
          id="GFG" >
    
          </iframe>
    </TabPanel>
    
    <TabPanel>
          <div className='container'>
            <Split
              class="split"
              sizes={[75, 25]}
              gutterSize={10}
            >
              <LeftTab />
              <RightTab />
            </Split>
          </div>
    </TabPanel>
  </Tabs>
  )
}

export default CJtab