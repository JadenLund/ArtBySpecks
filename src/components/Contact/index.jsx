import './index.css'
import { faArtstation, faDeviantart, faDiscord, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
    return (
        <div>
            <div className='links'>
                <a target='_blank' className='Instagram' rel='noreferrer' href='https://www.instagram.com/critterbug.art/'>
                    <FontAwesomeIcon icon={faInstagram} color='#99738e' />
                </a>
                <a target='_blank' className='DeviantArt' rel='noreferrer' href='https://www.deviantart.com/critterbugart'>
                    <FontAwesomeIcon icon={faDeviantart} color='#99738e' />
                </a>
                <a target='_blank' className='Youtube' rel='noreferrer' href='https://www.youtube.com/channel/UCv0NJ7z_5-Sm7Y1QpKzy2eg'>
                    <FontAwesomeIcon icon={faYoutube} color='#99738e' />
                </a>
                <a target='_blank' className='Discord' rel='noreferrer' href='https://discord.gg/JNgcm7vjNz'>
                    <FontAwesomeIcon icon={faDiscord} color='#99738e' />
                </a>
                <a target='_blank' className='Artstation' rel='noreferrer' href='https://www.artstation.com/critterbugart'>
                    <FontAwesomeIcon icon={faArtstation} color='#99738e' />
                </a>
            </div>
        </div>
    )
}
