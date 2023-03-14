import './index.css'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image4.png'
import Gif3 from '../../assets/Gif3.gif'
import Gif1 from '../../assets/Gif1.gif'
import Gif2 from '../../assets/Gif2.gif'


export default function Home() {
    return (
        <div>
            <img className='Image1' src={Image1} alt='Image1' />
            <img className='Image2' src={Image2} alt='Image2' />
            <img className='Image3' src={Image3} alt='Image3' />
            <img className='Image4' src={Image4} alt='Image4' />
            <img className='Gif1' src={Gif1} alt='Gif1' />
            <img className='Gif2' src={Gif2} alt='Gif2' />
            <img className='Gif3' src={Gif3} alt='Gif3' />
        </div>
    )
}
