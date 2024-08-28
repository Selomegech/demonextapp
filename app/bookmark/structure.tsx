import React from 'react'




interface Event {
    eventID: string;
    title: string;
    opType: string;
    orgName: string;
    datePosted: string;
    dateBookmarked: string;
    logoUrl: string;
    location: string;
}



const Structure = ({data} : { data: Event }) => {
  return (
    <div className=" relative w-3/4 h-auto bg-white shadow-lg rounded-lg mx-auto flex flex-col text-sm py-10">
     
      <div className="flex">
        <div className=" flex ">
          <div className="w-20% px-8 text-gray-600 ">
            <p className="mt-10">
              <img
                src={data.logoUrl}
                alt="myimage"
                width={100}
                height={100}
              />
            </p>
          </div>

          <div className="w-80% mt-10 px-8 flex flex-col  space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
            <p className="text-gray-600 leading-relaxed">{data.orgName}</p>
            <div className="flex flex-row space-x-4">
              <div className="bg-green-100 h-12 border-green-600 border-2  text-green-600 rounded-full  px-6 py-3 flex justify-center items-center">
                In person
              </div>
              <div className='absolute bottom-0 right-0 my-10 px-10'>
                {data.datePosted}
              </div>
              <div className='absolute bottom-0 right-0 my-4 px-10' >
                {data.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure
