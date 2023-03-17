import React, { useEffect } from 'react'
import { FrontEndAgendaModual } from '../../frontEndModule'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../../backSide/style/shareLayout.css'

const FrontAgenda = () => {
  const { agendas,getAllAgenda } = useAppContext()
  useEffect(()=>{
    getAllAgenda()
  },[])
  return (
    <div className='flex-column flex-center' >
      <div><h1>Agenda of meeting</h1></div>
      <div className='b-flex width-100 flex-wrap' >
        {agendas?.map((a)=>{
          return <FrontEndAgendaModual theAgenda={a} />
        })}
      </div>
    </div>
  )
}

export default FrontAgenda
