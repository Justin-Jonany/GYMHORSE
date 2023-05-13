import React from 'react'
import './Hero.css'
import videoh from '../../assets/Gym-video.mp4'
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <video autoPlay loop muted className="myVideo">
        <source src={videoh} type="video/mp4" />
        VIDEO DOESN'T APPEAR
      </video>
      <div className="body-hero">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0.5, 0.71, 0.2, 1.01]
          }}
          className="title-hero" > GYMHORSE</motion.span>
        {/* Hero Heading */}
        <div className="hero-text">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ x: 0, duration: 1.35 }}>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ x: 0, duration: 1.35 }}>
            <span>
              Ideal body
            </span>
          </motion.div>

        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
            <span>Expert coachs</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+" /></span>
            <span>Members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='2' preFix="+" /></span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn btn1-h">Get Started</buttons>
          <buttons className="btn btn2-h">Learn More</buttons>
        </div>
      </div>
    </div >
  )
}

export default Hero