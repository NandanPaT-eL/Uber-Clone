import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-[url(/Users/nandanpatel/Projects/Uber/Frontend/src/assets/home_bg.png)] pt-20 h-screen flex justify-between flex-col w-full bg-red-400 items-center">
        <img className="w-50" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className=' w-full bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>
                Get Started with Uber
            </h2>
            <Link to='/login' className='flex intems-center justify-center py-3 w-full bg-black text-white rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
