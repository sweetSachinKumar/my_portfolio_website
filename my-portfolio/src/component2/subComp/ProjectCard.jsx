import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai' 



const ProjectCard = ({data,  setOpenOvl, productDtl}) => {
  const { description, githubLink, webLinkToGo, title, thumbnail} = data
  // console.log(data)

  const handleProductDtl = () => {
    productDtl(data)
    setOpenOvl(true)
  }

  return (
    <div className=' group-box shadow-xl shadow-indigo-700/20 hover:shadow-indigo-700/10 overflow-hidden group  border-indigo-600  duration-500 transition-all  relative rounded-md max-w-[400px] w-full'>
    <img src={thumbnail} className='w-full z-10   h-full object-cover' alt="img" />
   
    <div className='absolute opacity-0 hover:opacity-100 hover:top-0 ease-in-out top-12 duration-500 transition-all left-0 bg-indigo-800/40 h-full w-full flex items-center justify-between pt-10 pb-1 flex-col z-40 '>
      <h3  className=" mb-3 md:font-semibold text-xl md:text-2xl font-medium leading-tight  text-white">{title}</h3>
      
      <div className='flex justify-center items-center gap-4 flex-wrap'>
                <a target='_sachin' href={webLinkToGo} className=' text-sm lg:text-base px-2 py-1 bg-yellow-600/80 text-white hover:bg-yellow-500/90 cursor-pointer  rounded-sm  gap-2 flex items-center'>
                 <i> <BiWorld/> </i>
                 <span className='hidden sm:inline-block'> go to Website</span>  <span className='sm:hidden inline-block'>website</span></a>
                <a href={githubLink} target='_sachin' className=' text-sm lg:text-base px-2 py-1 bg-yellow-600/80 text-white hover:bg-yellow-500/90 cursor-pointer  rounded-sm   gap-2 flex items-center '>
                    <i > <BsCodeSlash /> </i>
                    <span> view code </span>
                </a>
               
            </div>
            <div onClick={handleProductDtl} target='_sachin' className=' text-sm lg:text-base p-1.5 bg-indigo-600/80 text-white hover:bg-indigo-500/90 cursor-pointer  rounded-sm   gap-2 flex items-center justify-center w-9/12 mx-auto '>
                    <i > <AiOutlineInfoCircle /> </i>
                    <span> details </span>
                </div>
     
    </div>
  </div>
  )
}

export default ProjectCard
