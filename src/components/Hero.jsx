import React from 'react';
import styles from '../styles';
import { discount, robot } from '../assets';
 
const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          
        </div>
      </div>

    </section>
  )
}

export default Hero