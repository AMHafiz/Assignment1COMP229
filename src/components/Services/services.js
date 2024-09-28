/* Aisha Abdulhafiz 301331337 9/27/24 */
import React from 'react';
import './services.css';
import sOne from "../../assets/sOne.jpg"
import sTwo from "../../assets/sTwo.jpg"
import sThree from "../../assets/sThree.jpg"
import sFour from "../../assets/sFour.jpg"


const Services = () => {
    return (
        <section id='services'>
            <div className="servicesPage">
                <h1 id='servicesTitle'>My Services</h1>
                <div className="servicesList">
                    <div className="serviceItem">
                        <img src={sOne} alt="Programming" className="serviceImg" />
                        <h2>Programming</h2>
                        <p>Expert programming solutions tailored to your needs, including custom software development and code optimization.</p>
                    </div>
                    <div className="serviceItem">
                        <img src={sTwo} alt="Web Development" className="serviceImg" />
                        <h2>Web Design</h2>
                        <p>Responsive and user-friendly websites designed to enhance your online presence and engage your audience.</p>
                    </div>
                    <div className="serviceItem">
                        <img src={sThree} alt="Mobile Apps" className="serviceImg" />
                        <h2>Mobile Apps</h2>
                        <p>Development of high-quality mobile applications for both Android and iOS platforms to meet your business goals.</p>
                    </div>
                    <div className="serviceItem">
                        <img src={sFour} alt="Data Analysis" className="serviceImg" />
                        <h2>Data Analysis</h2>
                        <p>Data-driven insights and analytics services to help you make informed business decisions and strategies.</p>
                    </div>
                </div>
            </div>
            <hr className="fancyBreak" />
            <div className="disclaimer">
                <p>
                    Disclaimer: The services provided are subject to availability and may vary based on client needs. 
                    All services are delivered with the highest quality standards, but results may differ based on individual circumstances.
                </p>
            </div>
        </section>
    );      
}
        
export default Services