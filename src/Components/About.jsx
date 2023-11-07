import React from 'react'

const About = () => {
  return (
    <div className="mt-20 flex gap-10 justify-between">
    <div className="flex flex-col  w-[40%]">
      <div className="flex gap-2 items-center ">
        <div className=" flex flex-col items-center">
          <h1 className="text-9xl ">2</h1>
          <p className=" tracking-[.25em] font-bold ">Years</p>
        </div>
        <div>
          <p className="text-2xl font-bold">
            of working experience as a web designer & developer
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[18px] text-justify">
          I am a person who is positive about every aspect of life. I found
          my interest in web development by the experiments that I did in
          from my undergraduate. I am very passionate about my work.
        </p>
      </div>
    </div>
    <div>
      <div className="flex gap-3  ">
        <img
          className="shadow-lg h-40 w-50 object-fit rounded-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-out hover:ease-in"
          src="./images/react.png"
          alt=""
        />

        <img
          className="shadow-lg h-40 w-50 object-fit rounded-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-out hover:ease-in"
          src="./images/js.png"
          alt=""
        />

        <img
          className="shadow-lg h-40 w-50 object-fit rounded-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-out hover:ease-in"
          src="./images/tailwind.png"
          alt=""
        />
      </div>
      <div>
        <p className=" mt-10 text-lg font-semibold ">
          Project completed |{" "}
          <span className="text-blue-400 font-bold ">10+</span>
        </p>
        <p className="text-[18px]">
          I have completed so many projects. All the projects that I use the
          above materials efficiently
        </p>
      </div>
    </div>
  </div>
  )
}

export default About
