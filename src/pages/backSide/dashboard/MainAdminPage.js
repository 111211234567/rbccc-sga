import React from 'react'
import { useAppContext } from '../../../context/AppContext'
import css from '../style/mainpage.css'

const MainAdminPage = () => {
    const { logout,user } = useAppContext()
    return (
        <div>
            mainpage
            <button onClick={()=>{logout()}} >logout</button>
        </div>
    )
}

export default MainAdminPage
