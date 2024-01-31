import React from 'react'
import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemState, AccordionItemPanel } from 'react-accessible-accordion'
import dataValue from '../data/value.jsx'
import { MdOutlineArrowDropDown } from "react-icons/md";


const Value = () => {
  return (
    <section id="value" className="py-6 px-4">
        <div className="">
          <div className="flex flex-wrap">
            {/* left */}
            <div className=" w-full lg:w-1/2 flex justify-center">
              <div className="w-[500px] rounded-t-full overflow-hidden"> 
                <img className="h-full w-full object-cover" src="./img/wrapping.jpg" alt="" />
              </div>
            </div> 

            {/* right */}
            <div className=" w-full lg:w-1/2 py-4 justify-center">
              <p className="text-xl lg:text-2xl font-semibold text-primary2">Our Value</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-dark pb-2">Fasilitas Yang Kami Tawarkan</h1>
              <p>Fasilitas yang ditawarkan di tempat ini mencakup beragam layanan yang dirancang untuk memenuhi kebutuhan dan kenyamanan para pengunjung.</p>
              
              <Accordion className="pt-10 flex flex-col gap-4 ease-in-out transition-all duration-500" allowMultipleExpanded={false} preExpanded={[0]}>
                  {dataValue.map((item, i) => {
                    return (
                      <AccordionItem className="wrapValue" key={i} uuid={i}>
                        <AccordionItemHeading>
                          <AccordionItemButton className="flex flex-wrap justify-between items-center">
                            <div className="bg-sky-200 text-sky-700 p-1 lg:p-3 rounded-md">{item.icon}</div>
                            <div className="font-bold text-dark text-sm lg:text-lg">{item.heading}</div>
                            <div className="bg-sky-200 text-sky-700 p-1 lg:p-3 rounded-md">
                              <MdOutlineArrowDropDown size={20} />
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <p className="text-secondary text-center text-sm pt-6 px-6">{item.detail}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            </div>

          </div>
        </div>
    </section>
    
  )
}

export default Value