import React, {useEffect} from 'react'
import JupyterNYou from '../components/combine/JupyterNYou'
import JYtab from '../components/Tabs/JYtab'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";
const JnY = () => {
  TitleText('CodeBench - Code')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Page: Code')
    console.log("Page: Code")
});
  return (
    <div><JYtab/></div>
  )
}

export default JnY