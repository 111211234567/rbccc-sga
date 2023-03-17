import React from 'react'
import { useNavigate } from 'react-router-dom'
import css from '../../backSide/style/shareLayout.css'

const FrontEndPublicEventModual = ({publicEvents}) => {
    const navigate=useNavigate()
  return (
    <div className='publicEvent-parent width-80' >
    {
      publicEvents?.slice(0).reverse().map((p)=>{
          const startDate=p.date.start.toString()
          const date=startDate.substring(5,10)
          const time=startDate.substring(11,16)
          const description=p.description.substring(0,15)
          return(
              <div className='publicEvent-children' onClick={()=>navigate(`/update/public-event/${p._id}`)} >
                  <div className='m-t-10px '><h3>{p.title}</h3></div>
                  <div className='m-t-10px m-b-10px' >date:{date}</div>
                  <div>time:{time}</div>
                  <div className='m-t-10px m-b-10px' >{description}...</div>
              </div>
          )
      })
    }
  </div>
  )
}

export default FrontEndPublicEventModual
