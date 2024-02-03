import React, { useEffect, useState } from 'react'
import {FaBars } from 'react-icons/fa'
import {modeOps, navOps, socialLinks, imgsk} from "./data/navData"
 

const Navbar = () => {


const [isOpen, setIsOpen] = useState(false)
const [theme, setTheme] = useState('light')
const [darkBG, setDarkBG] = useState(false)

 
  


    

  const closeAllBar = () => {
    setDarkBG(false)
    setIsOpen(false)
  }
  
  const handleNav = () => {
    setIsOpen(!isOpen)
    isOpen ? setDarkBG(false) : setDarkBG(true)
  }


  
  useEffect(() => {
    switch (theme) {

      case 'light':
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", theme)
        break;

      case 'moon':
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", theme)
        break;

      default:
        localStorage.removeItem("theme")

        break;

    }

  }, [theme])


  return (
    <>
    <div className={`bg-gray-100 dark:bg-neutral-900 text-xl min-w-[280px] h-screen fixed top-0 ${isOpen? "left-0":"-left-full"} bottom-0 lg:sticky lg:left-0 lg:top-0 xl:w-[310px] z-[2222] transition-all duration-300`}>

     <div className=' flex items-center justify-center pt-8 flex-col gap-2'>
        <img src={imgsk} className='w-32 h-32 bg-cover rounded-full  border-8 border-indigo-400' alt="sk" />
        <h4 className='text-xl font-bold font-[Arial] text-slate-800 dark:text-slate-100 mt-2'>  <span className='text-2xl tracking-wide text-indigo-500/90'>S</span>achin <span className='text-2xl tracking-wide text-indigo-500/90'>K</span>umar</h4>
        <div>
            <ul className='flex gap-2.5'> 
                    {
                        socialLinks.map(socilIcon => {
                            return (
                                <li>
  <a href='#'  className='text-sm p-3 rounded-full hover:bg-indigo-500 hover:text-white block text-slate-700 bg-slate-200 duration-300 '>{socilIcon.text}</a>
                                    </li>
                            )
                        })
                    }
                   
            </ul> 
           
        </div>
     </div>
     <div className='mt-10'>
        <ul className='px-5 '>
            {
                navOps.map((item, index) => {
                    return (
                        <li className='flex gap-3 items-center group  px-1 py-2' key={index}>
                        <i className='text-slate-700 text-2xl dark:text-slate-100 group-hover:text-indigo-500 duration-300'>{item.icon}</i>
                         <span className='text-slate-600 text-base font-semibold dark:text-slate-200 group-hover:text-slate-900  dark:group-hover:text-slate-50 duration-300'>{item.text}</span>
                    </li>
                    )
                })
            }
          {/* mode butons */}
          <div className='space-x-2 py-1 px-4 text-sm md:text-base mt-12   rounded-xl  inline-flex max-w-min bg-indigo-500/90'>
                {modeOps.map(op => {
                  return <button onClick={() => setTheme(op.text)} key={op.text} className={` ${theme === op.text && "bg-sky-600 dark:bg-slate-900/80"}   text-xs p-1.5 rounded-lg text-white  `}>{op.icon}</button>
                })
                }
              </div>

               </ul>
     </div>
    </div>
    <div onClick={handleNav} className='fixed lg:hidden top-5 right-9 z-[2200] bg-yellow-400/80 hover:bg-yellow-300/90 px-3 py-2 active:bg-yellow-300/70  duration-200 rounded-md block'>
    <FaBars/>
</div>

<div onClick={closeAllBar} className={`layer bg-gray-800/20 ${darkBG ? "block" : "hidden"} dark:bg-gray-900/70  w-[100vw] z-10  fixed top-0 left-0 right-0   h-[100vh]`}></div>
    </>
  )
}

export default Navbar
