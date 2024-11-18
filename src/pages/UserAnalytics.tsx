import React from 'react'
import ShadowCard from '../components/ShadowCard'
import Navbar from '../components/Navbar'

const UserAnalytics = () => {
    const analytics = [
        {
            label: 'total users',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'active users',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'number of counsellings booked',
            number: '20k',
            content: '20% increase from last sunday'
        },
    ]
  return (
    <>
    <Navbar />
    <div className='w-full px-10 my-10'>
       <div className='text-secondary font-bold text-4xl my-10'>User Analytics</div>
      <div>
        <div className='flex w-full justify-between items-center'>
            {analytics.map(analytic => (
                <ShadowCard item ={analytic}/>
            ))}
        </div>

        <div className='items-center justify-center my-10 mx-auto'>
            <img src='/analytics.png' className='w-full h-[70vh]'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserAnalytics
