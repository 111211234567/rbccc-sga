
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from '../../style/shareLayout.css'

const AnouncementModual = ({ anouncement }) => {
    const navigate=useNavigate()
    const url=`/app/infor/anouncement/${anouncement._id}`
    const showvalue = anouncement.description.slice(0, 40)
    return (
        <div onClick={()=>{navigate(url)}} className=' border-radius-10 m-t-20px width-80 minheight-150px border-1-grey flex-row ac-center ai-center jc-center ji-center ' >
            <div className=' m-r-30px m-t-20px ' >
                {anouncement.author.headPhoto ? <img src={anouncement.author.headPhoto.img} className="headPhoto" /> : <img src='/images/rbc.png' className='headPhoto' />}
            </div>
            <div className='felx-colum ac-center ai-center jc-center ji-center ' >
                <div>
                   <h2>{anouncement.title}</h2>
                </div>
                <div>
                    {showvalue}...
                </div>
            </div>
        </div>
    )
}

export default AnouncementModual
