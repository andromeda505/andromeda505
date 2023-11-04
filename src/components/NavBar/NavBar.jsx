"use client"

import { useState } from 'react'
import './Navbar.css'

export const NavBar = () =>  {
    const [activeLink, setActiveLink] = useState('home')
    const [ menu, setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu( !menu )
    }
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <header className='Cabecera'>
            <h1 className={activeLink === 'home' ? 'Cabecera-h1-act-link' : 'Cabecera-h1'} onClick={ () => {onUpdateActiveLink('home');  menu ? toggleMenu : '' }}>
                <a href="#home" className="Cabecera-a">Andrómeda</a>
            </h1>

            <button className="Cabecera-button" onClick={ toggleMenu } >
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` } >
                <ul className="Cabecera-ul">
                    <li className={activeLink === 'skills' && !menu ? 'Cabecera-li-act-link' : 'Cabecera-li'}  onClick={ () => { menu? toggleMenu() : ''; onUpdateActiveLink('skills')} }><a href="#skills" className="Cabecera-a">Skills</a></li>
                    <li className={activeLink === 'projects' && !menu ? 'Cabecera-li-act-link' : 'Cabecera-li'}  onClick={ () => {menu? toggleMenu() : ''; onUpdateActiveLink('projects')} }><a href="#projects" className="Cabecera-a">Projectos</a></li>
                    <li className={activeLink === 'contact' && !menu ? 'Cabecera-li-act-link' : 'Cabecera-li'}  onClick={ () => {menu? toggleMenu() : ''; onUpdateActiveLink('contact')} }><a href="#contact" className="Cabecera-a">Contáctame</a></li>
                </ul>
            </nav>
        </header> 
    )
  }
  