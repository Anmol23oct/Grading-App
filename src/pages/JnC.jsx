import React, {useEffect} from 'react'
import SplitScreen from '../components/combine/SplitScreen'
import TitleText from '../utils/TitleText'
import CJTab from '../components/Tabs/CJtab'
import { getAnalytics, logEvent } from "firebase/analytics";
const JnC = () => {
  TitleText('CodeBench - Grading Feedback')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Grading_Feedback')
    console.log("Grading_Feedback")
});
  return (
    <div><CJTab/></div>
  )
}

export default JnC