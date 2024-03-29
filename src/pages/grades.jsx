import React, {useEffect} from 'react'
import JupyterNYou from '../components/combine/JupyterNYou'
import JYtab from '../components/Tabs/JYtab'
import CJtab from '../components/Tabs/CJtab'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";
const JnY = () => {
  TitleText('CodeBench - Grades')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Page: Grades')
    console.log("Page: Grades")
});
  return (
    <div><CJtab/></div>
  )
}

export default JnY