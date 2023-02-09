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
      <iframe className='iframe' src="https://data3.cs.rutgers.edu/?igu=1" ></iframe>
    </div>
  )
}
function RightTab() {
  return <iframe className='iframe' src="https://you.com/" ></iframe>;
}
const JYtab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tab, settab]=useState("Tab: Search_You" ) 
  const analytics = getAnalytics();
   useEffect(() =>{
      // console.log("tabindex",tabIndex)
      if (tabIndex==0){
        settab("Tab: Search_You")
        console.log(tab)
        logEvent(analytics, tab)
      }
      // if (tabIndex==1){
      //   settab("Tab: Search_You")
      //   console.log(tab)
      //   logEvent(analytics, tab)
      // }
         else if (tabIndex==1){
        settab("Tab: JupyterLab_Search_You")
        console.log(tab)
        logEvent(analytics, tab)
      }
   
 });
  return (
    <Tabs className='tabs' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      {/* <Tab> JupyterLab </Tab> */}
      <Tab> You</Tab>
      <Tab>JupyterLab | You </Tab>
    </TabList>

    {/* <TabPanel>
    <div className='frame-container'>
          <iframe className='iframe' src="https://data2.cs.rutgers.edu/?igu=1" ></iframe>

    </div>
    </TabPanel> */}
    <TabPanel>
    <iframe className='iframe' src="https://you.com/" 
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

export default JYtab