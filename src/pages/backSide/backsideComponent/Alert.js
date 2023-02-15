import React from 'react'
import Alertcss from '../style/Alert.css'
import { useAppContext } from '../../../context/AppContext'

const Alert = () => {
    const { alertText } = useAppContext()
    return (
        <div className='Alert ' >
           <div className='register-alert-text' >{alertText}</div>
        </div>
    )
}

export default Alert
