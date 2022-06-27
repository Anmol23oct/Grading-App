import React from 'react'
import Split from 'react-split'
import './SplitScreen.css'

function SplitScreen() {
  function C1() {
    return <iframe className='iframe' src="https://www.codepost.io/?igu=1" ></iframe>;
  }
  function C2() {
    return <iframe className='iframe' src="https://www.you.com" ></iframe>;
  }

  return (
    <Split 
      class="wrap" 
      sizes={[50, 50]}
      gutterSize={10}
      >
        <C1 />
        <C2 />
    </Split>
  )
}

export default SplitScreen