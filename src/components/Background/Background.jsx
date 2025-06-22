import './Background.css'
import video1 from '../../assets/video1.mp4'
import images1 from '../../assets/images1.jpg'
import images2 from '../../assets/images2.jpg'
import images3 from '../../assets/images3.jpg'

const Background = ({playStatus,heroCount}) => {
    if(playStatus){
        return(
            <video className='background  fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0){
        return <img src={images1} className='background fade-in' alt="" />
    }
    else if(heroCount===1){
        return <img src={images2} className='background fade-in' alt="" />
    }
    else if(heroCount===2){
        return <img src={images3} className='background fade-in' alt="" />
    }
    return null;
    
}

export default Background
