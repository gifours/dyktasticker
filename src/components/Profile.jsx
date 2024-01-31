import React from 'react'
import { BiMap } from 'react-icons/bi'

const Profile = () => { 
  return (
    <section id="home" className="pt-36 pb-16 px-4">
        <div className=" absolute inset-0 w-full bg-cover -z-10" style={{backgroundImage: 'url("./img/bahan.jpg")'}}></div>
        <div className=" absolute inset-0 bg-black w-full opacity-50 -z-10"></div>
        <div className="  inset-0 container">
            <div className="flex flex-wrap">

                {/* left side */}
                <div className="w-full lg:w-1/2 self-center">
                    <h1 class="font-semibold text-4xl lg:text-6xl text-white mb-4">Melayani Percetakan & Pemasangan Sticker</h1>
                    <p class="font-medium text-white mb-10">Dykta Sticker Melayani, Cetak Custom Stiker A3, Banner, Decal, Stiping, Fullblok Body, Lis Cutting.</p>
                    <div className="bg-white w-full h-16 rounded-md flex flex-row justify-between p-4 items-center mb-10">
                        <div className="text-sky-700">
                            <BiMap size={25}/>
                        </div>
                        <div className="text-sm lg:text-lg px-2">Jl. Prambanan-Piyungan Km.2</div>
                        <a className="bg-sky-200 text-sky-700 font-semibold rounded-md px-6 py-2 hover:bg-sky-700 hover:text-white transition-all duration-500" href="https://www.google.com/maps/place/Dykta+Sticker/@-7.7705261,110.4805534,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb716889133a059fc!8m2!3d-7.7705051!4d110.4827331?shorturl=1">search</a>
                    </div>
                    <div className="flex flex-wrap justify-between lg:px-16">
                        <div className=" text-center">
                            <h1 className="text-primary2 text-2xl lg:text-4xl">1000+</h1>
                            <p className="text-white text-sm">Decal Sticker</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-primary2 text-2xl lg:text-4xl">2000+</h1>
                            <p className="text-white text-sm">Cutting Sticker</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-primary2 text-2xl lg:text-4xl">1500+</h1>
                            <p className="text-white text-sm">Blok Body</p>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className=" pt-10 lg:w-1/2 flex justify-center">
                    <img className="w-[500px] rounded-t-full shadow-xl" src="./img/bahan.jpg" alt="" />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Profile