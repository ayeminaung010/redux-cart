import React from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { AddToFav } from '../services/productSlice'


const Card = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div className='card ' style={{ width: "18rem" }}>
        <div className="card-body">
            <img src={product.image} className=' mx-auto mb-3 d-block' style={{ height: "130px" }} alt="" />
            <div className="titel">
                <h5 className=' fw-bold'>{product.title.substring(0,20)}...</h5>

                <span className=' text-primary fw-bold fs-5'>${product.price}</span>
                <div className=" d-flex gap-2">
                    <button className=' d-flex align-items-center  btn btn-outline-primary mt-3'>
                        <BsCartPlusFill className='fs-5'/>
                    </button>
                    <button onClick={() => dispatch(AddToFav(product))} className=' d-flex align-items-center  btn btn-outline-danger mt-3'>
                        <AiFillHeart className='fs-5'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card