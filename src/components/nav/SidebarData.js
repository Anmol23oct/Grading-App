import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Fetch/Submit',
        path: '/Fetch_Submit',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Assignment Completion',
        path: '/Assignment_Completion',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Grading and Feedback',
        path: '/Grading_Feedback',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/Contact-Us',
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
