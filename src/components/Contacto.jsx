import React from 'react';
import Image from 'next/image';
import { inter, roboto } from "@/app/[locale]/ui/fonts";
const Contacto = () => {
    return (
        <div>
            <div className='h-[150px] w-full bg-[#EAE4D6]'></div>
            <div className='h-[600px] w-full flex'>
                <div className='bg-[#3F4531] w-[50%] h-full flex flex-col justify-between p-6 text-white'>
                    <div className='space-y-4 h-full flex flex-col justify-between pt-[60px] pl-[34px] pb-[42px]'>
                        <h2 className={`text-[#EAE4D6] text-[36px] font-[500] leading-[110%] tracking-[0] ${inter.className}`}>Contactanos</h2>
                        <div className='text-sm  h-[100px] flex flex-col justify-around'>
                            <p className={` ${roboto.className} text-[16px] uppercase font-[500] leading-[110%] tracking-[10%] text-[#EAE4D6]`}>Envianos un mail a: <span className='underline'>info@dybarros.com</span></p>
                            <p className={` ${roboto.className} text-[16px] uppercase font-[500] leading-[110%] tracking-[10%] text-[#EAE4D6]`}>Seguinos en nuestras redes:</p>
                            <div className='flex space-x-4 mt-1'>
                                <div className='h-[24px] relative w-[24px]'>
                                    <Image fill alt="logo" src="/logos/insta.svg" className="object-contain" />
                                </div>
                                <div className='h-[24px] relative w-[24px]'>
                                    <Image fill alt="logo" src="/logos/linkedin.svg" className="object-contain" />
                                </div>
                                <div className='h-[24px] relative w-[24px]'>
                                    <Image fill alt="logo" src="/logos/you-tube.svg" className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-[#EAE4D6] w-[50%] h-full p-6'>
                    <form className='space-y-3 pt-[60px]  pb-[42px]'>
                    <div className='h-[68px]'>
                            <label className={` mb-2 block ${roboto.className} text-[16px]  font-[500] leading-[110%] tracking-[10%] text-[#222222]`}>Nombre y Apellido*</label>
                            <input
                                type="text"
                                className='w-full p-3 h-[40px] border border-[#222222] rounded-none'
                                required
                            />
                        </div>
                        <div className='h-[68px]'>
                            <label className={ ` mb-2 block ${roboto.className} text-[16px]  font-[500] leading-[110%] tracking-[10%] text-[#222222]`}>Email*</label>
                            <input
                                type="email"
                                className='w-full p-3 border h-[40px] border-[#222222]rounded-none'
                                required
                            />
                        </div>
                        <div className='h-[68px]'>
                            <label className={` mb-2 block ${roboto.className} text-[16px]  font-[500] leading-[110%] tracking-[10%] text-[#222222]`}>Teléfono</label>
                            <input
                                type="tel"
                                className='w-full p-3 border h-[40px] border-[#222222] rounded-none'
                            />
                        </div>
                        <div>
                            <label className={`mb-2 block ${roboto.className} text-[16px]  font-[500] leading-[110%] tracking-[10%] text-[#222222]`}>Mensaje*</label>
                            <textarea
                                className='w-full p-3 h-[120px] border border-[#222222] rounded-none '
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={ `  block ${roboto.className} text-[16px]  font-[500] leading-[110%] tracking-[10%] text-[#222222]`}
                        >
                            ENVIAR →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;