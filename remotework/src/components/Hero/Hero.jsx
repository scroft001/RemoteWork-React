import React from 'react'
import desktopImage from '../../images/image-hero-desktop.png'
import mobileImage from '../../images/image-hero-mobile.png'
import "../Hero/Hero.scss"
import audiophile from '../../images/client-audiophile.svg'
import databiz from '../../images/client-databiz.svg'
import maker from '../../images/client-maker.svg'
import meet from '../../images/client-meet.svg'

const Hero = () => {
  return (
    <main>
        <div className='app__hero-text'>
            <h1>Make <br /> remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, 
    create team rituals, and watch productivity soar.</p>
            <a href='index.html'>Learn more</a>
            <div className='brands'>
                <img src={databiz} alt='databiz'/>
                <img src={audiophile} alt='audiophile'/>
                <img src={meet} alt='meet'/>
                <img src={maker} alt='maker'/>
            </div>
        </div>
        <picture>
            <source media="(max-width: 700px)" srcSet={mobileImage} />
            <img src={desktopImage} alt="working remote" />
        </picture>
        
    </main>
  )
}

export default Hero