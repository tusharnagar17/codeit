import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <div className='text-7xl text-wrap mx-10 font-bold px-4'>Let connect<span className='text-sky-500'>.</span></div>
            <div className='mt-20 py-6 px-10 border-2 border-sky-200 rounded-2xl bg-sky-100'>
                <form>
                    <input type="text" placeholder='Your Name' className='my-2 px-4 w-full py-2 rounded-2xl' />
                    <input type="email" placeholder='Your Name' className='my-2 px-4 w-full py-2 rounded-2xl' />
                    <input type="tel" placeholder='Your Name' className='my-2 px-4 w-full py-2 rounded-2xl' />
                    <input type="text" placeholder='Phone Number' className='my-2 px-4 w-full py-2 rounded-2xl' />

                </form>
            </div>
        </div>
    )
}

export default ContactForm