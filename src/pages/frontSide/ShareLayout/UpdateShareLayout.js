import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import css from '../../backSide/style/shareLayout.css'
import ab from '../styles/AboutUs.css'

const UpdateShareLayout = () => {
    const navigate=useNavigate()
  return (
    <div className='b-container m-t-80px m-x-10 flex-row m-r-30px' >
      <div className='  p-fixed flex-column ai-start jc-center ac-start ji-cenetr m-t-100px m-r-80px' >
        <h1>Update</h1>
        <div>
          <button onClick={()=>{navigate('/update/news')}} className='aboutus-button m-t-10px' >
            News
          </button>
        </div>
        <div>
          <button onClick={()=>{navigate('/update/agenda')}} className='aboutus-button m-t-10px' >
            Agenda
          </button>
        </div>
        <div>
          <button onClick={()=>{navigate('/update/public-event')}} className='aboutus-button m-t-10px'>
            Public Event
          </button>
        </div>
        <div>
          <button onClick={()=>{navigate('/update/anouncement')}} className='aboutus-button m-t-10px'>
            Anouncement
          </button>
        </div>
        <div>
          <button onClick={()=>{navigate('/update/calendar')}} className='aboutus-button m-t-10px'>
            Calendar
          </button>
        </div>

      </div>
      <div className='   m-t-100px  m-l-10 width-60' >
      < Outlet  />
      </div>
    </div>
  )
}

export default UpdateShareLayout
