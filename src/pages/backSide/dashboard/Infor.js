import React, { useState } from 'react'
import infrom from '../style/infor.css'
import { InforPageTopNav, NewsPage, Anouncement, Agenda } from '../backsideComponent'

const Infor = () => {
    const [page,setPage]=useState('News')
    const changePage=(pageNam)=>{
        setPage(pageNam)
    }
    const showPage=()=>{
        if(page==='News'){
            return < NewsPage />
        }
        if(page==='Agenda'){
            return < Agenda />
        }
        if(page==='Anouncement'){
            return < Anouncement />
        }
    }
    return (
        <div className='b-container flex-cloumn' >
            <div className='infor-topnav' >
                < InforPageTopNav changePage={page=>changePage(page)} />
            </div>
            <div id='infor-content' >
                {showPage()}
            </div>
        </div>
    )
}

export default Infor
