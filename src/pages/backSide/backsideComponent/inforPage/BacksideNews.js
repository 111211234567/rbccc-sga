import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'
import thecss from '../../style/BacksideNews.css'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'

const BacksideNews = ({ News }) => {
    const [deleteTheNews,setDelete]=useState(false)
    const { generalDelete,getAllNews,news } = useAppContext()
    const deleteNews=  ()=>{
        const endpoint={
            mainPoint:"news",
            secondePoint:"edite",
            mainId:News._id
        }
        generalDelete({endpoint})
      getAllNews()
    }
    
    return (
        <div id='BacksideNews-container' className=' BacksideNews-container flex-column ai-center ji-center ac-denter jc-center ' >
            <div className='BacksideNews-news-element' >{News.title}</div>
            <img src={News.img} className='BacksideNews-img' />
            <div className='BacksideNews-news-element' > {News.description} </div>
            < div className='BacksideNews-news-element' >{News.author.name}</div>
            <div id='BacksideNews-edite-delete-container' >
                <div className='BacksideNews-edite-delete-element'  ><button onClick={()=>{deleteNews()}} id='BacksideNews-delete-btn' >delete</button></div>
                < div className='BacksideNews-edite-delete-element' ><Link id='BacksideNews-edite-btn' >edite</Link></div>
            </div>
        </div>
    )
}

export default BacksideNews
