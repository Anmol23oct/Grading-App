import React, {useEffect} from 'react'
import Jupyter from '../components/combine/Jupyter'
import Home from '../components/combine/Home'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";

const Jonly = () => {
  TitleText('CodeBench - Jupyter Hub')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Jupyter_Hub')
    console.log("Jupyter_Hub")
});
  return (
    <div><Jupyter /></div>
  )
}

export default Jonly