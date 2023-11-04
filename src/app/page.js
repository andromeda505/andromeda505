import { NavBar } from '../components/NavBar/NavBar'
import { Home } from '../components/Home/Home'
import { Skills } from '../components/Skills/Skills'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import { Foot } from '../components/Foot/Foot'
import './Page.css'

export default function Portfolio() {
  return (
    <main className='mainApp'>
      <NavBar/>

      <div className='MainBoxContent'>



        <section className='Home'>
          <Home/>
        </section>

        <section className='Skills'>
          <Skills/>
        </section>

        <section className='Projects'>
          <Projects/>
        </section>

        <section className='Contact'>
          <Contact/>
        </section>

        <section className='Foot'>
          <Foot/>
        </section>
        </div>

    </main>
  )
}
