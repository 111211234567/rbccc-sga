import React from 'react'
import Sidebar from '../style/Sidebar.css'
import { BiCalendarStar, BiNews, BiMoney, BiGroup } from "react-icons/bi";
const SideNav = () => {
    return (
        <div className='side-container flex-column' >
            <div className='sidebar-rbc-container' >
                <img src='/images/rbc.png' className='sidebar-rbc' />
            </div>
            <div className='sidebar-icon-container' >
                <BiCalendarStar className='sidebar-icon' />
            </div>
            <div className='sidebar-icon-container'>
                <BiNews className='sidebar-icon' />
            </div>
            <div className='sidebar-icon-container'>
                <BiMoney className='sidebar-icon' />
            </div>
            <div className='sidebar-icon-container'>
                <BiGroup className='sidebar-icon' />
            </div>
        </div>
    )
}

export default SideNav
