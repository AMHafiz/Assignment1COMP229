/* Aisha Abdulhafiz 301331337 9/27/24 */
import React from 'react';
import './skills.css';
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/four.jpg"


const skills = () => {
    return (
        <section id='skills'>
           <span className='skillTitle'>About Me</span>
           <span className='skillInfo'>My name is Aisha Abdulhafiz. I'm a web design and computer science student passionate about creating visually appealing and functional digital experiences. I have hands-on experience with front-end development, focusing on clean code, responsive design, and user-centered interfaces. I'm eager to apply my technical skills and creativity to real-world projects.<a href="Resume_AishaAbdulhafiz_2024.docx.pdf" target="_blank"><br/><br/>Download My Resume</a></span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={two} className='skillBarImg' alt="photo"/>
                        <div className='skillBartext'>
                            <h2>UI Design</h2>
                            <p>As a UI designer, I create visually appealing, user-friendly interfaces for seamless digital experiences.</p>
                        </div>
                </div>
                 
                <div className='skillBar'> 
                    <img src={three} className='skillBarImg' alt="photo a"/>
                        <div className='skillBartext'>
                            <h2>Web Designer</h2>
                            <p>As a web designer, I design functional, visually engaging websites that provide a smooth user experience.</p>
                        </div>
                </div>
                <div className='skillBar'> 
                    <img src={four} className='skillBarImg' alt="photo b"/>
                        <div className='skillBartext'>
                            <h2>C# Developer</h2>
                            <p>As a C# developer, I build efficient, scalable software solutions using C# and object-oriented principles.</p>
                        </div>
                </div>
            </div>
        </section>
    );
}
export default skills;