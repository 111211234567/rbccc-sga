import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'
import Datetime from 'react-datetime';
import { useAppContext } from '../../../../context/AppContext';
import PublicEventModule from './PublicEventModule';

const initialState = {
    userId:'',
    title: '',
    location: '',
    cost: '',
    start: new Date(),
    end: new Date(),
    desccription: ''
}
const PublicEvent = () => {
    const [values, setValues] = useState(initialState)
    const { generalPost,user,getAllPublicEvent,publicEvents } = useAppContext()
    useEffect(()=>{
        getAllPublicEvent()
    },[])

    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const endpoint = {
            mainPoint: 'publicEvent'
        }
        const data = {
            userId:user.id,
            title: values.title,
            location: values.location,
            cost: values.cost,
            start: values.start,
            end: values.end,
            description: values.description
        }
        generalPost({ endpoint, data }).then(()=>{
            getAllPublicEvent()
        })
        console.log(data)

    }
    return (
        <div className='b-container flex-column ac-center jc-center ai-center ji-center ' >
            <form onSubmit={onSubmitHandler} className='width-100 flex-column ac-center jc-center ai-center ji-center' >
                <label className='f-3' >title</label>
                <input onChange={onChangeHandler} className='width-50 ' type='text' id='title' name='title' />
                <label className='f-3' >location</label>
                <input onChange={onChangeHandler} className='width-50 ' type='text' id='location' name='location' />
                <label className='f-3' >cost</label>
                <input onChange={onChangeHandler} className='width-50 ' type='text' id='cost' name='cost' />
                <div className='width-50 height-50px m-b-10px m-t-10px flex-row ac-center ai-center jc-center ji-center' >
                    <div className='width-50' >
                        <label>
                            start date
                        </label>
                        <Datetime name='start'  onChange={date => { setValues({ ...values, start: date }) }} />
                    </div>
                    <div className='width-50' >
                        <label>
                            end date
                        </label>
                        <Datetime name='end'  onChange={date => { setValues({ ...values, end: date }) }} />
                    </div>
                </div>
                <label>description</label>
                <textarea onChange={onChangeHandler} name='description' className='width-50 height-100' />
                <button className='b-btn' >submit</button>
            </form>
            <button onClick={() => { console.log(publicEvents) }} >sd</button>
            <PublicEventModule publicEvents={publicEvents} className='width-100 ac-center jc-center ai-center ji-center' />
        </div>
    )
}

export default PublicEvent
