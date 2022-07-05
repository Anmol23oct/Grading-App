import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData=[
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'J & Y',
        path:'/JnY',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: 'Jupyter',
        path:'/Jupyter',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    }
    // {
    //     title: 'C & Y',
    //     path:'/Jupyter',
    //     icon: <FaIcons.FaEnvelopeOpenText/>,
    //     cName:'nav-text'
    // },
    // {
    //     title: 'C & J',
    //     path:'/support',
    //     icon: <IoIcons.IoIosAddCircle/>,
    //     cName:'nav-text'
    // },
    
]
