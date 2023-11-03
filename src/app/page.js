import { Projects } from '../components/Projects/Projects'
import { About } from '../components/About/About'
import { Contact } from '../components/Contact/Contact'
import { Foot } from '../components/Foot/Foot'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '@/components/NavBar/NavBar'

export default function Portfolio() {
  return (
    <main className='mainApp'>

      <NavBar/>

      <section className='About'>
        <About/>
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
    </main>
  )
}
