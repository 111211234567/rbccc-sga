import React from 'react';
import mainStyle from '../frontSide/styles/mainStyle.css'
import ShareLayoutOfFront from './ShareLayoutOfFront';
import CarouselP from './CarouselP';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <div className="main">
                <ShareLayoutOfFront />
                <div className="mainBody">
                    <div className="who-we-are">
                        <h className="hText">
                            WHO WE ARE
                        </h>
                    </div>
                    <div className="carousel">
                        <CarouselP/>                    
                    </div>
                    <div className="sherman">
                        <h className="hsText">
                            SHERMAN
                        </h>
                        <div className="shermanCarousel">
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )

}
export default MainPage