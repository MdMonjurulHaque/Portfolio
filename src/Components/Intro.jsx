import React from 'react'

const Intro = () => {
  return (
    <head className="flex min-h-screen justify-between items-center">
    <div className="flex gap-5 flex-col justify-center ">
      <p className="text-2xl">I'am</p>
      <h1 className="text-gray-600 font-semibold text-5xl">
        Md Monjurul Haque
      </h1>
      <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-blue pr-5 text-5xl text-blue-500 font-bold">
        Front End Developer.
      </p>
      <div className="flex justify-start">
        {" "}
        <button className="mt-5 border-2 border-blue-600 p-2 rounded-lg bg-blue-500 font-bold text-white hover:shadow-lg hover:scale-105 transition duration-300 ease-out hover:ease-in">
          Download CV
        </button>
      </div>
    </div>
    <div className="pr-10">
      <img
        className="rounded-full w-100 h-100"
        src="./images/profile.png"
        alt=""
      />
    </div>
  </head>
  )
}

export default Intro
