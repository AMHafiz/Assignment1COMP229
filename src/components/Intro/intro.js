/* Aisha Abdulhafiz 301331337 9/27/24 */
import React from 'react';
import './intro.css';
import img from "../../assets/img.jpg"

 const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='Hello'>Hello, </span>
                <span className='IntroText'>I'm <span className='IntroName'>Aisha</span><br/>Website Designer</span>
                <p className='introPara'>I am a web designer dedicated to creating beautiful, functional websites that bring brands to life and provide exceptional user experiences.</p>
                <a href="mailto:ayshag702@gmail.com"> <button className='btn'>Hire Me</button></a>

            </div>
            <img src={img} alt='' className='img' />
        </section>
    )
}

export default Intro;