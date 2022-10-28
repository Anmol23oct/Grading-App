import React from 'react'
import JupyterNYou from '../components/combine/JupyterNYou'
import JYtab from '../components/Tabs/JYtab'
import TitleText from '../utils/TitleText'
const JnY = () => {
  TitleText('CodeBench - Fetch Code and Submit')
  return (
    <div><JYtab/></div>
  )
}

export default JnY