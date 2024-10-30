/* Aisha Abdulhafiz 301331337 9/27/24 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contacts.css';
import cOne from "../../assets/cOne.png";
import cTwo from "../../assets/cTwo.png";
import cThree from "../../assets/cThree.png";

const Contacts = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.message.trim()) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus('');
        } else {
            setErrors({});
            setStatus('Message sent successfully!');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            setTimeout(() => {
                navigate('/intro');
            }, 300);
        }
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPagetitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill out the form below to discuss any work opportunities </span>
                <form className='contactForm' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        className="name"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                    <input
                        type="text"
                        name="lastName"
                        className="name"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                    <input
                        type="email"
                        name="email"
                        className="name"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <textarea
                        className='msg'
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                    <button type='submit' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <a href='https://www.tiktok.com/en/' target='_blank' rel='noopener noreferrer'>
                            <img src={cOne} alt='Client' className='clientImg' />
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                            <img src={cTwo} alt='Client' className='clientImg' />
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                            <img src={cThree} alt='Client' className='clientImg' />
                        </a>
                    </div>
                </form>
                {status && <p className="statusMessage">{status}</p>}
            </div>
            <footer className='footer'>
                <p>&copy; 2024 Aisha Abdulhafiz. Portfolio. All Rights Received</p>
            </footer>
        </section>
    );
}

export default Contacts;
