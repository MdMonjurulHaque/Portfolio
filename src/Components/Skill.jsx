import React from "react";
import { AiFillHtml5 } from 'react-icons/ai';
import { BiSolidFileCss, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';

const Skill = () => {
  return (
    <div className="mt-10 ">
      <h1 className="font-bold">Skills & Experience </h1>
      <p>
        To work in a friendly, learning, and innovative environment to utilize
        my analytical and technical skills to make a glorious contribution to
        human development.Seeking a position in the field of Computer Science
        where I can utilize my skills to further work towards personal and
        professional development and contribute towards the prosperity of the
        organization.
      </p>
      <div className="text-center mt-5">
      <h2>My Skills</h2>
      <div className="flex justify-between gap-10 mt-5 p-5 mx-10 border-2  border-slate-400  ">
      <div >
        <p className="text-lg font-semibold">Languages</p>
        <ul className="flex text-[50px] ">
        <li className="hover:scale-110 transition ease-in-out"> <AiFillHtml5 /> </li>
        <li className="hover:scale-110 transition ease-in-out"><BiSolidFileCss /></li>
        <li className="hover:scale-110 transition ease-in-out"><BiLogoJavascript /></li>
      </ul>
      </div>
      <div>
        <p className="text-lg font-semibold">Framework</p>
        <ul className="flex text-[50px]">
        <li className="hover:scale-110 transition ease-in-out"><BiLogoReact /></li>
        <li className="hover:scale-110 transition ease-in-out"><BiLogoTailwindCss /></li>
      </ul>
      </div>
      
      </div>
      </div>
      
      
    </div>
  );
};

export default Skill;
