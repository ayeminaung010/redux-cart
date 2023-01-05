import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Success = () => {
  const nav = useNavigate();
  return (
    <div className=' d-flex justify-content-center align-items-center flex-column gap-3 my-5'>
        <h3 className=' text-success fw-bold '>Thanks For Purchasing</h3>
        <button onClick={() => nav('/')} className=' btn btn-primary d-flex align-items-center gap-2'> <AiOutlineShoppingCart className=' fs-3'/>Go Shopping</button>
    </div>
  )
}

export default Success