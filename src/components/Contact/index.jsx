import './index.css'
import { faArtstation, faDeviantart, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import YoutubeEmbed from '../YoutubeEmbed';
import SideScroll from '../SideScroll';


export default function Contact() {
    return (
        <div>
            <div className='links'>
                <a target='_blank' className='Instagram' rel='noreferrer' href='https://www.instagram.com/ArtBySpeckles/'>
                    <FontAwesomeIcon icon={faInstagram} color='#99738e' />
                </a>

                <a target='_blank' className='Twitter' rel='noreferrer' href='https://twitter.com/ArtbySpecks'>
                    <FontAwesomeIcon icon={faTwitter} color='#99738e' />
                </a>
                <a target='_blank' className='DeviantArt' rel='noreferrer' href='https://www.deviantart.com/artbyspecks'>
                    <FontAwesomeIcon icon={faDeviantart} color='#99738e' />
                </a>
                <a target='_blank' className='Youtube' rel='noreferrer' href='https://www.youtube.com/channel/UCv0NJ7z_5-Sm7Y1QpKzy2eg'>
                    <FontAwesomeIcon icon={faYoutube} color='#99738e' />
                </a>
                <a target='_blank' className='Artstation' rel='noreferrer' href='https://www.artstation.com/artbyspecks'>
                    <FontAwesomeIcon icon={faArtstation} color='#99738e' />
                </a>
            </div>

            <div className='Youtube-video' ><YoutubeEmbed embedId="YYVZ6a4uBog" /></div>

            <div className='Instagram-reel'><SideScroll /></div>
        </div>
    )
}
