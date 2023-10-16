const ContactUs = () => {
    return (
        <div id='contactUs' className="lg:pb-24 lg:pb-9 pt-10 lg:pt-20 bg-no-repeat bg-left-bottom bg-[length:400px_300px] lg:bg-[url('./img/Daco_5879771_2.png')] bg-gray-100">
            <div className="w-full">
                <div className="bg-no-repeat bg-left bg-[length:110px_90px] bg-[url('./img/Daco_5879771_2.png')] lg:bg-none">
                    <p className="text-center text-gray-400 text-sm">Get in touch</p>
                    <p className="text-center font-bold text-3xl mt-3 pb-2">Contact Us</p>
                    <img className="mx-auto" src="./img/Rectangle_26.png" />
                </div>
                <div className="text-center grid justify-items-auto grid-cols-1 lg:grid-cols-2 lg:max-w-2xl lg:mx-auto items-center  lg:pb-32">
                    <div className="text-left m-2 max-w-xs mx-auto md:max-w-md lg:max-w-xs">
                        <p className="mb-4">Leave us a message</p>
                        <input className="text-left w-full my-3 rounded-xl border-solid border-gray-400 border-2 py-2 px-5" placeholder="Email Address"></input>
                        <input className="text-left w-full my-3 rounded-xl border-solid border-gray-400 border-2 py-2 px-5" placeholder="Email Address"></input>
                        <input className="text-left w-full my-3 rounded-xl border-solid border-gray-400 border-2 pt-2 pb-20 px-5" placeholder="Your Message"></input>
                        <button type="button" className="mt-4 bg-teal-500 w-full font-bold text-white py-3 px-5 md:px-12 rounded-lg"> <p className="text-xs md:text-base">Send</p></button>
                    </div>
                    <div className="text-left m-2 max-w-xs mx-auto md:max-w-md lg:max-w-xs lg:ms-5 lg:mt-4">
                        <div className="w-full flex my-5">
                            <div className="flex-none"><img className="my-3" src="./img/Frame.png" /></div>
                            <div className="flex-auto ps-5">
                                <p className="mt-0 font-bold">Request</p>
                                <p className=" text-gray-400">You leave a request with a phone number and vin</p>
                            </div>
                        </div>
                        <div className="w-full flex my-5">
                            <div className="flex-none"><img className="my-3" src="./img/Frame_1.png" /></div>
                            <div className="flex-auto ps-5">
                                <p className="mt-0 font-bold">Feedback</p>
                                <p className=" text-gray-400">Our manager will contact you and provide all information</p>
                            </div>
                        </div>
                        <div className="w-full flex my-5">
                            <div className="flex-none"><img className="my-3" src="./img/Frame_2.png" /></div>
                            <div className="flex-auto ps-5">
                                <p className="mt-0 font-bold">Payment</p>
                                <p className=" text-gray-400">After full payment, the removal process starts to work</p>
                            </div>
                        </div>
                        <div className="w-full flex my-5">
                            <div className="flex-none"><img className="my-3" src="./img/Frame_3.png" /></div>
                            <div className="flex-auto ps-5">
                                <p className="mt-0 font-bold">Report</p>
                                <p className=" text-gray-400">At the end of the work you receive a report</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;