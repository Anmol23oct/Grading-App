import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        left:'111.5rem'
    },
    // {
    //     title: 'Fetch/Submit',
    //     path: '/Fetch_Submit',
    //     icon: <IoIcons.IoMdPeople />,
    //     cName: 'nav-text'
    // },
    {
            title: 'Code',
            path: '/code',
            // icon: <IoIcons.IoMdPeople />,
            icon: <BsIcons.BsFillFileCodeFill/>,
            cName: 'nav-text',
            left:'111.6rem'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        left:'111rem'

    },
    {
        title: "Grades",
        path: '/grades',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
        left:'111rem'
    },
    {
        title: 'Help',
        path: '/Help',
        icon: <MdIcons.MdContactSupport />,
        cName: 'nav-text',
        left:'112rem'
    }
    // {
    //     title: 'C & J',
    //     path:'/support',
    //     icon: <IoIcons.IoIosAddCircle/>,
    //     cName:'nav-text'
    // },

]
