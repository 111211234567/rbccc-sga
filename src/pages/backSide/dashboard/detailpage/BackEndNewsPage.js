import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import css from '../../style/shareLayout.css'

const BackEndNewsPage = () => {
    const { getOneNews, theNew } = useAppContext()
    const { id } = useParams()
    useEffect(() => {
        getOneNews(id)
    }, [])
    return (
        <div className='flex-column flex-ceter' style={{ display: 'block', width: 1515 }}>
            <Carousel>
                {theNew.img?.map((i) => {
                    return (
                        <Carousel.Item interval={15000}>
                            <img
                                className=" maxheight-700px d-block maxwidth-700px"
                                src={i}
                                alt="Image One"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default BackEndNewsPage
