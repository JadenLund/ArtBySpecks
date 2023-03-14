import './index.css'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div>
            <div className='links'>
                <a target='_blank' className='resume' rel='noreferrer' href='https://docs.google.com/document/d/e/2PACX-1vQ8IWlnrFXAny90vVemPIf9Oj8-iuwY-oeJIeeIWvaTBXi_Y1iWGk_T_YEI_5u-6STodHn2FHO_yXtq/pub'>
                    <FontAwesomeIcon icon={faNewspaper} color='#99738e' />
                </a>
                <a target='_blank' className='linkedin' rel='noreferrer' href='https://www.linkedin.com/in/jaden-lund/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#99738e' />
                </a>
                <a target='_blank' className='github' rel='noreferrer' href='https://github.com/Specklex'>
                    <FontAwesomeIcon icon={faGithub} color='#99738e' />
                </a>
                <a target='_blank' className='medium' rel='noreferrer' href='https://medium.com/@lundjaden'>
                    <FontAwesomeIcon icon={faMedium} color='#99738e' />
                </a>
            </div>
        </div>
    )
}
