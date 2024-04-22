import React from 'react'
import ServicesSection from './ServicesSection'
import { ServicesProps } from '@/types/interface'
import { SiExcalidraw } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const ServicesList: ServicesProps[]  = [
    { icon: <SiExcalidraw />, name: "Branding & Design", detail:
        "Right fron brand design to UI/UX we cover everything to help you bring your ideas to life!"
}, { icon: <FaFileCode />,
    name: "Development", detail: "We have a team of experienced developers to turn your ideas to product.Building Website and Mobile App Development (Android+IOS) from scratch for your business."
}, { icon: <GrDeploy />, name: "Publish", detail: "We take complete responsibility to deploy your website, publish your Android App to PlayStore & IOS App to App Store." }]

const Services = () => {
    return (
        <div className='max-w-6xl mx-auto py-28'>
            <div className='text-center text-6xl font-bold my-8'>Our Services</div>
            <div className='md:flex md:justify-around'>
                {ServicesList.map((service, ind)=> {
                    return <ServicesSection icon={service.icon} name={service.name} detail={service.detail} />
                })}
                
            </div>
        </div>
    )
}

export default Services