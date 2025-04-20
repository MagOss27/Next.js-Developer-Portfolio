import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lilcon from './Lilcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <Lilcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
}

function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <section className="education" id="education">
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                    md:w-[2px] md:left-[30px] xs:left-[20px]'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="High School Graduation and First Job"
                        time="2022"
                        place="Reivax"
                        info="Completed high school with excellent grades and started my first job as a young apprentice at Reivax, gaining valuable experience as an administrative assistant."
                    />
                    <Details
                        type="Start of Technical Education"
                        time="2023"
                        place="Technical Course in Systems Development"
                        info="Started technical education in Systems Development, where I learned languages such as HTML, CSS, JavaScript, TypeScript, and Java."
                    />
                    <Details
                        type="Business Administration Degree and Second Job"
                        time="2024"
                        place="Tuna Pagamentos"
                        info="Started my Bachelor's in Business Administration and began working at Tuna Pagamentos, focusing on online payment optimization."
                    />
                    <Details
                        type="Continuation of College Studies and Programming Learning"
                        time="2025"
                        place="Ongoing"
                        info="Currently continuing my college studies and further developing my skills in programming and business administration."
                    />
                </ul>
            </div>
        </section>
    );
}

export default Education;
