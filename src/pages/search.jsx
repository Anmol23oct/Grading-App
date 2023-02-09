import React, {useEffect} from 'react'
import JupyterNYou from '../components/combine/JupyterNYou'
import JYtab from '../components/Tabs/JYtab'
import YJtab from '../components/Tabs/YJtab'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";
const JnY = () => {
  TitleText('CodeBench - Search')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Page: Search')
    console.log("Page: Search")
});
  return (
    <div><YJtab/></div>
  )
}

export default JnY