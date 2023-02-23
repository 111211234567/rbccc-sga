import React, { useEffect } from 'react'
import { useAppContext } from '../../../../context/AppContext'

const AdminMainpage = () => {
    const { getMembers, memebrs } = useAppContext()
    const type='all'
        const data=''
    useEffect(()=>{
        getMembers({type,data})
    },[])
    return (
        <div>
            AdminMainpage
            AdminMainpage
            <button onClick={()=>{console.log(memebrs)}} >sad</button>
        </div>
    )
}

export default AdminMainpage
