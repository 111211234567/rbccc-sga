import React from 'react'
import infrom from '../style/infor.css'
import { InforPageTopNav, NewsPage } from '../backsideComponent'

const Infor = () => {
    return (
        <div className='container flex-cloumn' >
            <div className='infor-topnav' >
                < InforPageTopNav />
            </div>
            <div id='infor-content' >
                < NewsPage />
            </div>
        </div>
    )
}

export default Infor
