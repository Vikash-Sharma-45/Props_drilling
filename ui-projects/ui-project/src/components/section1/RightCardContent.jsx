import React from 'react'

const RightCardContent = (props) => {
  return (
    
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='h-12 w-12 rounded-full bg-white items-center justify-center flex text-2xl font-semibold'>{props.id+1}</h2>
        <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, mollitia.
        </p>
        <div className='flex justify-between '>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <i class="ri-arrow-right-line bg-blue-600 text-white font-medium px-3 py-2 rounded-full"></i>
        </div>
    </div>
  )
}

export default RightCardContent
