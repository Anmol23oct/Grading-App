import React from 'react'
import Jupyter from '../components/combine/Jupyter'
import Home from '../components/combine/Home'
import TitleText from '../utils/TitleText'

const HomeOnly = () => {
    TitleText('CodeBench - Home')
    return (
        <div><Home /></div>
    )
}

export default HomeOnly