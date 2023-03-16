import './index.css'
import ProfilePhoto from '../../assets/ProfilePhoto.jpg'

export default function About() {
    return (
        <div>
            <img className='ProfilePhoto' src={ProfilePhoto} alt='ProfilePhoto' />
            <p className="About-me-text">Hi there! My name is Speckles, and I am a multi-disciplinary artist who specializes in digital art and cartoons, as well as mixed media including sculpting and fabric work. I have always had a passion for art, and I am constantly exploring new ways to express myself through my creations.

                As a digital artist, I have honed my skills in creating realistic and detailed digital art pieces. Whether it's a portrait of a person or an intricate illustration, I love bringing my ideas to life on a digital canvas. I take pride in my ability to capture the nuances of facial features, textures, and lighting to make my art as realistic as possible.

                In addition to digital art, I also enjoy creating cartoons that are whimsical and fun. I love playing with different styles and techniques to create unique and memorable characters that bring a smile to people's faces.

                But my creativity doesn't stop there. I also love working with mixed media, such as sculpting and fabric work. These mediums allow me to add depth and texture to my art in a way that digital media simply can't. I love the tactile nature of these materials and the satisfaction of creating something with my own hands.

                Overall, I am a passionate artist who loves to create and experiment with different mediums. Whether it's digital or physical, I am always looking for new ways to express myself and share my art with the world.</p>
        </div>
    )
}
