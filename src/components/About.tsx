import React from 'react'
import Image from 'next/image'
import ContactBtn from './ContactBtn'

const About = () => {
    return (
        <div className='max-w-6xl mx-auto my-20yarn h-screen md:flex md:justify-around md:items-center border-b-[0.1px]'>
            <div className='max-w-3xl'>
                <Image src="/about.jpg" alt='coding-images' width={500} height={800}
                />
            </div>
            <div className=''>
                <div className='text-5xl font-bold text-wrap my-4 text-center text-red-400'>
                    <span className='text-sky-500' >Your Idea -&gt;</span>
                    <br />
                    We design -&gt;
                    <br />
                    We code -&gt;
                    <br />
                    We publish -&gt;
                    <br />
                    <span className='text-sky-500' >Your Product</span>
                </div>
                <div className='mx-8 font-semibold'>
                    If you have an idea, we can help you to bootstrap it from scratch.
                    <br />
                    We follow designing and developing app both for Android / IOS and website.
                    <br />
                    We are genuinely the all-in-one answer.
                </div>
                <div className='mx-10 my-6 text-lg font-bold'>
                    -&gt; Are you looking to hire professionals?
                    <br />
                    -&gt; Are you lacking a strong team?
                    <br />
                    -&gt; Do you want to bring your ideas to life?
                </div>
                <div className='flex justify-center'>
                    <ContactBtn />
                </div>
            </div>
        </div>
    )
}

export default About