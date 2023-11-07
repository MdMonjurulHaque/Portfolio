import React from 'react'

const Project = () => {
  return (
    <div className='mt-10 font-bold'>
     <h1>My Project</h1>
     <div className='flex justify-between mt-5'>
        <a href="https://review-app-mir.netlify.app"><img className='w-[300px] h-[300px] ' src="images/review.PNG " alt="" /></a>
        <a href="https://blogsite-postbook-mir.netlify.app/"><img className='w-[300px] h-[250px]' src="images/postbook.PNG " alt="" /></a>
        <a href="https://tour-app-mir.netlify.app"><img className='w-[300px] h-[250px] ' src="images/tour.PNG " alt="" /></a>
        
     </div>
     <div className='flex justify-center mt-5 gap-5'>
       <a href="https://faq-app-mir.netlify.app/"><img className='w-[300px]  h-[250px] ' src="images/faq.PNG " alt="" /></a>
        <a href="https://menu-app-mir.netlify.app/"> <img className='w-[400px] h-[300px]' src="images/menu.PNG " alt="" /></a>
       

     </div>
    </div>
  )
}

export default Project
