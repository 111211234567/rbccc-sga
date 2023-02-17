import React from 'react'
import css from '../../style/shareLayout.css'
import thecss from '../../style/BacksideNews.css'

const BacksideNews = ({ news }) => {
    return (
        <div id='BacksideNews-container' className=' BacksideNews-container flex-column ai-center ji-center ac-denter jc-center ' >
            <div  >{news.title}</div>
            <img src={news.img} />
            <div className='BacksideNews-news-element' > {news.description} </div>
            <div>{news.author.name}</div>
        </div>
    )
}

export default BacksideNews
