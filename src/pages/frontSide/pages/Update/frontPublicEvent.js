import React, { useEffect } from 'react'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../../backSide/style/shareLayout.css'
import { FrontEndPublicEventModual } from '../../frontEndModule'

const FrontPublicEvent = () => {
  const { generalPost,user,getAllPublicEvent,publicEvents } = useAppContext()
  useEffect(()=>{
    getAllPublicEvent()
  },[])
  return (
    <div className='flex-column flex-center'>
      <div>
        <h2>Public Evnet</h2>
      </div>
      <FrontEndPublicEventModual publicEvents={publicEvents} />
    </div>
  )
}

export default FrontPublicEvent
