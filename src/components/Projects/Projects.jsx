import './Projects.css'
import Image from 'next/image'

import dash1 from './../../assets/dash1.png';
import dash2 from './../../assets/dash2.png';
import dash3 from './../../assets/dash3.jpg';
import dash4 from './../../assets/dash4.jpg';
import dash9 from './../../assets/dash99.png';
import dash6 from './../../assets/dash6.jpg';

// import dash3 from './../../assets/dash3.png';
// import dash3 from './../../assets/dash3.png';
// import dash3 from './../../assets/dash3.png';

export const Projects = () => {
  return (
    <main id='projects'>
      <section className="projectsBox">
        <header>Mis proyectos</header>

        <div className='projectsContent'>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash9}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash9}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash9}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash1}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash1}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

          <div className='project'> 
            <Image
              className='imageSrc'
              src={dash4}
              width={5000}
              height={300}
              alt="Picture of the author"
            />
            <div className='footerCard'>
              Data Analysis Dashboard
            </div>
          </div>

        </div>

      </section>
    </main>
  )
}
