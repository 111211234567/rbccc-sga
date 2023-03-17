import React from 'react'
import css from '../../../backSide/style/shareLayout.css'
import { useAppContext } from '../../../../context/AppContext'
import { FrontEndNewsModual } from '../../frontEndModule'
import { useEffect } from 'react'

const FrontNews = () => {
    const { getAllNews, news, generalPost, user } = useAppContext()
    useEffect(() => {
        getAllNews()
    }, [])
  return (
    <div className='' id='infor-newspage-container flex-column ' >
            <div className='width-100 flex-column ai-center ji-center'>
                {news.slice(0).reverse().map((n) => {
                    return < FrontEndNewsModual News={n} />
                })}
            </div>
        </div>
  )
}

export default FrontNews

