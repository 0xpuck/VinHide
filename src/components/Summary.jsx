import react from 'react';

const Summary = () => {
    return (
        <div className="pb-5 lg:pb-9 pt-10 bg-gray-100" id='whyUs'>
            <div className="grid justify-items grid-cols-1 lg:grid-cols-2 lg:ps-20">
                <div className="flex-auto lg:max-w-3xl text-right m-2 hidden lg:block">
                    <img className="ms-auto" src="./img/Image.png"/>
                </div>
                <div className="m-2 w-full lg:flex-auto max-w-lg lg:ps-10 mx-auto lg:m-2">
                    <div className="bg-no-repeat bg-right bg-[length:110px_90px] bg-[url('./img/RedMazdaCar_1180x6642.png')] lg:bg-none ps-5 lg:ps-none">
                        <p className="text-left text-gray-400 text-sm">Why choose us</p>
                        <p className="text-left font-bold text-3xl mt-3 mb-9">Who are we?</p>
                    </div>
                    <div className="flex px-5 lg:px-none">
                        <div className="flex-none w-[72px] bg-no-repeat bg-start bg-[url('./img/Group27.png')]"></div>
                        <div className="">
                            <p className="text-gray-400 text-sm text-justify">The team at HideAutoVIN.com specializes in remove car history by VIN (vehicle identification number) of your vehicle from various online sources to protect your privacy and preserve the value of your vehicle.</p>
                        </div>
                    </div>
                    <div className="px-5 lg:px-none">
                        <p className="text-left font-bold text-3xl my-3">Who are we?</p>
                        <p className="text-gray-400 text-sm text-justify">Do you want to sell your car or just protect your privacy? Delete car history can be an important step in protecting your personal information and preserving the value of your vehicle. A vin cleaner service can help effectively clear vin history and ensure a clean history for cars purchased at Copart and IAAI auctions. Remove vin number from web is critical to protecting your privacy and preserving the value of your vehicle. Leave an application on our website and we will advise you on how the vin cleaner service works.<br/>We offer comprehensive remove car history from all online resources such as bidfax.info, carfast.express, plc.ua, stat.vin, copart.com and more, as well as from search engines. We will also remove the photos of the car, which are posted on the network.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;