import React from "react";
import { PropagateLoader } from 'react-spinners';
import { ClipLoader } from 'react-spinners';

export default function Modal({vin}) {
  return (
    <>
        <div
        className="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none"
        >
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
                <div className="flex relative flex-col w-full bg-white rounded-lg border-0 shadow-lg outline-none focus:outline-none">
                    <div className="relative flex-auto p-6 px-0">
                        <p className="text-xl font-bold text-center">Please <span className="text-cyan-400">Wait</span></p>
                        <img className="w-[80px] sm:w-auto float-left" src="./img/modal_image2.png" />
                        <img className="w-[80px] sm:w-auto float-right" src="./img/modal_image1.png" />
                        <div className="md:inline-block">
                            <p className="clear-none mt-10 text-xl font-bold text-center">We are checking your <span className="text-cyan-400">VIN</span></p>
                            <p className="clear-none mx-auto mt-5 text-xl text-center">{vin}</p>
                        </div>
                        <div className="flex clear-both justify-center">
                        {/* <PropagateLoader color="#36d7b7"  className="flex justify-center"/> */}
                        <ClipLoader color="#36d7b7" size={40} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>          
    </>
  );
}