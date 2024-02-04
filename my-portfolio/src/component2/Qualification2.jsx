import React from 'react'
// import languageData from './sub-component/QualificationData'
import { languageData } from './data/SampleData'
import { FaGreaterThan } from 'react-icons/fa'

const Qualification2 = () => {
    return (
        <section id='Qualification' className='section  '>
            <h3 className='main-heading' >My Qualification</h3>
            <div>

                <div className='justify-between flex flex-col  md:flex-row px-3'>

                    {/* right  */}
                    <div className='w-full h-full'>
                        <h4 className='secondary-heading '> Languages i Know  </h4>


                        {/* myLanguages  */}

                        <div className='flex  flex-col  space-y-3 text-neutral-600  dark:text-slate-200 font-bold mt-1'>

                            {
                                languageData.map((tech, i) => {
                                    return (
                                        <>
                                            <div key={i} >

                                                <p className='flex space-x-2 items-center'> <span className=' text-xl lg:text-2xl' style={{ color: tech.iconColor }}  >{tech.icon}</span> <span className='text-xs sm:text-base xl:text-lg font-semibold ' > {tech.lang} </span>  </p>

                                                <div className="flex-start flex sm:h-4 h-3 w-full overflow-hidden rounded border-2 border-gray-400 font-sans  text-xs font-medium">
                                                    <div data-aos="zoom-in-right" data-aos-anchor-placement="bottom-bottom"
                                                        className="flex h-full items-baseline justify-center overflow-hidden break-all   text-indigo-800"
                                                        style={{ width: tech.complited, background: tech.bgColor }}
                                                    >

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>


                    {/* left  */}
                    <div className='h-full w-full mt-4 md:mt-0 md:pl-8 text-neutral-800  dark:text-slate-200'>
                        <div>
                            <h5 className='secondary-heading'>Skills </h5>
                            {["Front End web Developer", "Back End web Developer", "Full stack web Developer"].map(text => <p key={text} className=' text-xs sm:text-base ps-2 leading-normal text-neutral-700 font-semibold flex items-center gap-2'> <FaGreaterThan className='text-yellow-700 ' /> <span className='dark:text-slate-200'>{text}</span>  </p>)

                            }
                        </div>

                        <div>

                            <h5 className='secondary-heading'>Qualification </h5>
                            <ul className='px-2 text-xs sm:text-base leading-[1.3]'>
                                <li className="  flex gap-2 items-center text-xs sm:text-base"  > <FaGreaterThan className='text-yellow-700' />  12th pass</li>
                                <li className="  flex gap-2 items-center text-xs sm:text-base"  > <FaGreaterThan className='text-yellow-700' />  Pursuing BCA in 1st Year</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='secondary-heading'>Experince </h5>
                            <p className=' ps-2 leading-normal text-xs sm:text-base flex gap-2 items-center'> <FaGreaterThan className='text-yellow-700' /> I am fresher</p>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Qualification2
