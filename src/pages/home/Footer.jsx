import React from 'react'
import logo from "/image/Cloudy.png"


const Footer = () => {
  return (
    <div className=' px-10 xl:py-2 py-4 bg-gray-200'>
        <div className='md:h-[270px]'>
            <div className='md:flex justify-between items-center'>
                <div>
                    <div className='flex items-center gap-2'>
                      <img src={logo} height={50} width={50} alt="" />
                         <p className='text-2xl text-black font-bold'>CloudScape</p>
                    </div>
                    <div className='mt-5 leading-10'>
                        <p className='text-wrap   leading-none '>Lorem ipsum dolor, sit amet <br /> Illo sequi amet et nobis repudiandae  magnam?</p>
                        <p className='font-bold text-lg'>Ehikhamwen Confidence Ebosetale</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-20 mt-5 '>
                        <div className='flex flex-col'>
                           <h6 className='font-bold'>Nike</h6>
                            <a href='/'>Shoe</a>
                            <a href='/'>Hoodies</a>
                            <a href='/'>Slides</a>


                        </div>
                        <div className='flex flex-col'>
                           <h6 className='font-bold'>Adidas</h6>
                            <a href='/'>Shoe</a>
                            <a href='/'>Hoodies</a>
                            <a href='/'>Slides</a>


                        </div>
                        <div className='flex flex-col'>
                           <h6 className='font-bold'>Gucci</h6>
                            <a href='/'>Shoe</a>
                            <a href='/'>Hoodies</a>
                            <a href='/'>Slides</a>


                        </div>
                       
                    </div>
                </div>
                <div className='md:mt-5 md:flex flex-col'>
                    <input placeholder='Your Email' className='h-10 w-96 mb-1 rounded-md p-2' type="text" />
                    <textarea className='  md:h-40 w-96 rounded-md p-2' placeholder='Your FeedBack' name=""  id=""></textarea>
                    <button className='bg-slate-700 text-white rounded-md h-10 mt-2 hover:bg-slate-600'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
