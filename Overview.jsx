import React from 'react'

export default function Overview() {
const overview =[
{
     title: "Total Users",
     number: "24,780"
},
{
    title:"Revenue",
    number:"$18,800"
},
{
    title:"Sessions",
    number:"76,489"
},
{
    title:"Bounce rate",
    number:"24.5%"
}
]
  return (
    <div className="py-16 px-6 bg-gray-200 rounded">
      
      {/* Heading */}
      <h1 className="font-extrabold text-4xl mb-4">
        Overview
      </h1>

     

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {overview.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            
            
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            {/* number */}
            <p className="text-gray-500 text-sm leading-6">
              {item.number}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
