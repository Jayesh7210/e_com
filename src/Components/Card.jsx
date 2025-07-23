import React from 'react'
import tailwindcss from 'tailwindcss';


function Card() {

const  data = [
    {image : "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Full Stack", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!" ,instock: true},
    {image : "https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Front End", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!",instock: true},
    {image : "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "back End", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!",instock: true},
    {image : "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "java", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!",instock: false},
    {image : "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "cloud", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!",instock: true},
    {image : "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "react", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!",instock: false},
    {image : "https://images.unsplash.com/photo-1626968361222-291e74711449?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "python", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa!",instock: true},
]
  return (
    <div className='w-full grid grid-cols-5 h-screen p-4 bg-gray-900 flex justify-center items-center gap-3'>
        {data.map((item, index) => (
            
            <div key={index} className='w-62 px-3 py-4 bg-gray-950  rounded-lg'>
         <div className='w-full h-32 bg-gray-800'>
            <img className='w-full h-full object-cover' src={item.image} alt="" />
         </div>
         <div className='w-full px-3 py-4 mt-2 dark:text-white'>
            <h2 className='font-bold'>{item.title}</h2>
            <p className='text-xs mt-3'>{item.description}</p>
         </div>
         <button className={`w-full py-2 mt-2 ${item.instock ? "bg-blue-600" : "bg-gray-600"} text-white rounded-lg`}>
           {item.instock ? "In Stock" : "Out of Stock"}
         </button>

        </div>))}
    </div>
  )
}

export default Card