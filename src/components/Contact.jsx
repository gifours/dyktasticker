import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTiktok } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact" className="py-16">
        <div className="">
            <div className="flex flex-wrap px-4">

                {/* left */}
                <div className="w-full lg:w-1/2 self-center pb-6">
                    <p className="text-xl lg:text-2xl font-semibold text-primary2">Contact Us</p>
                    <h1 className="text-3xl lg:text-4xl font-bold text-dark pb-2">Hubungi Kami diBawah</h1>
                    <p>Anda dapat tetap terhubung dan mendapatkan informasi terkini dengan menghubungi kami melalui berbagai saluran komunikasi di bawah ini.</p>
                    <div className=" items-center flex flex-col gap-4">

                        <div className="flex flex-col lg:flex-row pt-10 gap-4 w-full">
                            {/* WhatsApp */}
                            <div className="wrapContact">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="imgContact">
                                            <BsWhatsapp size={25}/>
                                        </div>
                                        <div className="detailContact">
                                            <div className="font-semibold">Chat</div>
                                            <div>0858 4844 3321</div>
                                        </div>
                                    </div>
                                    <a className="buttonContact" href="https://api.whatsapp.com/send/?phone=6285848443321&text&type=phone_number&app_absent=0">Chat Now</a>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="wrapContact">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="imgContact">
                                            <BiMap size={25}/>
                                        </div>
                                        <div className="detailContact">
                                            <div className="font-semibold">Lokasi</div>
                                            <div>Jl. Pramabanan KM 2</div>
                                        </div>
                                    </div>
                                    <a className="buttonContact" href="https://www.google.com/maps/place/Dykta+Sticker/@-7.7705261,110.4805534,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb716889133a059fc!8m2!3d-7.7705051!4d110.4827331?shorturl=1">Check Now</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            {/* Instagram */}
                            <div className="wrapContact">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="imgContact">
                                            <BsInstagram size={25}/>
                                        </div>
                                        <div className="detailContact">
                                            <div className="font-semibold">Instagram</div>
                                            <div>Dykta Sticker</div>
                                        </div>
                                    </div>
                                    <a className="buttonContact" href="https://www.instagram.com/cutting_sticker_yogyakarta">Visit Now</a>
                                </div>
                            </div>

                            {/* TikTok */}
                            <div className="wrapContact">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="imgContact">
                                            <BsTiktok size={25}/>
                                        </div>
                                        <div className="detailContact">
                                            <div className="font-semibold">TikTok</div>
                                            <div>@dyktasticker</div>
                                        </div>
                                    </div>
                                    <a className="buttonContact" href="https://www.tiktok.com/@dyktasticker">Visit Now</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* right */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-[500px] h-[300px] lg:h-[600px] rounded-t-full overflow-hidden"> 
                        <img className="h-full w-full object-cover" src="./img/toko.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact