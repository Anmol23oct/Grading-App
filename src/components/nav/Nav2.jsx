import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Nav2.css'
import {IconContext} from 'react-icons'
function Navbar2(){
    const [sidebar, setSidebar]=useState(false) 
    const showSidebar=()=> setSidebar(!sidebar)
    const [isHovering, setIsHovering]=useState(false);
    const handleMouseOver=()=>{
        setIsHovering(true);
    };
    const handleMouseOut=()=>{
        setIsHovering(true);
    };
    return(
            <div style={{width: sidebar ? "200px":"50px"}} className='sidebar'>
                <div className='top_section'>
                    <h1 style={{display: sidebar ? "block":"none"}} className="logo">logo</h1>
                    <div style={{marginLeft: sidebar ? "50px":"0px"}} className='bars'>
                        {sidebar?(<AiIcons.AiOutlineClose onClick={showSidebar}/>):
                        (<FaIcons.FaBars onClick={showSidebar}/>)}
                        {/* <FaIcons.FaBars onClick={showSidebar}/> */}

                    </div>
                </div>
                {
                    SidebarData.map((item,index)=>(
                        <NavLink onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} to={item.path} key={index} className="link" activeclassName="active" data-tooltip={item.title}>
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: sidebar ? "block":"none"}} className='link_text'>{item.title}</div>
                        </NavLink>
                    ))
                }

            </div>
         
    )
}

const Nav2 = () => {
  return (
    <Navbar2/>
  )
}



export default Nav2