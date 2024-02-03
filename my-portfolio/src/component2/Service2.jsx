import React from 'react'
import serviceImg from '../img/headerImg.svg'
import { ProLanguage } from './data/SampleData'

const Service2 = () => {

    return (
        <section id='service' className='section'>
            <h3 className='main-heading'>Frontend Web Developer</h3>
            <p className='sm:text-xl text-neutral-800 dark:text-slate-200 leading-tight px-2 '>I value simple content structure, clean design patterns, and thoughtful interactions.</p>

            {/* info */}

            <div className='  mt-2 flex flex-col  md:flex-row'>
                <div>
                    {
                        ProLanguage.map(lang => {
                            return (
                                <div className='px-2' >
                                    <h5 className='secondary-heading '>{lang.heading}</h5>
                                    <p className='px-2 leading-normal text-sm  text-neutral-80 font-semibold   sm:text-base dark:text-slate-200 '>{lang.para}</p>
                                </div>
                            )
                        })
                    }

                </div>


            </div>


            <div className='sm:w-[400px] max-w-sm md:max-w-none md:w-[500px]  mt-5 md:mt-0  shadow-xl shadow-sky-500/20 dark:shadow-md dark:shadow-sky-900 m-auto md:border-4 md:border-white dark:md:border-slate-600 flex items-center justify-center '>
                <img src={serviceImg} className=' w-full h-full bg-cover' alt="" />
                {/* <h3>my name is sachin </h3> */}
            </div>

        </section >
    )
}

export default Service2
