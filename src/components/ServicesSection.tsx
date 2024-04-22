import React from 'react'
import { ServicesProps } from '@/types/interface'

const ServicesSection = (props: ServicesProps ) => {
    return (
        <div className='md:w-96 border-2 border-slate-900 hover:shadow-2xl py-14 px-10 mx-2 my-8 rounded-lg 
                    bg-gradient-to-r from-indigo-100 dark:from-indigo-700 to-sky-100 dark:to-sky-400'>
            <div className='text-7xl'>{props.icon}</div>
            <div className='text-3xl py-4 font-semibold'>{props.name}</div>
            <div>{props.detail}</div>
            <div className='mt-10 text-lg font-semibold'><a href="#projects">Learn More -&gt;</a></div>
        </div>
    )
}

export default ServicesSection