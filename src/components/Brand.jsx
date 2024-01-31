import React from 'react'
import dataBrand from '../data/brand.json'

const Brand = () => {
  return (
    <section id="product" className="py-8">
        <div className="container">
            <div className="flex flex-wrap justify-between px-4">
                {dataBrand.map((card) => (
                    <img className="max-w-[140px] lg:max-w-[180px]" src={card.imgbrand} alt="" />
                ))}

            </div>
        </div>
    </section>
  )
}

export default Brand