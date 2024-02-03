import React from 'react'
import temThum from "../data/assets/amazonThum.png"
import { Link } from 'react-router-dom'
import { BsCodeSlash } from 'react-icons/bs'


const MERNProjectDetail = () => {
  const embedId = "oJM7v0Jpn3E"
  return (
    <div id='MernProject' className='lg:container max-w-[1800vw] mx-auto sm:w-[80vw] w-[80vw] py-24'>

      <h3 className='text-xl text-center py-8 md:text-center text-indigo-800  dark:text-amber-200 font-semibold  mb-4 md:text-3xl '>MERN Projects</h3>

      <div id="name" className='w-full max-w-xl mx-auto z-10 group shadow-xl dark:shadow-indigo-700/20 shadow-indigo-600/50 self-start'>

        <div target='_sachin'
          className="block rounded-lg  bg-gray-100 dark:bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  relative   md:p-4">
          <div className="  overflow-hidden bg-cover bg-no-repeat  flex-1">

            {/* <Video
                    loop
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster={MernThum}
                >
                    <source src={MernVideo} type='video/webm' />
                </Video> */}
            {/* <img src={temThum} alt="img" /> */}
            <iframe  
        className='w-full h-full object-contain'
        src={`https://www.youtube.com/embed/${embedId}`}
         title="Introduction To WiseGPT"
        width="853"
       height="480"
        style={{border:"0"}}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
      />
          </div>

        </div>
        <div className='h-full w-full '>
          <div className="mx-auto mt-5 h-full w-[90%] py-4 px-2">
            <div className="flex flex-col space-y-1 ">
              <div className=' w-full'>
                <h3 className=" text-base font-semibold text-slate-700 dark:text-slate-200 ">This is e-comerce website.
                  Fully responsive with all functionality for both <span className='before:content-[""] before:absolute before:-skew-y-3 before:bg-indigo-500 relative inline-block before:block before:w-full before:h-[28px] text-whites  before:-inset-[2px]  '><span className='relative text-slate-100'> user and vender.</span ></span>. </h3>
                <h4 className=" text-base font-bold text-slate-700 dark:text-slate-200 sm:w-[66%] ">user </h4>
                <ul className='dark:text-slate-200 text-xs md:text-sm font-semibold list-disc ps-5 leading-5'>
                  <li>login, signup functionality.</li>
                  <li>add to cart or remove from cart.</li>
                  <li>User can see all his orders.</li>
                  <li>User profile page.</li>
                </ul>
                {/* <p className='dark:text-slate-200'>First user have to login or sign up for add product in cart and after this user can also process to order any no. of product.</p> */}
                <h4 className=" text-base font-bold text-slate-700 dark:text-slate-200 sm:w-[66%] ">vender </h4>
                <ul className='dark:text-slate-200  font-semibold list-disc ps-5 leading-5 text-xs md:text-sm'>
                  <li>Vender have to login with email (sachinstore@gmail.com) and password (sachin).</li>
                  <li>add to cart or remove from cart.</li>
                  <li>vender can see dashbord.</li>
                </ul>
                {/* <p className='dark:text-slate-200'>Vender have to login with email <small>(sachinstore@gmail.com)</small> and password <small>(sachin)</small> then goto account and then click on go to admin and then vender can see dashbord. </p>
                  <p className='dark:text-slate-200'>for more information i have create a video, you can watch this. </p> */}

              </div>
              {/* <!-- Row 2 --> */}
              <div className="">
                <h5 className=" my-2 text-xl font-bold text-neutral-800 dark:text-neutral-100">Languages <span className="text-xs sm:text-base">I use in website</span> </h5>

                <div className=" mb-2 px-2 md:mb-4">
                  <h6 className="  text-sm font-bold text-neutral-700 dark:text-neutral-200">FrontEnd:</h6>
                  <p className="px-5  font-semibold text-xs md:text-sm dark:text-neutral-50"> HTML5, CSS, JavaScript, React.js, React-Redux, Tailwind CSS</p>
                </div>
                <div className="">
                  <h6 className=" px-2  text-sm font-bold text-neutral-700 dark:text-neutral-200">BackEnd:</h6>
                  <p className="px-5  font-semibold text-xs md:text-sm dark:text-neutral-50"> Nodejs, express.js, mongoDB, jwt</p>
                </div>

              </div>
            </div>
          </div>

          <div className=' flex justify-end p-2  '>

            <Link to='https://github.com/sweetSachinKumar/mystore' target='_sachin' className='group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-bold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition text-sm lg:text-base px-2 py-1  rounded-sm space-x-2 lg:space-x-3 flex items-center '>
              <i className='text-amber-900 dark:text-indigo-300 group-hover/icon:text-white'> <BsCodeSlash /> </i>
              <span> view code </span>
            </Link>
          </div>
        </div>
      </div>

    </div> 
  )
}

export default MERNProjectDetail
