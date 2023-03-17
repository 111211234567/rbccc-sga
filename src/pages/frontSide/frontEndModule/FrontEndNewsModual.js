import React from 'react'
import css from '../../backSide/style/shareLayout.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const FrontEndNewsModual = ({News}) => {
  return (
    <div id='BacksideNews-container' className=' BacksideNews-container flex-column ai-center ji-center ac-denter jc-center ' >
            <div className='BacksideNews-news-element' >{News.title}</div>
            <Carousel className=' ' >
                {News.img?.map((i) => {
                    return (
                        <Carousel.Item className='p-x-10px' interval={15000}>
                            <img
                                className=" minheight-400px p-x-10px  d-block maxheight-1000px maxwidth-1000px"
                                src={i}
                                alt="Image One"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div className='BacksideNews-news-element' > {News.description} </div>
            < div className='BacksideNews-news-element' >{News.author.name}</div>
        </div>
  )
}

export default FrontEndNewsModual
