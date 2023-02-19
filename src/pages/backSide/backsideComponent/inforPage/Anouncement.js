import React, { useEffect, useState } from 'react'
import thecss from '../../style/BacksideAnouncement.css'
import css from '../../style/shareLayout.css'
import { useAppContext } from '../../../../context/AppContext'

const initialState = {
    title: '',
    description: '',
    time: '',
    userId: ''
}
const Anouncement = () => {
    const [values, setValues] = useState(initialState)
    const { getAllAnouncemnt, anouncements,generalPost,user } = useAppContext()
    useEffect(() => {
        getAllAnouncemnt()
    }, [])
    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const date = new Date()
        const time = date.toLocaleDateString()
        const endpoint={
            mainPoint:'anouncement'
        }
       const data={
            userId:user.id,
            title:values.title,
            description:values.description,
            date:time
        }
        generalPost({endpoint,data}).then(()=>{
            getAllAnouncemnt()
        })

    }
    return (
        <div className='width-100 flex-column ai-center ji-center ac-center jc-center' >
            <form onSubmit={onSubmitHandler} className='form width-100 flex-column' >
                <input placeholder='title' name='title' onChange={onChangeHandler} id='backside-anouncement-title-input' />
                <textarea onChange={onChangeHandler} name='description' id='backside-anouncement-description-input' />
                <button className='btn' >submit</button>
            </form>
            <div>
                {anouncements?.map((a) => {
                    return <div>{a.title}</div>

                })}
            </div>
        </div>
    )
}

export default Anouncement
