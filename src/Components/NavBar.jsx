import React from 'react'
import {FaShopware} from 'react-icons/fa'
import {BiCart} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const cart = useSelector(state => state.cart.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <Link to={'/'} className=' text-decoration-none navbar-brand fw-bold d-flex align-items-center'>
          <FaShopware className=' text-primary me-2' style={{ fontSize:'35px' }} />
          MyShop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex gap-2 justify-content-end" id="navbarSupportedContent">
          <Link to={'/cart'}>
            <button type="button" className="btn btn-primary position-relative">
              <BiCart className=' fs-4'/>  
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart?.length}
              </span>
            </button>
          </Link>

          <Link to={'/fav'}>
            <button className='  btn btn-danger'>
                <AiFillHeart className=' fs-4'/>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar