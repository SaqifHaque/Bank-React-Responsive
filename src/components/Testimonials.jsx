import React from 'react'
import { feedback } from '../constants';
import styles from '../styles';
import FeedbackCard from '../FeedbackCard';

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.padding} ${styles.flexCeter} flex-col relative`}>
      <div/>
        
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What people are <br className="sm:block  hiddren"/>
        saying about us</h1>
      </div>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </section>
  )
}

export default Testimonials