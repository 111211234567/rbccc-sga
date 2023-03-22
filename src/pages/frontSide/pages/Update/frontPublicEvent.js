import React, { useEffect } from 'react'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../../backSide/style/shareLayout.css'
import { FrontEndPublicEventModual, FrontLoading } from '../../frontEndModule'

const FrontPublicEvent = () => {
  const { generalPost, user, getAllPublicEvent, publicEvents } = useAppContext()
  useEffect(() => {
    getAllPublicEvent()
  }, [])
  if (publicEvents.length === 0) {
    return <FrontLoading />
  } else {
    return (
      <div className='flex-column flex-center'>
        <div>
          <h2>Public Evnet</h2>
        </div>
        <FrontEndPublicEventModual publicEvents={publicEvents} />
      </div>
    )
  }
}

export default FrontPublicEvent
