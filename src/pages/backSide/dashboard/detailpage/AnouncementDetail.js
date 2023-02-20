import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../style/shareLayout.css'
import { BiChevronsLeft } from "react-icons/bi";

const AnouncementDetail = () => {
  const { id } = useParams()
  const { getOneAnouncement, anouncement } = useAppContext()
  useEffect(() => {
    getOneAnouncement(id)
  }, [])
  return (
    <div className='width-100 flex-column ac-center ai-center jc-center ji-center' >
      <div> <BiChevronsLeft /> </div>
      <div className=' border-1-grey border-radius-10 width-80 minheight-200px flex-column ac-center ai-center jc-center ji-center' >
        <div className='height-50px bgc-grey width-100' >

        </div>
        <div className='flex-row m-t-20px' >
          {anouncement.author.headPhoto ? <img src={anouncement.author.headPhoto.img} className="  headPhoto-M" /> : <img src='/images/rbc.png' className='headPhoto' />}
          <div className='flex-column' >
            <h1>{anouncement.title}</h1>
            <div>{anouncement.author.name}</div>
            <div>{anouncement.date}</div>
          </div>
        </div>
        <div className='m-t-20px' >
          {anouncement.description}
        </div>
        <div className='m-t-20px height-50px bgc-grey width-100' >

        </div>
      </div>
    </div>
  )
}

export default AnouncementDetail
