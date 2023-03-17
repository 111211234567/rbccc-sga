import React from 'react'
import { BiFile } from "react-icons/bi";
import css from '../../backSide/style/shareLayout.css'
import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';

const FrontEndAgendaModual = ({ theAgenda }) => {
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
  return (
    <button onClick={()=>{onClickHandler()}} className=' debutton bgc-white width-50 height-100 flex-row ac-center ai-center jc-center ji-center border-b-1-grey' >
        <BiFile className='height-80px m-r-10 width-80px ' />
        <div className='m-r-30px' > <h3> meeting date:{theAgenda.date}</h3></div>
    </button>
  )
}

export default FrontEndAgendaModual
