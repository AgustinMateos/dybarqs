import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='w-full bg-[#46241E] p-[30px] h-auto md:h-[180px] flex flex-col md:flex-row items-center justify-between'>
            <div className='h-auto md:h-[140px] w-full md:w-[470px] justify-around flex flex-col'>

                <div className='h-[74px]  w-full'>
                    <Image
                        width={470}
                        height={74}
                        alt="logo"
                        src="/logo-dyb.svg"
                        className="object-contain"
                    /></div>

                <div className='h-[17px] w-full hidden md:block'><p className='text-[#EAE4D6]'>© 2025 DYB Arqs. Todos los derechos reservados. </p></div>
            </div>
            <div className='w-[320px] flex-col items-center md:items-start md:flex-row h-[186px] md:h-full flex justify-around text-[#EAE4D6]'>
                <div><p className='uppercase'>proyectos</p></div>
                <div><p className='uppercase'>nosotros</p></div>
                <div><p className='uppercase'>contactos</p></div>
            </div>
            <div className='w-full md:w-[112px] pt-[20px] pb-[10px] md:pt-[0px] md:pb-[0xp]   h-auto md:h-full flex justify-around '>
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
            <div className='h-auto md:h-[17px] w-full block md:hidden pt-[10px]'><p className='text-[#EAE4D6] text-[14px] text-center '>© 2025 DYB Arqs. Todos los derechos reservados. </p></div>
        </div>
    )
}

export default Footer