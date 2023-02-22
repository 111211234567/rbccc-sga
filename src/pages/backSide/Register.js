import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import register from './style/register.css'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Alert } from './backsideComponent'

const initialState = {
    name: '',
    email: '',
    password: ''
}

const Register = () => {
    const navigate = useNavigate()
    const [isUser, setIsUser] = useState(false)
    const [values, setValues] = useState(initialState)
    const { register, generalPost, login, user,test,alertText,showAlert } = useAppContext()

    useEffect(() => {
        if (user) {
            login(user)
            navigate('/app/mainpage')
        }
    }, [user, navigate]
    )
    const alreadyUser = () => {
        setIsUser(!isUser)
    }
    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    }
   
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = values
        const endpoint = {
            mainPoint: 'auth',
            secondePoint: 'register'
        }
        if(isUser){
            login(values)
        }
        if(!isUser){
            register(values)
        }
        
        
        
    }
    return (
        <div className='register-container' >
            <div className='register-form' >
                <div className='form' >
                    <div className='title'>
                        <h4>Richard Bland College Sga System</h4>
                    </div>
                    <form className='form' onSubmit={onSubmitHandler} >
                        {showAlert && <Alert/>}
                        <input placeholder='name' name='name' onChange={onChangeHandler} />
                        {!isUser && <input placeholder='email' name='email' onChange={onChangeHandler} />}
                        <input placeholder='password' name='password' onChange={onChangeHandler} />
                        <button className='loginbtn' >submit</button>
                    </form>
                    <div className='change' >
                        {isUser ? <div> want register for account? <a onClick={() => { alreadyUser() }} >click here!</a></div> :
                            <div> already have account? <a onClick={() => { alreadyUser() }} >click here!</a></div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
