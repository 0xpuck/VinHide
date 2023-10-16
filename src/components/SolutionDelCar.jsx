import {useState} from 'react';

const SolutionDelCar = ({onclick, setVin}) => {
    const [input, setInput] = useState('');

    const onCheck = (e) => {
        setVin(input);
        onclick(input);
    }

    const onchange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="md:pb-18 md:pb-9" id='home'>
            <div className="bg-repeat-x bg-[url('./img/Bg.png')] bg-top bg-[length:200px_470px] md:bg-[length:200px_520px] lg:bg-[length:200px_535px]">
                <div>
                    <div className="flex-col">
                        <div className="flex pt-20 pb-24 lg:pb-28 ">
                            <div className="lg:flex-auto lg:w-1/12"></div>
                            <div className="flex-auto w-full lg:w-11/12 px-5 md:px-10 bg-no-repeat bg-right-bottom bg-[length:200px_100px] sm:bg-[length:400px_200px]   md:bg-[length:600px_300px] lg:bg-[length:700px_310px] bg-[url('./img/Daco_5879771_1.png')]">
                                <div className="">
                                    <p className="font-sans text-3xl md:text-6xl text-black max-w-xs md:max-w-xl">Your Best Solution to <label className="text-teal-500">Delete</label> car history.</p>
                                    <img src="./img/Rectangle_16.png"/>
                                    <p className="text-[9px] md:text-base flex-auto text-gray-400 max-w-[270px] md:max-w-md pe-20 md:pe-5 my-3 md:my-none">Do you have a request to delete car history bought at Copart and IAAI auctions? Do you want to clear vin history from the internet?</p>
                                    <button type="button"  className="mt-4 md:mt-8 bg-teal-500 font-bold text-white py-3 px-2 sm:px-5 md:px-12 rounded-2xl md:rounded-lg"> <p className="text-xs md:text-base">Get a free Consultation</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="max-w-xs md:max-w-3xl mx-auto bg-white rounded-lg shadow-lg align-bottom">
                        <div className="text-center grid justify-items-auto grid-cols-1 md:grid-cols-3 items-center">
                            <div className="m-2">
                                <p className="font-sans font-bold text-lg text-black">Check <label className="text-teal-500">VIN</label> code</p>
                            </div>
                            <div className="m-2">
                                <input className="text-center rounded-lg border-solid border-gray-400 border-2 py-3 px-12" placeholder="Enter the vehicle’s VIN" value={input} onChange={onchange} />
                            </div>
                            <div className="m-2">
                                <button type="button"  className="bg-teal-500 text-white py-3 px-12 rounded-lg" onClick={onCheck}> <p>Check</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionDelCar;