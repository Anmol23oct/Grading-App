import React, {useEffect} from 'react'
import NotebookNCodePost from '../components/combine/NotebookNCodePost'
import Jupyter from '../components/combine/Jupyter'
import JCtab from '../components/Tabs/JCtab'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";
const NnC = () => {
    TitleText('CodeBench - Admin')
    useEffect(() =>{
      const analytics = getAnalytics();
      logEvent(analytics, 'Jupyter_Hub')
      console.log("Jupyter_Hub")
  });
  return (
    
    <div><JCtab/></div>
  )
}

export default NnC