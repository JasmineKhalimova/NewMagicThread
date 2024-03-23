import React from 'react';
import './about.css';
import '../../assets/about.jpg'
import { TbAward, TbUserCheck, TbPhoneCall} from 'react-icons/tb';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'> About Us</h2>
        <h3 className='section__subtitle'>Company History</h3>
        <div className='about__container custom-container grid'>
            <img src={require('../../assets/about.jpg')} alt='Profile' title='Profile' className='about__img' width="300" height="225" />
            <div className='about__data'>
                <div className='about__info grid'>
                    <div className='about__box'>
                        <TbAward className='about__icon'/>
                        <h3 className='about__title'>Experience</h3>
                        <span className='about__subtitle'>Over 7 Years</span>
                    </div>
                    <div className='about__box'>
                        <TbUserCheck className='about__icon'/>
                        <h3 className='about__title'>Serivce</h3>
                        <span className='about__subtitle'>Quality Service</span>
                    </div>
                    <div className='about__box'>
                        <TbPhoneCall className='about__icon'/>
                        <h3 className='about__title'>Support</h3>
                        <span className='about__subtitle'>Online & On Call</span>
                    </div>
                </div>
                <p className='about__description'>
                Trend Health and Beauty Clinic/Salon were founded in 2016 and since then it has been at 
                the forefront of the beauty industry in Cork City. We offer a wide range of treatments such as 
                nonsurgical facials treatments, laser treatments, spa treatments, waxing, threading, manicures,
                 and microdermabrasion along with our core business of pedicure treatments such as fungal and other infections.
                </p>
                <p>
                    We always have our finger on the beauty pulse and are constantly adding new products and 
                    services to keep up with the constant evolution of the industry.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About