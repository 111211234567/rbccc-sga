import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import { FrontEndAnouncementModual,FrontLoading } from '../../frontEndModule'
const FrontAnouncement = () => {
  const navigate=useNavigate()
  const { getAllAnouncemnt,anouncements } = useAppContext()
  useEffect(()=>{
    getAllAnouncemnt()
  },[])
  if(anouncements.length===0){
    return <FrontLoading/>
  }else{
  return (
    <div >
      <div > <h1>Anouncement</h1> </div>
      <div>
      {anouncements?.slice(0).reverse().map((a) => {
                    return <FrontEndAnouncementModual anouncement={a} />

                })}
      </div>
    </div>
  )
              }
}

export default FrontAnouncement
