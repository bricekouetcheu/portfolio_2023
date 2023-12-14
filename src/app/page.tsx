import brice from "../app/Assets/brice3.png"
import Image from 'next/image'
import download from "../app/Assets/download.png"
import React from "react"

const Home: React.FC = ()=> {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-slate-50 scroll-smooth m-0 p-0" >
      <nav className=" h-24 w-screen border-solidb border-black  flex justify-between items-center px-32 ">
        <h2 className="font-extrabold text-3xl "> BRICE RONALD</h2>
         <ul className="flex justify-center items-center p-2 ">
            <li className="p-10 cursor-pointer hover:scale-110 motion-reduce:transform-none"> ABOUT ME</li>
            <li className="p-10 cursor-pointer hover:scale-110 motion-reduce:transform-none "> PROJECTS</li>
            <li className="p-10 cursor-pointer hover:scale-110 motion-reduce:transform-none"> CONTACTS</li>

         </ul>

      </nav>

      <div className="mt-20 px-32  flex justify-around items-center h-auto gap-16" >
        <div className="flex-col justify-start w-1/2 gap-10" >
          <p className="text-6xl font-extrabold py-9"><span className="text-xl font-normal">Hello, I am </span > Brice Kouetcheu</p>
          <p className="py-5">Passionate about IT, I am a young graduate in IT technology, currently doing a master degree in data science. 
            My academic background has equipped me with solid technical skills, while my passion for new technologies has pushed me to specialize in data science. I strongly believe in the power of technology to create positive impact, and I am enthusiastic about contributing to innovative projects and taking on new challenges.
           Explore my profile to find out more about my skills and career aspirations.</p>
           <button className=" gap-2 w-fit flex 
           justify-around items-center bg-slate-900 hover:scale-110 duration-700
           motion-reduce:transform-none text-white font-bold py-2 px-4 rounded-full
            border-white border ">
             MY RESUME <Image src={download} width={15}
            height={15} alt="profil"/>
          </button>
        </div>
        <div className=" w-1/2">
          <Image src={brice} width={550}
            height={600} alt="download"/>
        </div>
      </div>

      <div className=" mt-40 px-32  flex flex-col justify-around items-center h-auto gap-16" >
        <h1 className="font-bold "> Mes Projets</h1>
        
      </div>
      
      
    </div>


  )
}

export default Home