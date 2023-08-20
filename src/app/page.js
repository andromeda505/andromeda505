import { Projects } from './Projects/Projects'
import { About } from './About/About'
import { Contact } from './Contact/Contact'
import { Foot } from './Foot/Foot'
import './Page.css'
import DrawerAppBar from './NavBar/Navbar'

export default function Portfolio() {
  return (
    <main className='mainApp'>

      <DrawerAppBar/>
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
