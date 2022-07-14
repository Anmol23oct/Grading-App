import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData=[
    {
        title: 'Jupyter Lab',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Jupyter Lab and Search',
        path:'/JnY',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: 'Notebook and CodePost',
        path:'/NnC',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
     {
         title: 'Jupyter Lab and CodePost',
         path:'/JnC',
         icon: <FaIcons.FaEnvelopeOpenText/>,
         cName:'nav-text'
     }
    // {
    //     title: 'C & J',
    //     path:'/support',
    //     icon: <IoIcons.IoIosAddCircle/>,
    //     cName:'nav-text'
    // },
    
]
