import { InfinitySpin, RotatingLines, ThreeDots } from 'react-loader-spinner'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-[100dvw] h-[100dvh] flex items-center justify-center'>
<InfinitySpin
  visible={true}
  width="200"
  color="#379cf6"
  ariaLabel="infinity-spin-loading"
  />
   </div>
  )
}

export default Loader

