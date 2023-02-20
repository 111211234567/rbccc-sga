import React from 'react'
import css from '../../style/InforPageTopNav.css'

const InforPageTopNav = ({changePage}) => {
  return (
    <div id='InforPage-topNav' >
      <div className='InforPage-topNav-choice' onClick={()=>changePage('Anouncement')} >Anouncement</div>
      <div className='InforPage-topNav-choice' onClick={()=>changePage('Agenda')} >Agenda</div>
      <div className='InforPage-topNav-choice' onClick={()=>changePage('News')} >News</div>
    </div>
  )
}

export default InforPageTopNav
