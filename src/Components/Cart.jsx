import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdCleaningServices} from 'react-icons/md'
import {BsCartCheck} from 'react-icons/bs'
import {TbMoodEmpty} from 'react-icons/tb'
import {AiOutlineShoppingCart} from 'react-icons/ai'


import CartItem from './CartItem'
import { cleanCart } from '../services/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart.cart)
    const [total,setTotal] = useState(0);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const increasePrice = price =>{
        setTotal(total + price)
    }
    const decreasePrice = price =>{
        setTotal(total - price)
    }

    const cleanALlCart =() =>{
        setTotal(0);
        dispatch(cleanCart())
    }

    const checkOutHandler = () =>{
        cleanALlCart();
        nav('/success');
    }
    useEffect(()=>{
        setTotal(cart?.reduce((a,c) => a + c.price,0))
    },[])


  return (
    <div className="">
        {cart.length > 0 ?
            <div className='my-5 container'>
                <div className="row">
                    <div className="col-7 ">
                        <div className="">
                            {cart?.map( item => (
                                <CartItem  key={item.id} increasePrice={increasePrice} decreasePrice={decreasePrice} item={item}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-5  ">
                        <div className=" d-flex flex-column gap-3 justify-content-center align-items-center shadow-sm py-5">
                            <h2 className=' text-primary fw-bold'>Order Summary</h2>
                            <h4>Total - $ {total.toFixed(2)}</h4>
                            <button onClick={checkOutHandler} className=' btn btn-primary  d-flex gap-2 align-items-center'>
                                <BsCartCheck className=' fs-4'/>
                                Proceed to Checkout
                            </button>
                            <button onClick={cleanALlCart} className=' btn btn-outline-danger  d-flex gap-2 align-items-center px-5 '>
                                <MdCleaningServices className=' fs-4 '/>
                                Clean Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        : 
        <div className=' d-flex justify-content-center align-items-center flex-column gap-3 my-5'>
            <h3 className=' text-danger fw-bold d-flex align-items-center gap-2'> <TbMoodEmpty className=' fs-2'/>Your Cart is Empty</h3>
            <button onClick={() => nav('/')} className=' btn btn-primary d-flex align-items-center gap-2'> <AiOutlineShoppingCart className=' fs-3'/>Go Shopping</button>
        </div>
        }
    </div>
    
  )
}

export default Cart