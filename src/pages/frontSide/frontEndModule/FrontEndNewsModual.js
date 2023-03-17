import React from 'react'
import css from '../../backSide/style/shareLayout.css'

const FrontEndNewsModual = ({News}) => {
  return (
    <div id='BacksideNews-container' className=' BacksideNews-container flex-column ai-center ji-center ac-denter jc-center ' >
            <div className='BacksideNews-news-element' >{News.title}</div>
            <img src={News.img} className='BacksideNews-img' />
            <div className='BacksideNews-news-element' > {News.description} </div>
            < div className='BacksideNews-news-element' >{News.author.name}</div>
        </div>
  )
}

export default FrontEndNewsModual
