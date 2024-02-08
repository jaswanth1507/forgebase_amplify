"use client"

import Image from "next/image"
import img from "../../public/Images/comingsoon.svg"

export default function Modal({modal,closemodal}){



    return(
         
        <div className="w-full h-fit mt-[100px] z-50 ">
   
        
        <div className={`fixed left-0 top-0  bg-black bg-opacity-50 z-50 h-screen  w-screen flex justify-center items-center  ${modal?" ":"hidden"}`}>
            
            <div className={`bg-white w-fit my-10 mx-auto h-fit  lg:w-fit items-center overflow-hidden shadow-lg shadow-black rounded-lg  flex flex-col flex-wrap`}>
                <button className="w-full flex flex-row p-6" onClick={closemodal}><i className="fa-solid fa-x fa-lg  "></i></button>
                <div className="flex w-full ">
                <div className=" mx-20 w-full text-2xl md:text-3xl text-center lg:text-6xl my-4 font-semibold text-[#2F3747] py-4 ">Coming soon!</div>

                </div>
                
                <div>
                <Image src={img} width={600} className=" w-full h-full  items-center mx-auto  mb-8 "/>
                </div>
            
            
            </div>
        

        </div>
            
        </div>
    )
}