import React, {useEffect} from 'react'
import JupyterNYou from '../components/combine/JupyterNYou'
import JYtab from '../components/Tabs/JYtab'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";
const JnY = () => {
  TitleText('CodeBench - Fetch Code and Submit')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Fetch_Code_and_Submit')
    console.log("Fetch_Code_and_Submit")
});
  return (
    <div><JYtab/></div>
  )
}

export default JnY