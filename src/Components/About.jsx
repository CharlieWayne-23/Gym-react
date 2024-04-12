import React from 'react'
import aboutImage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutImage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae tempore tenetur, nihil rem nostrum totam minus perferendis. Dolores doloribus itaque minus dolore facilis deserunt cum! Dolorem voluptatem repellendus dolore!</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About