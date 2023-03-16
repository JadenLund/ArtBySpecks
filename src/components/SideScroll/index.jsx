import './index.scss'
import { InstagramEmbed } from 'react-social-media-embed';

export default function SideScroll() {

    return (
        <div className='Post-Container'>
            <InstagramEmbed className="single-post" url="https://www.instagram.com/p/CiTYV9yJ3z4/" width={328} />
            <InstagramEmbed className="single-post" url="https://www.instagram.com/p/CY0OXMwKJsb/" width={328} />
            <InstagramEmbed className="single-post" url="https://www.instagram.com/p/CU8r4A6Njv6/" width={328} />
            <InstagramEmbed className="single-post" url="https://www.instagram.com/p/CVBfemSpSXK/" width={328} />
            <InstagramEmbed className="single-post" url="https://www.instagram.com/p/CW3iSfOpkFh/" width={328} />
        </div>
    )
}
