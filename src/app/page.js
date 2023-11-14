"use client"
import { useEffect } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Home } from '../components/Home/Home'
import { Skills } from '../components/Skills/Skills'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import { Foot } from '../components/Foot/Foot'
import { useIntersection } from '../components/useIntersection';
import './Page.css'

export default function Portfolio() {
  
  const [ homeIsIntersecting, homeRef ] = useIntersection({ threshold:.7 })
  const [ skillsIsIntersected, skillsRef ] = useIntersection({ threshold:.7 })
  const [ projectsIsIntersected, projectsRef] = useIntersection({ threshold:.7 })
  const [ contactIsIntersected, contactRef ] = useIntersection({ threshold:.7 })

  useEffect(()=>{
    setTimeout(() => {
      if (homeIsIntersecting) {
        document.getElementById('homeTog').classList.add('Cabecera-h1-act-link')
        document.getElementById('skillsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('projectsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('contactTog').classList.remove('Cabecera-li-act-link')
      }else if(skillsIsIntersected) {
        document.getElementById('skillsTog').classList.add('Cabecera-li-act-link')
        document.getElementById('homeTog').classList.remove('Cabecera-h1-act-link')
        document.getElementById('projectsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('contactTog').classList.remove('Cabecera-li-act-link')
      }else if(projectsIsIntersected ) {
        document.getElementById('projectsTog').classList.add('Cabecera-li-act-link')
        document.getElementById('homeTog').classList.remove('Cabecera-h1-act-link')
        document.getElementById('skillsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('contactTog').classList.remove('Cabecera-li-act-link')
      }else if(contactIsIntersected) {
        document.getElementById('contactTog').classList.add('Cabecera-li-act-link')
        document.getElementById('homeTog').classList.remove('Cabecera-h1-act-link')
        document.getElementById('projectsTog').classList.remove('Cabecera-li-act-link')
        document.getElementById('skillsTog').classList.remove('Cabecera-li-act-link')
      }
    }, 175);
  },[homeIsIntersecting, skillsIsIntersected, projectsIsIntersected, contactIsIntersected ])

  return (
    <main className='mainApp'>

      <NavBar/>

      <div className='MainBoxContent'>

        <section ref={homeRef}  className='Home'>
          <Home/>
        </section>

        <section ref={skillsRef}  className='Skills'>
          <Skills/>
        </section>

        <section ref={projectsRef}  className='Projects'>
          <Projects/>
        </section>

        <section ref={contactRef} className='Contact'>
          <Contact/>
        </section>

        <section className='Foot'>
          <Foot/>
        </section>
      </div>
    </main>
  )
}
