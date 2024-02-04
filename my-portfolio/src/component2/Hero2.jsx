import { GoDownload } from 'react-icons/go'
import myCv from './data/assets/skMorderResume.pdf'
import HeaderImg from '../img/img2.svg'

const Hero2 = () => {
    return (
        <header id='Home' className='text-white w-full mb-16  bg-indigo-700 dark:bg-indigo-800'>

            <div className=''>
                <div className=' items-center   justify-around flex flex-col py-16  md:flex-row max-w-[1440px] flex-wrap mx-auto min-h-[450px]'>

                    <div className='max-w-sm md:max-w-none xl:w-[470px] md:flex  items-center justify-center   '>
                        <img src={HeaderImg} className='  w-full h-full object-cover' alt="" />
                        {/* <h3>my name is sachin </h3> */}
                    </div>
                    {/* info */}
                    <div className=' flex-   flex items-center    justify-center pt-14 md:pt-0 text-center flex-col px-2'>

                        <h2 className='text-2xl md:text-4xl font-semibold text-indigo-200'> <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400      to-yellow-300 '   >I CREATE MODERN WEBSITE</span>
                        </h2>

                        <p className='text-sm font-normal md:text-lg py-5'    >I design and code beautifully simple things, and I love what I do.</p>
                        <a download href={myCv} className='bg-yellow-500 dark:bg-yellow-400/80  dark:hover:bg-yellow-600/90  transition dark:active:bg-yellow-400/80   hover:bg-yellow-600/90 active:bg-yellow-600/60 font-bold tracking-wide rounded-lg px-4 py-2 text-white flex items-center space-x-2 '> <span>download cv</span>   <i> <GoDownload size={20} /> </i> </a>
                    </div>


                </div>
            </div>
            {/* #4f46e5 */}


        </header>
    )
}

export default Hero2
