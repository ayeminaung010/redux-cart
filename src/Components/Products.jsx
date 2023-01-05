import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../api'
import {  AddProducts } from '../services/productSlice';
import Card from './Card';
import Loader from './Loader';

const Products = () => {
  const dispatch = useDispatch();
  
  const products = useSelector(state => state.product.products);

  const getProductsData = async() =>{
    const data = await getData('/products');
    dispatch(AddProducts(data));
  } 

  useEffect(() => {
    getProductsData();
  },[])
  
  return (
    <>
      {products.length === 0 ? <Loader/> :
      <div className=' d-flex flex-wrap gap-3 mt-5 mx-2 justify-content-center '>
        {products?.map((product) =>(
          <Card key={product.id} product={product}/>
        ))}
      </div>}
    </>
  )
}

export default Products