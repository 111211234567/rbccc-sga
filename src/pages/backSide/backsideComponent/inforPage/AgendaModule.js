import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import css from '../../style/shareLayout.css'

const AgendaModule = ({ theAgenda }) => {
    const navigate = useNavigate()
    const { getOneAgenda, agenda, generalDelete, getAllAgenda } = useAppContext()
    const [src, setSrc] = useState('')
    function debugBase64(base64URL) {
        var win = window.open();
        win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; margin:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }
    const onClickHandler = async () => {
        await getOneAgenda(theAgenda._id)
        if (agenda.file) {
            debugBase64(agenda.file)
        }
    }
    const deletehandler = () => {
        const endpoint = {
            mainPoint: 'agenda',
            secondePoint: 'edit',
            mainId: theAgenda._id
        }
        generalDelete({ endpoint })
        getAllAgenda()
    }
    return (
        <div className=' p-b-10px border-t-10px flex-row ac-center ai-center jc-center ji-center border-b-1-grey' >
            <div className='m-r-30px' >{theAgenda.date}</div>
            <div className='m-r-30px' onClick={onClickHandler} >click here to see detail</div>
            <button className='b-warning-btn' onClick={() => { deletehandler() }} >delete</button>
        </div>
    )
}

export default AgendaModule
