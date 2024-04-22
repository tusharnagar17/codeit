import React from 'react'
import ContactBtn from './ContactBtn'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 dark:bg-gray-800 h-3/6'>
        <div className='md:flex justify-between items-center max-w-6xl mx-auto py-6 md:py-14 px-6'>
            <div>
                <div className=""> <Image src="/codeit-logo.png" alt='code-it logo' height={150} width={200} /></div>
                <div className="text-lg pt-2 text-wrap text-2-xl">We are focused on providing the best digital services to our clients.
                <br />
                 Contact us for more information.</div>

                 {/* Social Icons */}
                <div className='text-sm pt-5 md:pt-10'>
                    @ 2024 Codeit
                </div>
            </div>
            <div>
                <div className='items-center'>
                    
                    <ContactBtn />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer