import React from 'react'

const ShadowCard = ({item}) => {
    const { label, number, content } = item;
  return (
    <div className='rounded-lg shadow-sm shadow-black max-w-[350px] h-[200px] gap-3 w-[300px] items-center justify-center flex flex-col p-5'>
      <div className='text-3xl'>
        {number}
      </div>
      <div className='text-xl capitalize text-center'>
        {label}
      </div>
      <div className='text-base'>{content}</div>
    </div>
  )
}

export default ShadowCard
