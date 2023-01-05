import React from 'react'
import { MagnifyingGlass } from  'react-loader-spinner'


const Loader = () => {
  return (
    <div className=' d-flex justify-content-center align-items-center my-5'>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = '#ffffff'
          color = '#2192FF'
        />
    </div>
  )
}

export default Loader