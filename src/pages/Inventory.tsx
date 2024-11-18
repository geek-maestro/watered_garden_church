import React from 'react'
import ShadowCard from '../components/ShadowCard';
import Navbar from '../components/Navbar';

const Inventory = () => {
    const analytics = [
        {
            label: 'total',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'today',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'previous',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'previous',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'previous',
            number: '20k',
            content: '20% increase from last sunday'
        },
        {
            label: 'previous',
            number: '20k',
            content: '20% increase from last sunday'
        },
    ]

    const users = [
        {
          name: "Gideon",
          branch: "osu",
          phone: "$300",
        },
        {
          name: "Gideon",
          branch: "osu",
          phone: "$300",
        },
        {
          name: "Gideon",
          branch: "osu",
          phone: "$300",
        },
        {
          name: "Gideon",
          branch: "osu",
          phone: "$300",
        },
        {
          name: "Gideon",
          branch: "osu",
          phone: "$300",
        },
        {
          name: "Gideon",
          branch: "osu",
          phone: "$300",
        },
      ];
  return (
    <>
    <Navbar />
    <div className='w-full px-10 my-10'>
        <div className='text-secondary font-bold text-4xl my-10'>Inventory</div>
    <div>
      <div className='flex w-full gap-10 items-center flex-wrap'>
          {analytics.map(analytic => (
              <ShadowCard item ={analytic}/>
          ))}
      </div>

      <div className='my-10'>
        <table className="w-full">
          <thead>
            <tr className="bg-primary bg-opacity-50 text-left">
                <th className="py-2 uppercase text-lg">Branch Name</th>
                <th className="py-2 uppercase text-lg">Pastor</th>
                <th className="py-2 uppercase text-lg">Offertory</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td className="py-2 border-b-2 text-lg">{user.branch}</td>
                <td className="py-2 border-b-2 text-lg">{user.name}</td>
                <td className="py-2 border-b-2 text-lg">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
  )
}

export default Inventory
