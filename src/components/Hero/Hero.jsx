import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'


const Hero = ({heroData,setHeroCount,heroCounter,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <div className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCounter ===0? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCounter ===1? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCounter ===2? "hero-dot orange":"hero-dot"}></li>
        </div>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?play_icon:pause_icon} alt="" />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
