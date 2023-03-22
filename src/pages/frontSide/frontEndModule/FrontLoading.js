import React from 'react'
import css from '../../backSide/style/shareLayout.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Spinner from 'react-bootstrap/Spinner';

const FrontLoading = () => {
  return (
    < div className='flex-column flex-center width-100 height-100' >
      < AiOutlineLoading3Quarters className='width-50px height-50px' />
      <Spinner animation="border" className='width-50px height-50px' />
      <h2>Loading.......</h2>
      <h3>might take several secondes to connect to database</h3>
    </div>
  )
}

export default FrontLoading
