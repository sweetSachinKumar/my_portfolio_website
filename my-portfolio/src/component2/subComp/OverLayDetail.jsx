import React from 'react'
import { BsCodeSlash } from 'react-icons/bs' 
import { SlClose } from "react-icons/sl"; 

const OverLayDetail = ({ openOvl, setOpenOvl, data }) => {
  const embedId = "oJM7v0Jpn3E"


  console.log(data)
  return (
    <div className=''>
   
   <div   className={`  overflow-auto duration-300 z-[2240]  fixed top-0  left-0 right-0 w-full h-full flex items-center bg-neutral-900/60`}>
  
      <span className=' z-[2540] absolute top-3 text-indigo-200 md:top-12 md:right-16 md:text-4xl hover:text-neutral-300 cursor-pointer dark:text-slate-200 dark:hover:text-slate-400  right-3 text-2xl  dark:bg-yellow-500/90 bg-indigo-500/70 hover:bg-indigo-500/50 p-2 rounded-full' onClick={() => setOpenOvl(false)}><SlClose/></span>
 
      <CardDetail data={data} />


      </div>
     
  
    </div>
  )
}

const CardDetail = ({data}) => {

  return (
    <div id='MernProject' className='lg:container z-[2900] relative md:max-w-[900px] max-w-[3450px] mx-auto sm:w-[80vw] w-[80vw] '>


      <div id="name" className='w-full  mx-auto group shadow-xl dark:shadow-indigo-700/20 shadow-indigo-600/20 self-start z-[3000]'>

        <div target='_sachin'
          className="block md:flex rounded-lg w-full  bg-gray-100 dark:bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  relative   md:p-4">
          <div className="  overflow-hidden bg-cover bg-no-repeat  flex-1">

            {/* <Video
                    loop
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster={MernThum}
                >
                    <source src={MernVideo} type='video/webm' />
                </Video> */}
    {    !data.ytVideoID ?    <img src={data.thumbnail} className='w-full h-full object-contain' alt="img" />
         :
         <>
         <iframe  
        className='w-full h-full min-h-[230px] object-contain'
        src={`https://www.youtube.com/embed/${data.ytVideoID}`}
         title="Introduction To WiseGPT"
        width="853"
       height="480"
        style={{border:"0"}}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
      
      />
      </>
      }

          </div>
          <div className=' flex-1 h-full w-full '>
            <div className="mx-auto mt-5 h-full w-[90%] py-4 px-2">
              <div className="flex flex-col space-y-1 ">
                <div className=' w-full'>
                  <h3 className=" text-lg md:text-xl mb-2 md:mb-4 font-bold text-slate-700 dark:text-slate-200 ">
                  {data.title}
                  </h3>
                  
                     <h4 className=" text-base font-bold text-slate-700 dark:text-slate-200 sm:w-[66%] ">Features </h4>
                  <ul className='dark:text-slate-200 text-xs md:text-sm font-semibold list-disc ps-5 leading-5'>
                    {
                      data?.features?.map((feature, i) => <li key={i}>{feature}</li> )
                    }
                   
                  </ul>
                  
                </div>
                {/* <!-- Row 2 --> */}
                {/* <div className="md:pt-3">
                  <h5 className=" my-2 text-xl font-bold text-neutral-800 dark:text-neutral-100">Languages <span className="text-xs sm:text-base">I use in website</span> </h5>

                  <div className=" mb-2 px-2 md:mb-4">
                    <h6 className="  text-sm font-bold text-neutral-700 dark:text-neutral-200">FrontEnd:</h6>
                    <p className="px-5  font-semibold text-xs md:text-sm dark:text-neutral-50"> HTML5, CSS, JavaScript, React.js, React-Redux, Tailwind CSS</p>
                  </div> */}
                {/* </div> */}
                  <div className='pt-3'>
                    <h5 className="  text-sm font-bold text-neutral-700 dark:text-neutral-200">Tech used:</h5>
                    <p className="px-5 font-semibold text-xs md:text-sm dark:text-neutral-50">{data.techUsed}</p>
                  </div>
                

              </div>
            </div>

            <div className=' flex justify-between p-2  '>
{
data?.webLinkToGo && 
              <a href='https://github.com/sweetSachinKumar/mystore' target='_sachin' className='group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-bold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition text-sm lg:text-base px-2 py-1  rounded-sm space-x-2 lg:space-x-3 flex items-center '>
                <i className='text-amber-900 dark:text-indigo-300 group-hover/icon:text-white'> <BsCodeSlash /> </i>
                <span> go to website </span>
              </a>
              }

          {  data?.githubLink &&   <a href='https://github.com/sweetSachinKumar/mystore' target='_sachin' className='group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-bold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition text-sm lg:text-base px-2 py-1  rounded-sm space-x-2 lg:space-x-3 flex items-center '>
                <i className='text-amber-900 self-end dark:text-indigo-300 group-hover/icon:text-white'> <BsCodeSlash /> </i>
                <span> view code </span>
              </a>}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}



export default OverLayDetail
