import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'
import { useAppContext } from '../../../../context/AppContext'
import { useNavigate } from 'react-router-dom'



const UserAdminModual = ({ u, type, datas }) => {
  const [edit, setEdit] = useState(false)
  const [values, setValues] = useState('')
  const { generalUpdate, getMembers } = useAppContext()
  const navigate=useNavigate()
  useEffect(() => {
    setValues({
      SgaOffcier: u.SgaOffcier,
      AdminRole: u.AdminRole
    })
  }, [])
  const onChangeHandler = (e) => {
    setValues(e.target.value);
  }

  const sgaStatusOnClickHandler = (e) => {
    e.preventDefault();
    const endpoint = {
      mainPoint: 'admin',
      secondePoint: 'edit',
      mainId: u._id
    }

    const data = {
      SgaOffcier: !u.SgaOffcier,
      AdminRole: u.AdminRole
    }
    generalUpdate({ endpoint, data }).then(() => {
      getMembers({ type: 'all' })
    })
  }

  const adminRoleOnChangeHandler = (e) => {
    e.preventDefault();
    const endpoint = {
      mainPoint: 'admin',
      secondePoint: 'edit',
      mainId: u._id
    }

    const data = {
      SgaOffcier: u.SgaOffcier,
      AdminRole: values
    }
    generalUpdate({ endpoint, data }).then(() => {
      if (!datas) {
        getMembers({ type: type })
      }
      if (datas) {
        getMembers({ type: type, data: datas })
      }
    })
  }


  return (
    <div className=' border-1-grey felx-row width-80 ac-center ai-center jc-center ji-center m-t-30px ' >
      <div className='flex-column ac-center ai-center jc-center ji-center' >
        name:{u.name}
        <br />
        email:{u.email}
      </div>
      <div className='flex-column ac-center ai-center jc-center ji-center'>
        sgastauts: {u.SgaOffcier ? <div>is sga member</div> : <div>not sga member</div>}
        adminrole:{u.AdminRole}
        <button className='b-btn' onClick={() => { setEdit(!edit) }} >edit</button>
      </div>
      {
        edit && <div className='flex-column ac-center ai-center jc-center ji-center' >
          {u.SgaOffcier ? <button onClick={sgaStatusOnClickHandler} >withdraw sga member ship</button> : <button onClick={sgaStatusOnClickHandler} >give sga member ship</button>}
          <form onSubmit={adminRoleOnChangeHandler} >
            <select name='AdminRole' onChange={onChangeHandler} >
              <option name='AdminRole' value='rbc student' >rbc student</option>
              <option value='president' name='AdminRole' >president</option>
              <option value='vice president' name='AdminRole' >vice president</option>
            </select>
            <button>change admin</button>
          </form>
        </div>
      }
    </div>
  )
}

export default UserAdminModual
