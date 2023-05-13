import React from 'react'
import { plansData } from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import { motion } from "framer-motion";

function Plans() {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <motion.div 
                    animate={{scale: [0.95, 1, 0.95]}}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}
                    className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <button className='plan-benefits'>
                                See more benefits -{'>'}
                            </button>
                        </div>
                        <button className="btn">
                            Join now
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Plans