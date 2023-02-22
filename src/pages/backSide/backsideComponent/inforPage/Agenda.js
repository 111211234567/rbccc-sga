import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'
import { useAppContext } from '../../../../context/AppContext'
import AgendaModule from './AgendaModule'

const initialState = {
  date: '',
  file: ''
}

const Agenda = () => {

  const { generalPost, getAllAgenda, agendas } = useAppContext()
  const [values, setValues] = useState(initialState)
  const [file, setFile] = useState('')

  useEffect(() => {
    getAllAgenda()
  }, [])

  const fileOnchangeHandler = (e) => {
    const files = e.target.files[0]
    encodeBase64(files)
  }
  const dateOnchagehandler = (e) => {
    const date = e.target.value
    setValues({ ...values, date: date })
  }
  const onSubmithandler = (e) => {
    e.preventDefault();
    const endpoint = {
      mainPoint: 'agenda'
    }
    const data = values
    generalPost({ endpoint, data }).then(()=>{
      getAllAgenda()
    })
  }
  const encodeBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = () => {
        var Base64 = reader.result
        setFile(Base64)
        setValues({ ...values, file: Base64 })
      };
      reader.onerror = (error) => {
        console.log("error on 64", error)
      }
    }
  }
  return (
    <div className='b-container flex-column ai-center ji-center ac-center jc-center' >
      <form onSubmit={onSubmithandler} >
        <input type='date' onChange={dateOnchagehandler} className='m-r-30px input' />
        <input onChange={fileOnchangeHandler} className='input m-r-30px' type='file' />
        <button className='b-btn' >submit</button>
      </form>
      <div className='flex-column ai-center ji-center ac-center jc-center width-70' >
        {agendas?.map((a) => {
          return < AgendaModule theAgenda={a} />
        })}
      </div>
    </div>
  )
}

export default Agenda
