import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTiktok } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className="bg-dark1 py-10 px-4">
        <div className="container">
            <div className="flex flex-wrap pb-6 justify-between">
                <div className="lg:w-1/3">
                    <img src="./img/dyktalogo1.png" alt="" />
                    <p className="text-white text-sm">DyktaSticker merupakan sebuah bisnis percetakan dan pemasangan stiker.</p>
                </div>
                <div className="lg:pt-0 pt-10">
                    <h1 className="text-white text-2xl font-semibold">More Information</h1>
                    <p className="text-white text-sm">Informasi lebih detail dapat menghubungi kontak berikut.</p>
                    <div className="flex flex-wrap text-white gap-4">
                        <BsWhatsapp className="my-4" size={25}/>
                        <BsInstagram className="my-4" size={25}/>
                        <BsTiktok className="my-4" size={25}/>
                    </div>
                </div>
            </div>
            <div class="w-full pt-10 border-t border-slate-700">
                <p class="font-medium text-[0.75rem] text-slate-500 text-center">Make by <span class="font-bold text-white ">GIFOUR Production</span>, with <span class="font-bold text-white">React & Tailwind</span>.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer