import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'
import thecss from '../../style/BacksideNews.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../../context/AppContext'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const BacksideNews = ({ News }) => {
    const navigate = useNavigate()
    const [deleteTheNews, setDelete] = useState(false)
    const { generalDelete, getAllNews, news } = useAppContext()
    const deleteNews = () => {
        const endpoint = {
            mainPoint: "news",
            secondePoint: "edite",
            mainId: News._id
        }
        generalDelete({ endpoint })
        getAllNews()
    }
    // BacksideNews-img
    return (
        <div id='BacksideNews-container' className=' BacksideNews-container flex-column ai-center ji-center ac-denter jc-center ' >
            <div className='BacksideNews-news-element' >{News.title}</div>
            {/* <img src={News.img[0]} className='BacksideNews-img' /> */}
            <Carousel className='p-x-10px bgc-grey' >
                {News.img?.map((i) => {
                    return (

                        <Carousel.Item  className=' b-flex flex-center' interval={15000}>
                            <img
                                className=" minheight-400px  d-block maxheight-1000px maxwidth-1000px"
                                src={i}
                                alt="Image One"
                            />
                        </Carousel.Item>

                    )
                })}
            </Carousel>
            <div className='BacksideNews-news-element' > {News.description} </div>
            < div className='BacksideNews-news-element' >{News.author.name}</div>
            <div id='BacksideNews-edite-delete-container' >
                <div className='BacksideNews-edite-delete-element'  ><button onClick={() => { deleteNews() }} id='BacksideNews-delete-btn' >delete</button></div>
                < button className='BacksideNews-edite-delete-element' onClick={() => { navigate(`/app/infor/news/${News._id}`) }} >See detail</button>
            </div>
        </div>
    )
}

export default BacksideNews
