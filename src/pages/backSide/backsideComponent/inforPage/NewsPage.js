import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'

const theValues = {
    title: '',
    url: '',
    description: ''
}

const NewsPage = () => {
    const [values, setValues] = useState(theValues)
    useEffect(() => {

    }, [])
    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    }
    return (
        <div className='' id='infor-newspage-container' >
            <form className='width-100 flex-column ai-center ji-center' >
                <div>
                    <input name='title' placeholder='title' onChange={onChangeHandler} />
                    <input name='url' placeholder='url' onChange={onChangeHandler} />
                </div>
                <textarea id='infor-newspage-textarea' onChange={onChangeHandler} />
                <button className='btn' name='description' >submit</button>
            </form>
        </div>
    )
}

export default NewsPage
