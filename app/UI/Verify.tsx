import React from 'react'

const Verify = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="flex-col items-center justify-center w-[30%] h-24  ">
        <form>
          <div className="flex justify-center my-4 ">
            <h1 className=" font-bold text-4xl text-gray-700 ">
              Verify Email
            </h1>
          </div>
          <div className="flex  space-x-4 justify-between my-10">
            <p className='text-gray-500'>We've sent a verification code to the email address you provided To complete the verfication process, please enter the code here.</p>
          </div>
          <div className="flex justify-center mt-8">
    <div className="flex space-x-2">
      <input type="text" placeholder='0' className="w-12 h-12 text-center text-2xl   border-indigo-500 rounded  bg-gray-100 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 required:" />
      <input type="text" placeholder='0' className="w-12 h-12 text-center text-2xl   border-indigo-500 rounded focus:outline-none  bg-gray-100 border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <input type="text" placeholder='0'  className="w-12 h-12 text-center text-2xl   border-indigo-500 rounded focus:outline-none  bg-gray-100 border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <input type="text" placeholder='0' className="w-12 h-12 text-center text-2xl   border-indigo-500 rounded focus:outline-none  bg-gray-100 border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      
    </div>
  </div>
          <div className="my-8 flex items-center justify-center space-x-2">
            <p className='text-gray-500'>You can request to  <span className='text-indigo-700'>Resend code</span> in <span className='text-indigo-700'>0:30</span></p>
            
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-900"
          >
            Continue
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default Verify
