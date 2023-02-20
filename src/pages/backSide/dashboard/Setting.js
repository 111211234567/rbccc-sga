import React, { useState } from 'react'
import '../style/shareLayout.css'
import { useAppContext } from '../../../context/AppContext'

const Setting = () => {
    const { user, generalUpdate } = useAppContext()
    const initialState = {
        name: user.name,
        email: user.email,
        image: ''
    }
    const [values, setValues] = useState(initialState)
    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    }
    const uploadImg = async (e) => {
        const file = e.target.files[0]
        await convertBase64(file)
        console.log(values.image)
    }
    const convertBase64 = (file) => {
        try {
            var reader = new FileReader()
            if (file) {
                reader.readAsDataURL(file)
                reader.onload = () => {
                    var Base64 = reader.result
                    setValues({ ...values, image: Base64 })
                }
                reader.onerror = (error) => {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const endpoint = {
            mainPoint: 'user',
            secondePoint: 'update',
            mainId: user.id
        }
        const data = values
        console.log(endpoint)
        generalUpdate({ endpoint, data })
    }
    return (
        <div onSubmit={onSubmitHandler} className='width-100 flex-column ac-center ai-center jc-center ji-center ' >
            < div className='margin-10px' >change name,email, and headphoto</div>
            < div className='margin-10px' >try relogin after change any vaule</div>
            <form className='width-100 flex-column ac-center ai-center jc-center ji-center' >
                <input id='1' type='text' onChange={onChangeHandler} name="name" value={values.name} className='width-50' />
                <input id='2' type='email' name='email' onChange={onChangeHandler} value={values.email} className='width-50' />
                <input id='2' type='file' onChange={uploadImg} />
                <button type='submit' className='btn' >submit</button>
            </form>
        </div>
    )
}

export default Setting
