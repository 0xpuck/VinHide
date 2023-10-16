import react from 'react';

const DeleteVin = () => {
    return (
        <div className="pb-8 lg:pb-9 mt-10" id='howItWorks'>
            <div className="w-full">
                <div className="max-w-xs lg:max-w-lg mx-auto bg-white rounded-lg">
                    <div className="text-center grid justify-items-auto grid-cols-3 items-center">
                        <div className="text-center m-2">
                            <img src="./img/Group_1000001900_1.png"/>
                        </div>
                        <div className="text-center m-2 invisible lg:visible">
                            <img className="mx-auto" src="./img/_2220662746160.png"/>
                        </div>
                        <div className="text-center m-2">
                            <img src="./img/Group_1000001901.png"/>
                        </div>
                    </div>
                </div>
                <p className="text-center max-w-xs mx-auto px-10 text-gray-400 text-sm lg:max-w-lg lg:text-lg my-4 lg:my-5">We can accept other coins as well, just let us know!</p>
                <div className="text-center m-2 visible lg:invisible w-[91px] h-[31px] mx-auto">
                    <img className="mx-auto" src="./img/_2220662746160.png"/>
                </div>
                <p className="text-center max-w-xs mx-auto px-10 text-gray-400 text-sm md:max-w-lg md:text-lg my-4 md:mt-5">HOW IT WORK</p>
                <p className="text-center font-sans font-bold text-lg text-black">Delete <label className="text-teal-500">VIN</label> history</p>
                <div className="max-w-xs md:max-w-3xl mx-auto bg-white rounded-lg">
                    <div className="text-center grid justify-items-auto grid-cols-1 lg:grid-cols-5 items-center">
                        <div className="text-center m-2">
                            <img className="mx-auto" src="./img/Group_1000001906.png"/>
                            <p className="mt-0 font-bold visible lg:hidden">Request</p>
                            <p className=" text-gray-400 visible lg:hidden">You are leaving a request.<br/>We contact you to clarifyall the<br/>details</p>
                        </div>
                        <div className="text-center m-2">
                            <img className="mx-auto hidden lg:block" src="./img/Line3.png"/>
                            <img className="mx-auto visible lg:hidden" src="./img/Line4.png"/>
                        </div>
                        <div className="text-center m-2">
                            <img className="mx-auto" src="./img/Group_1000001907.png"/>
                            <p className="mt-0 font-bold visible lg:hidden">Payment</p>
                            <p className=" text-gray-400 visible lg:hidden">You make the payment and<br/>weperform the service</p>
                        </div>
                        <div className="text-center m-2">
                            <img className="mx-auto hidden lg:block" src="./img/Line3.png"/>
                            <img className="mx-auto visible lg:hidden" src="./img/Line4.png"/>
                        </div>
                        <div className="text-center m-2">
                            <img className="mx-auto" src="./img/Group_1000001905.png"/>
                            <p className="mt-0 font-bold visible lg:hidden">VIN removal</p>
                            <p className=" text-gray-400 visible lg:hidden">You receive a report on the<br/>work done</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs md:max-w-4xl mx-auto bg-white rounded-lg hidden lg:block">
                    <div className="text-center grid justify-items-auto items-stretch grid-cols-1 lg:grid-cols-3 items-center">
                        <div className="text-center m-2 ps-3 pe-7">
                            <p className="mt-0 font-bold">Request</p>
                            <p className=" text-gray-400">You are leaving a request.<br/>We contact you to clarifyall the<br/>details</p>
                        </div>
                        <div className="text-center m-2 px-5">
                            <p className="mt-0 font-bold">Payment</p>
                            <p className=" text-gray-400">You make the payment and<br/>weperform the service</p>
                        </div>
                        <div className="text-center m-2 ps-7 pe-3">
                            <p className="mt-0 font-bold">VIN removal</p>
                            <p className=" text-gray-400">You receive a report on the<br/>work done</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteVin;