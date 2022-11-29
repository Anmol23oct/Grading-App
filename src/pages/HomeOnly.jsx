import React, {useEffect} from 'react'
import Jupyter from '../components/combine/Jupyter'
import Home from '../components/combine/Home'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";


const HomeOnly = () => {
    useEffect(() =>{
        const analytics = getAnalytics();
        logEvent(analytics, 'Home_Page')
        console.log("Home_Page")
    });
    TitleText('CodeBench - Home')
    return (
        <div><Home /></div>
    )
}

export default HomeOnly