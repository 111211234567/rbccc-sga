import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../style/shareLayout.css'
import { BiChevronsLeft } from "react-icons/bi";

const PublicEvnetDetail = () => {
  const { getOnePublicEvent, publicEvent, generalDelete } = useAppContext()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getOnePublicEvent({ id })
  }, [])
  const deleteHandler = () => {
    const endpoint = {
      mainPoint: "publicEvent",
      secondePoint: "edit",
      mainId: id
    }
    generalDelete({ endpoint })
    navigate('/app/infor')

  }
  if (publicEvent.author) {
    return (
      <div className='width-100 flex-column ac-center ai-center jc-center ji-center' >
        <div className='height-30px width-100 ' onClick={() => { navigate('/app/infor') }} > <BiChevronsLeft className='height-30px' /> </div>
        <div className=' border-1-grey border-radius-10 width-80 minheight-200px flex-column ac-center ai-center jc-center ji-center' >
          <div className='height-50px bgc-grey width-100' >

          </div>
          <div className='flex-row m-t-20px' >
            <div className='flex-column' >
              <h1>{publicEvent.title}</h1>
              <div>{publicEvent.author.name}</div>
              <div>{publicEvent.date.start}</div>
            </div>
          </div>
          <div className='m-t-20px m-x-30px' >
            {publicEvent.description}
          </div>
          <div onClick={() => { deleteHandler() }} className='m-t-20px height-50px bgc-grey width-100' >
            <div id='anouncementDelete' className=' height-50px width-50 flex-row ac-center ai-center jc-center ji-center ' >
              <div>Delete</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PublicEvnetDetail
