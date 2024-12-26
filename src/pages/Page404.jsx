import React from 'react'
import logo from "/image/404.png"

const Page404 = () => {
  return (
    <div className='mt-60 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='flex flex-col justify-center items-center'>
            <div className=' text-center'>
              <h1 className='text-blue-500 text-4xl'>OOP!</h1>
                <p className='text-blue-500 text-2xl'>page not found!</p>
              <img src={logo} height={950} width={950} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Page404
