import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsCartPlusFill} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import  {RemoveFromFav}  from '../services/productSlice'
import {TbMoodEmpty} from 'react-icons/tb'
import {GrFavorite} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'



const FavCard = () => {
  const favItem = useSelector(state => state.product.fav)
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  return (
    <div className="">
        {favItem.length > 0 ? 
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
        :
            <div className=' d-flex justify-content-center align-items-center flex-column gap-3 my-5'>
                <h3 className=' text-danger fw-bold d-flex align-items-center gap-2'> <TbMoodEmpty className=' fs-2'/>Your Favourite is Empty</h3>
                <button onClick={() => nav('/')} className=' btn btn-primary d-flex align-items-center gap-2'> <GrFavorite className=' fs-3'/>Add to Favourite</button>
            </div>
        }
    </div>


  )
}

export default FavCard

 