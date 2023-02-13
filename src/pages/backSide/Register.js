import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import register from './style/register.css'

const Register = () => {
    const [isUser,setIsUser]=useState(false)
    const alreadyUser=()=>{
        setIsUser(!isUser)
    }
    return (
        <div className='register-container' >
            <div className='register-form' >
                <div className='form' >
                    <div className='title'>
                        <h4>Ricard Bland College Sga System</h4>
                    </div>
                    <form>
                        <input placeholder='username' name='name' />
                        {!isUser && <input placeholder='email' name='email' />}
                        <input placeholder='password' name='password' />
                        <button>submit</button>
                    </form>
                    <div className='change' >
                        {isUser ? <div> want registe for account? <a onClick={()=>{alreadyUser()}} >click here!</a></div> :
                        <div> already have account? <a onClick={()=>{alreadyUser()}} >click here!</a></div> }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
