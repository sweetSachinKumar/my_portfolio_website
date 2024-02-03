import React from 'react'
import Navbar from './component2/Navbar' 
import Hero from './component2/Hero2';
import './App.css';
import Service from './component2/Service2';
import Qualification2 from './component2/Qualification2';
import ProjectsContent from './component2/ProjectsContent';
function App() {
  return (
    <>
      <div className=' lg:flex gap-1.5 max-w-[1600px] mx-auto'>

        <Navbar />
        <div className='w-full'>
          <Hero/>
          <Service />
          <Qualification2/>
          <ProjectsContent />
        </div>
      </div>

    </>
  );
}

export default App;
