import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/AppContext'
import { UserAdminModual } from '../../backsideComponent'
import css from '../../style/shareLayout.css'

const NameSearchAdmin = () => {
  const { getMembers, memebrs } = useAppContext()
  const [datas, setDatas] = useState('')
  const type = 'name'
  // useEffect(() => {
  //   getMembers({ type, data })
  // }, [])
  const onChangeHandler = (e) => {
    e.preventDefault();
    setDatas(e.target.value);
  }
  const onShubmitHandler=(e)=>{
    e.preventDefault();
    const data=datas
    getMembers({ type, data })
  }
  return (
    <div className='flex-column width-100 ac-center ai-center jc-center ji-center' >
      <form onSubmit={onShubmitHandler} className=' m-t-30px flex-row ac-center ai-center jc-center ji-center' >
        <input className='input' onChange={onChangeHandler} />
        <button className='b-btn'>search</button>
      </form>
      {memebrs?.map((m)=>{
                return <UserAdminModual key={m.name} u={m} datas={datas}  />
            })}
    </div>
  )
}

export default NameSearchAdmin
