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
        cName: 'nav-text'
    },
    // {
    //     title: 'Fetch/Submit',
    //     path: '/Fetch_Submit',
    //     icon: <IoIcons.IoMdPeople />,
    //     cName: 'nav-text'
    // },
    {
            title: 'Fetch, Submit & Code',
            path: '/Fetch_Code_Submit',
            // icon: <IoIcons.IoMdPeople />,
            icon: <BsIcons.BsFillFileCodeFill/>,
            cName: 'nav-text'
    },
    {
        title: 'Grading Feedback',
        path: '/Grading_Feedback',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/Admin',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/Help',
        icon: <MdIcons.MdContactSupport />,
        cName: 'nav-text'
    }
    // {
    //     title: 'C & J',
    //     path:'/support',
    //     icon: <IoIcons.IoIosAddCircle/>,
    //     cName:'nav-text'
    // },

]
