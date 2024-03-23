import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './slider.css';

const Slider = () => {
  return (
    <div className='slider__container'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          src={require('../../assets/slider1.jpg')}
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          src={require('../../assets/slider2.jpg')}
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          src={require('../../assets/slider3.jpg')}
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          src={require('../../assets/slider4.jpg')}
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
        <img
          src={require('../../assets/slider5.jpg')}
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
          }}
        />
      </Carousel>
    </div>
  )
}

export default Slider