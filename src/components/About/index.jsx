import './index.css'
import ProfilePhoto from '../../assets/ProfilePhoto.jpg'

export default function About() {
    return (
        <div>
            <img className='ProfilePhoto' src={ProfilePhoto} alt='ProfilePhoto' />
            <p className="About-me-text">Insert Generic paragraph</p>
        </div>
    )
}
