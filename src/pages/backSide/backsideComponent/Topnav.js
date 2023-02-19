import React from 'react'
import topnva from '../style/Topnav.css'
import { BiUserCircle } from "react-icons/bi";
import { useAppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Topnav = () => {
    const { user,logout } = useAppContext()
    const navigate=useNavigate()
    return (
        <div className='top-nav-container ' >
            <div className='flex-row' >
                <div onClick={()=>{navigate('/app/setting')}} className='user-infor-container' >

                    <BiUserCircle className='user-icon' />
                    {user.name}

                </div>
                <button className='logout' onClick={()=>{logout()}} >Logout</button>
            </div>

        </div>
    )
}

export default Topnav
