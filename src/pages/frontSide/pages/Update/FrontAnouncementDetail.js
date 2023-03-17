import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../../backSide/style/shareLayout.css'

const FrontAnouncementDetail = () => {
    const { getOneAnouncement, anouncement } = useAppContext()
    const { id } = useParams()
    useEffect(() => {
        getOneAnouncement(id)
    }, [])
    if(anouncement.author){
        console.log(anouncement)
    return (
        <div className='width-100 flex-column ac-center ai-center jc-center ji-center' >
      <div className='  width-80 minheight-200px flex-column ac-center ai-center jc-center ji-center' >
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
        
      </div>
      {/* <button onClick={()=>{console.log(anouncement)}} >sd</button> */}
    </div>
    )
    }
}

export default FrontAnouncementDetail
