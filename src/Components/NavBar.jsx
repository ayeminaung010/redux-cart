import React from 'react'
import {FaShopware} from 'react-icons/fa'
import {BiCart} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <Link to={'/'} className=' text-decoration-none navbar-brand fw-bold d-flex align-items-center'>
          <FaShopware className=' text-primary me-2' />
          MyShop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex gap-2 justify-content-end" id="navbarSupportedContent">
          <button className=' btn btn-primary'>
            <BiCart className=' '/> 10
          </button>
          <Link to={'/fav'}>
            <button className='  btn btn-danger'>
                <AiFillHeart className=''/>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar