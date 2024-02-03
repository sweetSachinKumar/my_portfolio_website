import React, { useState } from 'react'
import OverLayDetail from './subComp/OverLayDetail'
import ProjectCard from './subComp/ProjectCard'
import { ReactjsProject } from './data/projectData'
import { MERNproject } from './data/projectData'



const ProjectsContent = () => {
  const [openOvl, setOpenOvl] = useState(false)
const [productDTL, setProductDTL] = useState(null)


  const [projId, setProjId] = useState(1)
  console.log(ReactjsProject)
const allProject = [...ReactjsProject, ...MERNproject]

const productDtl = (datas)=> {
  // console.log(datas)
  if(datas)  setProductDTL(datas)
}

  return (
    <section id="projects">
      <h3 className='main-heading' >My Projects</h3>
      <ProjectNavigation projId={projId} setProjId={setProjId} />
{/* <MERNProjectDetail/> */}
{(openOvl && productDTL) && <OverLayDetail setOpenOvl={setOpenOvl} openOvl={openOvl} data={productDTL}/>}
      <div className='grid w-8/12 mx-auto sm:w-auto sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2  gap-x-3 gap-y-5 mt-10 '>

    {  projId === 1 && ( <>
        {  allProject?.map((data, i) =>  <ProjectCard key={i} data={data} setOpenOvl={setOpenOvl} productDtl={productDtl}/>)}
        
         {/* { MERNproject?.map((data, i) =>  <ProjectCard key={i} data={data} />)} */}
          </>
        )}
    {  projId === 2 && ( <>
        {  ReactjsProject?.map((data, i) =>  <ProjectCard productDtl={productDtl} setOpenOvl={setOpenOvl} key={i} data={data} />)}
          </>
        )}

    {  projId === 3 && ( <>    
         { MERNproject?.map((data, i) =>  <ProjectCard  productDtl={productDtl} setOpenOvl={setOpenOvl} key={i} data={data} />)}
          </>
        )}

      </div>
    </section>
  )
}






const ProjectNavigation = ({ setProjId, projId }) => {
  // const buttonNav = ["HTML, CSS, javaScript", "React js & Tailwind CSS", "MERN stack"]
  const navBtn = [
    {category:"all", id:1},
    {category:"React js & Tailwind CSS", id:2},
    {category:"MERN stack", id:3},
  ]

  return (
    <div>
      <div className='border-2 flex gap-1 sm:gap-3 text-[10px]   sm:text-sm justify-center items-center p-1 rounded-md font-bold bg-indigo-300/20 lg:max-w-2xl mx-auto dark:bg-gray-400/30  dark:border-0 dark:py-3'>
{
  navBtn.map(btn => <button key={btn.id} onClick={() => setProjId(btn.id)} className={`${projId === btn.id ? "bg-yellow-500/90 dark:bg-[rgba(15,23,42,1)]  text-white dark:border-transparent" : "bg-white/40 dark:border-[rgba(15,23,42,1)] dark:bg-transparent dark:text-slate-100 hover:bg-yellow-500/70 hover:text-white"} border-2  tracking-wide font-[Arial] px-3 py-2 text-neutral-600 rounded-md transition duration-200 font-semibold min-w-[80px]`}>{btn.category}</button>  )
}

          </div>
    </div>
  )
}


export default ProjectsContent
