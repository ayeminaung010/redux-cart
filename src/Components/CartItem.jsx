import React,{useState} from 'react'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../services/cartSlice'


const CartItem = ({item,decreasePrice,increasePrice}) => {
    const [qty ,setQty] = useState(1);
    const dispatch = useDispatch();

    const increaseQty = () =>{
        if(qty >= 1){
            setQty( pre => pre + 1)
            increasePrice(item?.price)
        }
    }

    const decreaseQty = () =>{
        if(qty > 1){
            setQty( pre => pre - 1)
            decreasePrice(item?.price)
        }
    }
    const removePriceHandler = () =>{
        decreasePrice(item?.price*qty)
        dispatch(removeFromCart(item))
    }


  return (
        <div className=" d-flex  gap-3 align-items-center justify-content-between  my-3 shadow py-3 px-4" >
            <div className=" d-flex gap-3">
                <img src={item?.image} height='100px' alt="" />
                <div className=" d-flex flex-column gap-2">
                    <h5>{item?.title}</h5>
                    <span className=' text-primary fw-bolder'>${(item?.price*qty).toFixed(2)}</span>
                    <span onClick={ removePriceHandler}  className=' text-danger fw-light' role={'button'}>Remove</span>
                </div>
            </div>
            <div className=" d-flex flex-column gap-3 justify-content-center align-items-center  user-select-none">
                <IoIosArrowDropupCircle  onClick={ increaseQty} className=' fs-4' role={'button'}/>
                <span className=''>{qty}</span>
                <IoIosArrowDropdownCircle onClick={ decreaseQty}  className=' fs-4' role={'button'}/>
            </div>
        </div>
  )
}

export default CartItem