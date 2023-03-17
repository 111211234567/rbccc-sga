import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'


const FrontPublicEventDetail = () => {
    const { id } = useParams()
    const [startTime,setStartTime]=useState(new Date)
    const [endTime,setEndTime]=useState(new Date)
    const { getOnePublicEvent, publicEvent, generalDelete } = useAppContext()
    useEffect(() => {
        getOnePublicEvent({ id })
    }, [])
    
    // const sD=publicEvent.date.start.toString()
    // const sDate=sD.substring(0, 10)
    // const sTime=sD.substring(11, 16)
    
    // const ed=publicEvent.date.end.toString()
    // const eTime=ed.substring(11, 16)
    if (publicEvent.author) {
        const start=moment(publicEvent.date.start).format('Y-MM-DD HH:mm:ss');
    const end=moment(publicEvent.date.end).format('Y-MM-DD HH:mm:ss');
        return (

            <div className='width-100 flex-column ac-center ai-center jc-center ji-center' >
                <div className='  width-80 minheight-200px flex-column ac-center ai-center jc-center ji-center' >
                    <div className='flex-row m-t-20px' >

                        <div className='flex-column' >
                            <h1>{publicEvent.title}</h1>
                            <div>{publicEvent.author.name}</div>
                            <div>start:{start}</div>
                            <div>end: {end}</div>
                            <div>location: {publicEvent.location} </div>
                        </div>
                    </div>
                    <div className='m-t-20px m-x-30px' >
                        {publicEvent.description}
                    </div>

                </div>
            </div>
        )
    }
}

export default FrontPublicEventDetail
