import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { Navigate } from 'react-router-dom'

const ProtectPage = ({ children }) => {
    const { user } = useAppContext()
    if (!user.islogin) {
        return <Navigate to='/register' />
    } 
    return children
}

export default ProtectPage
