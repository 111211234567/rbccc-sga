import React from 'react'
import css from '../../style/shareLayout.css'
import css3 from '../../style/admin/adminNav.css'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const navigate=useNavigate()
  return (
    <div className=' bgc-grey b-container flex-row ac-center ai-center jc-around ji-center' >
      <div onClick={()=>{navigate('/app/admin')}} className='admin-top-nav flex-row ac-center ai-center jc-center ji-center' >
        all user
      </div>
      <div onClick={()=>{navigate('/app/admin/sga')}} className='admin-top-nav flex-row ac-center ai-center jc-center ji-center' >
        sga member
      </div>
      <div onClick={()=>{navigate('/app/admin/name')}} className='admin-top-nav flex-row ac-center ai-center jc-center ji-center' >
        search
      </div>
    </div>
  )
}

export default AdminNav
