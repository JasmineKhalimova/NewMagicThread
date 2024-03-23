import React from 'react';

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className='footer__inner custom-container grid'>
            <div className='copyrights'>
                <p>Copyright© {(new Date().getFullYear())} <a href="https://web-brickdesign.com/">Trend Health and Beauty</a> </p>
            </div>
            <div className='developed'>
                <p>Designed & Developed by <b><u><a href='https://www.web-brickdesign.com/'>Web-Brick Design</a></u></b></p>
            </div>
        </div>
    </div>
  )
}

export default Footer