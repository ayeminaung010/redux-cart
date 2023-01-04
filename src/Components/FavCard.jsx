import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsCartPlusFill} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import  {RemoveFromFav}  from '../services/productSlice'



const FavCard = () => {
  const favItem = useSelector(state => state.product.fav)
  const dispatch = useDispatch();
  
  return (
    <div className=' d-flex gap-3 justify-content-center flex-wrap mt-5'>
      {favItem?.map( item => (
          <div className='card ' style={{ width: "18rem" }} key={item.id}>
              <div className="card-body">
                  <img src={item.image} className=' mx-auto mb-3 d-block' style={{ height: "130px" }} alt="" />
                  <div className="titel">
                      <h5 className=' fw-bold'>{item.title.substring(0,20)}...</h5>

                      <span className=' text-primary fw-bold fs-5'>${item.price}</span>
                      <div className=" d-flex gap-2">
                          <button className=' d-flex align-items-center  btn btn-outline-primary mt-3'>
                              <BsCartPlusFill className='fs-5'/>
                          </button>
                          <button onClick={() => dispatch(RemoveFromFav(item))} className=' d-flex align-items-center  btn btn-outline-danger mt-3'>
                              <AiOutlineDelete className='fs-5'/>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      ))}
    </div>
  )
}

export default FavCard