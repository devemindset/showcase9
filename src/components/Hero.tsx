"use client"
import type { FC } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Round from './ui/Round';
import SmartLink from './ui/SmartLink';




const Hero: FC = () => {
        return (
            <>

            
            <section className='relative flex-col flex w-screen lg:h-screen bg-[var(--hero-bg)] 2xl:px-52 2xl:pt-56 xl:px-40 xl:pt-16 lg:px-10 lg:pt-10  lg:flex-row md:flex-col h-full'>
                
               

                
                {/* container 1  */}
                <div className='relative block lg:flex flex-col text-[var(--text-element)]  lg:w-full 2xl:pt-52 xl:pt-32 pt-28 pb-5 px-10 md:w-[550px] md:ml-24  '>
                <motion.h1 className=' font-bold 2xl:text-5xl xl:text-3xl text-xl mb-3'
                    initial= {{ opacity:0, y: -100 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.6}}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora a. Maxime.</motion.h1>
                <motion.h3 className=' italic 2xl:text-3xl xl:text-xl text-sm mb-10'
                initial= {{ opacity:0, y: -100 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.7}}
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem quidem culpa!
                </motion.h3>
                <SmartLink href='/about' className='bg-[var(--btn-bg)] md:py-2 px-10 text-[var(--btn-text)] mt-10  font-semibold hover:scale-105 hover:bg-[var(--btn-hover)] transition-all cursor-pointer shadow-2xl xl:w-[250px]  xl:text-sm w-[200px] py-2   h-auto text-center'>ABOUT US</SmartLink>
                <motion.div
                initial= {{ opacity:0, y: 1 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.6}}
                >

                <Round className='2xl:w-[150px] 2xl:h-[150px] 2xl:right-24 xl:w-[100px] xl:h-[100px] xl:right-10 w-[90px] h-[90px] right-5 bg-[var(--rounded)]/40 rounded-full absolute bottom-0 ' />
                </motion.div>
                <motion.div
                initial= {{ opacity:0, y: 1 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.6}}
                >

                <Round className='2xl:w-[850px] 2xl:h-[850px] xl:w-[650px] xl:h-[650px] md:w-[550px] md:h-[550px] w-[350px] h-[350px] bg-[var(--rounded)]/10 rounded-full absolute  z-10 -left-20' />
                </motion.div>
                </div>
                {/* container 2  */}
                <div className='relative flex justify-center items-center   lg:w-full md:w-[550px] '>
                    <div className='2xl:w-[450px] 2xl:h-[650px] 2xl:left-48 2xl:top-10 xl:w-[250px] xl:h-[450px] xl:left-32 xl:top-5 md:w-[250px] md:h-[350px] w-[200px] h-[250px] lg:left-24 lg:top-10  relative  lg:absolute z-30 md:ml-56 lg:ml-0 ml-5'>
                        <Image
                            src="/images/hero.jpg"
                            fill
                            alt='hero image'
                            className='object-cover'
                            property=''


                        />
                    </div>
                    <motion.div
                    initial= {{ opacity:0, y: 1 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.6}}
                    >

                    <Round className='2xl:w-[750px] 2xl:h-[750px] 2xl:left-10 2xl:top-40 xl:w-[450px] xl:h-[450px] xl:left-6 xl:top-28 lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] left-12 top-28 bg-[var(--rounded)] rounded-full absolute  z-10' />
                    </motion.div>
                </div>
              
            </section>
            </>
        );
}
export default Hero;