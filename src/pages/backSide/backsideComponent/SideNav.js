import React from 'react'
import Sidebar from '../style/Sidebar.css'
import { useNavigate } from 'react-router-dom';
import { BiCalendarStar, BiNews, BiMoney, BiGroup } from "react-icons/bi";
const SideNav = () => {
    const navigate=useNavigate()
    return (
        <div className='side-container flex-column' >
            <div onClick={()=>{navigate('/app/mainpage')}} className='sidebar-rbc-container' >
                <img src='/images/rbc.png' className='sidebar-rbc' />
            </div>
            <div className='sidebar-icon-container' onClick={()=>{navigate('/app/calender')}} >
                <BiCalendarStar className='sidebar-icon' />
            </div>
            <div className='sidebar-icon-container' onClick={()=>{navigate('/app/infor')}}>
                <BiNews className='sidebar-icon' />
            </div>
            <div className='sidebar-icon-container' onClick={()=>{navigate('/app/fund')}} >
                <BiMoney className='sidebar-icon' />
            </div>
            <div className='sidebar-icon-container' onClick={()=>{navigate('/app/club')}}>
                <BiGroup className='sidebar-icon' />
            </div>
        </div>
    )
}

export default SideNav
