/* Aisha Abdulhafiz 301331337 9/27/24 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contacts.css';
import cOne from "../../assets/cOne.png";
import cTwo from "../../assets/cTwo.png";
import cThree from "../../assets/cThree.png";



const Contacts = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/intro');
        }, 300);
    }
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPagetitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill out the form below to discuss any work oppertunities </span>
                <form className='contactForm'onSubmit={handleSubmit}>
                    <input type="text" className="name" placeholder="First Name"/>
                    <input type="text" className="name" placeholder="Last Name"/>
                    <input type="email" className="name" placeholder="Your Email"/>
                    <textarea className='msg' name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <a href='https://www.tiktok.com/en/' target='_blank' rel='noopener noreferrer'>
                            <img src={cOne} alt='Client' className='clientImg' />
                        </a>
                        <a href='https://www.instagram.com/ ' target='_blank' rel='noopener noreferrer'>
                            <img src={cTwo} alt='Client' className='clientImg' />
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                            <img src={cThree} alt='Client' className='clientImg' />
                        </a>
                    </div>
                </form>    
            </div>
                <footer className='footer'>
                    <p>&copy; 2024 Aisha Abdulhafiz Portfolio. All Rights Recieved</p>
                </footer>
        </section>
    );
}

export default Contacts