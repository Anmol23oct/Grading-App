import React,{useEffect,useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Commontab.css'
import { getAnalytics, logEvent } from "firebase/analytics";
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import Split from 'react-split'
import './SplitScreen.css'



function LeftTab() {
  return (
    <div className='frame-container'>
      <iframe className='iframe' src="https://data2.cs.rutgers.edu/?igu=1" ></iframe>
    </div>
  )
}
function RightTab() {
  return <iframe className='iframe' src="https://www.codepost.io/?igu=1" ></iframe>;
}
const CJtab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tab, settab]=useState("Tab: JupyterLab_CodePost" ) 
  const analytics = getAnalytics();
   useEffect(() =>{
      // console.log("tabindex",tabIndex)
      if (tabIndex==0){
        settab("Tab: JupyterLab")
        console.log(tab)
        logEvent(analytics, tab)
      }
      if (tabIndex==1){
        settab("Tab: CodePost")
        console.log(tab)
        logEvent(analytics, tab)
      }
         else if (tabIndex==2){
        settab("Tab: JupyterLab_CodePost")
        console.log(tab)
        logEvent(analytics, tab)
      }
   
 });

  return (
    <Tabs className='tabs' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
    <Tab> JupyterLab </Tab>
      <Tab>CodePost </Tab>
      <Tab>JupyterLab | CodePost </Tab>
    </TabList>

    
    <TabPanel>
      
    <div className='frame-container'>
          
          <iframe className='iframe' src="https://data2.cs.rutgers.edu/?igu=1" ></iframe>

    </div>
    </TabPanel>
    <TabPanel >
    
          <iframe className='iframe' src="https://www.codepost.io/?igu=1"
          id="GFG" >
    
          </iframe>
    </TabPanel>
    
    <TabPanel >
    
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