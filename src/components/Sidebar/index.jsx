import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faStore, faPhone } from '@fortawesome/free-solid-svg-icons'
import ParticleJS from '../ParticleJs'

export const Sidebar = () => {
    return (

        <div className='nav-bar'>
            <h1 className='Sidebar-title'>Art By Specks</h1>
            <nav>
                <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faPhone} color='#4d4d4de' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='store-link' to='/store'>
                    <FontAwesomeIcon icon={faStore} color='#4d4d4de' />
                </NavLink>

            </nav>
        </div>

    )
}
