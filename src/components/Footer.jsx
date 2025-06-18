import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='w-full bg-[#46241E] p-[30px] h-[180px] flex flex-col md:flex-row items-center justify-between'>
            <div className='h-[140px] w-[470px] justify-around flex flex-col'>

                <div className='h-[74px]  w-full'>
                    <Image
                        width={470}
                        height={74}
                        alt="logo"
                        src="/logo-dyb.svg"
                        className="object-contain"
                    /></div>

                <div className='h-[17px] w-full'><p className='text-[#EAE4D6]'>© 2025 DYB Arqs. Todos los derechos reservados. </p></div>
            </div>
            <div className='w-[310px] h-full flex justify-around text-[#EAE4D6]'>
                <div><p>proyectos</p></div>
                <div><p>nosotros</p></div>
                <div><p>contactos</p></div>
            </div>
            <div className='w-[112px] h-full flex justify-around '>
                <div className='h-[24px] relative  w-[24px]'>
                    <Image
                        fill
                        alt="logo"
                        src="/insta.svg"
                        className="object-contain"
                    /></div>
                <div className='h-[24px] relative w-[24px]'>
                    <Image
                        fill
                        alt="logo"
                        src="/linkedin.svg"
                        className="object-contain"
                    /></div>
                <div className='h-[24px] relative  w-[24px]'>
                    <Image
                        fill
                        alt="logo"
                        src="/you-tube.svg"
                        className="object-contain"
                    /></div>
            </div>

        </div>
    )
}

export default Footer