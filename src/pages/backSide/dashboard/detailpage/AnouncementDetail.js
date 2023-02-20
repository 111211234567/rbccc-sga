import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../style/shareLayout.css'
import csss from '../../style/AnouncementDetail.css'
import { BiChevronsLeft } from "react-icons/bi";

const AnouncementDetail = () => {
  const { id } = useParams()
  const { getOneAnouncement, anouncement, generalDelete } = useAppContext()
  const navigate = useNavigate()
  const [anounce,setAnounce]=useState({})
  useEffect(() => {
     getOneAnouncement(id)
  }, [])
  if(anouncement){
    console.log(anouncement)
  }
  const deleteAnouncementHandler = () => {
    const endpoint = {
      mainPoint: "anouncement",
      secondePoint: "edite",
      mainId: anouncement._id
    }
    generalDelete({ endpoint })
    navigate('/app/infor')
  }
  if(anouncement.author){
  return (
    <div className='width-100 flex-column ac-center ai-center jc-center ji-center' >
      <div className='height-30px width-100 ' onClick={()=>{navigate('/app/infor')}} > <BiChevronsLeft className='height-30px' /> </div>
      <div className=' border-1-grey border-radius-10 width-80 minheight-200px flex-column ac-center ai-center jc-center ji-center' >
        <div className='height-50px bgc-grey width-100' >

        </div>
        <div className='flex-row m-t-20px' >
          <div className='height-100 flex-row ac-center jc-center ai-center ji-center'  >
          {anouncement.author.headPhoto ? <img src={anouncement.author.headPhoto.img} className=" m-x-30px  headPhoto-M" /> : <img src='/images/rbc.png' className='headPhoto m-x-30px ' />}
          </div>
          <div className='flex-column' >
            <h1>{anouncement.title}</h1>
            <div>{anouncement.author.name}</div>
            <div>{anouncement.date}</div>
          </div>
        </div>
        <div className='m-t-20px m-x-30px' >
          {anouncement.description}
        </div>
        <div className='m-t-20px height-50px bgc-grey width-100' >
          <div onClick={()=>{deleteAnouncementHandler()}} id='anouncementDelete' className=' height-50px width-50 flex-row ac-center ai-center jc-center ji-center ' >
           <div>Delete</div> 
          </div>
        </div>
      </div>
    </div>
  )
    }
}

export default AnouncementDetail
