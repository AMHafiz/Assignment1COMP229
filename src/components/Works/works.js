/* Aisha Abdulhafiz 301331337 9/27/24 */
import React from 'react';
import './works.css';
import pOne from "../../assets/pOne.png";
import pTwo from "../../assets/pTwo.png";
import pThree from "../../assets/pThree.png";


const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Projects</h2>
            <span className='worksDesc'>Welcome to my project showcase! Here, I present a variety of work that demonstrates my enthusiasm for web design and computer science. Each project blends creativity with technical skills to address real-world challenges.</span>
            <div className='worksImgs'>
                <div className='workItem'>
                    <img src={pOne} alt='' className='worksImg' />
                </div>
                <div className='workItem'>
                    <img src={pTwo} alt='' className='worksImg' />
                </div>
                <div className='workItem'>
                    <img src={pThree} alt='' className='worksImg' />
                </div>
                <div className='workText'>
                    <p>I built a motorcycle website that provides a user-friendly platform for motorcycle enthusiasts to browse and purchase a range of bikes. With detailed listings, high-quality images, and customer reviews, I’ve created an experience where users can easily find the perfect motorcycle that fits their needs.</p>
                    <p>I developed an Arabic poem website that lets users choose from three beautiful poems. Each selection allows visitors to listen to the recitation while reading along, immersing themselves in the rhythm and emotion of the poetry. It’s a great way to experience Arabic literature and appreciate the language!</p>
                    <p>I created a fun and engaging bug-catching game where players click on adorable bugs to catch them. As players score more points, the bugs start hopping faster, adding a thrilling challenge to the experience. It's a race against time and reflexes, perfect for anyone looking to test their skills!</p>
                </div>
        </div>
        </section>
    );
}

export default Works