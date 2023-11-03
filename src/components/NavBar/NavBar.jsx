import './Navbar.css'

export const NavBar = () =>  {
    return (
        <header className='Cabecera'>
            <h1 className="Cabecera-h1">
                <a href="#home" className="Cabecera-a">Andrómeda</a>
            </h1>

            <button className="Cabecera-button">
                SVG
            </button>

            <nav className="Cabecera-nav">
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><a href="#skills" className="Cabecera-a">Skills</a></li>
                    <li className="Cabecera-li"><a href="#projects" className="Cabecera-a">Projectos</a></li>
                    <li className="Cabecera-li"><a href="#contact" className="Cabecera-a">Contáctame</a></li>
                </ul>
            </nav>
        </header> 
    )
  }
  