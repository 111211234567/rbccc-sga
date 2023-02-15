import React from 'react'
import topnva from '../style/Topnav.css'
import { BiUserCircle } from "react-icons/bi";
import { useAppContext } from '../../../context/AppContext';

const Topnav = () => {
    const { user,logout } = useAppContext()
    return (
        <div className='top-nav-container ' >
            <div className='flex-row' >
                <div className='user-infor-container' >

                    <BiUserCircle className='user-icon' />
                    {user.name}

                </div>
                <button className='logout' onClick={()=>{logout()}} >Logout</button>
            </div>

        </div>
    )
}

export default Topnav
