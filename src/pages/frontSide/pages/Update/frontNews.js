import React from 'react'
import css from '../../../backSide/style/shareLayout.css'
import { useAppContext } from '../../../../context/AppContext'
import { FrontEndNewsModual, FrontLoading } from '../../frontEndModule'
import { useEffect } from 'react'

const FrontNews = () => {
    const { getAllNews, news, generalPost, user } = useAppContext()
    useEffect(() => {
        getAllNews()
    }, [])
    if (news.length === 0) {
        return <FrontLoading />
    } else {
        return (
            <div className='beige' id='infor-newspage-container flex-column flex-center ' >
                <div className='width-100 flex-column ai-center ji-center'>
                    <h1>News</h1>
                    {news.slice(0).reverse().map((n) => {
                        return < FrontEndNewsModual News={n} />
                    })}
                </div>
            </div>
        )
    }
}

export default FrontNews

