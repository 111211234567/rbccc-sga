import React, { useEffect } from 'react'
import { useAppContext } from '../../../../context/AppContext'
import { UserAdminModual } from '../../backsideComponent'
import css from '../../style/shareLayout.css'

const AdminMainpage = () => {
    const { getMembers, memebrs } = useAppContext()
    const type='all'
        const data=''
    useEffect(()=>{
        getMembers({type,data})
    },[])
    return (
        <div className='flex-column width-100 ac-center ai-center jc-center ji-center' >
            {memebrs?.map((m)=>{
                const type='all'
                return <UserAdminModual key={m.name} u={m} type={type}  />
            })}
        </div>
    )
}

export default AdminMainpage
