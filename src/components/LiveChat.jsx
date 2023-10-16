import phone1 from '../img/phone1.png';
import phone2 from '../img/phone2.png';
import whatsappicon from '../img/whatsapp.png';
import iconup from '../img/iconup.png';

const LiveChat = () => {
  return (
    <div>
      <div className="relative px-6 sm:px-24 lg:px-32 w-full">
        <div className="flex w-full mt-36 bg-no-repeat lg:bg-cover bg-[url('./img/live_chat.png')] rounded-xl">
          <div className="relative max-lg:w-full max-lg:pb-8 lg:pb-12 max-lg:mt-8 lg:mt-16 lg:ml-24">
            <p className="py-4 text-4xl font-bold max-lg:text-center">Live Chat</p>
            <p className="py-2 max-lg:text-center ">For faster, easiner booking and exclusive deals.</p>
            <div className="mt-4 rounded-2xl h-12 w-36 border-2 border-stone-900 text-center py-2 max-lg:mx-auto font-bold"><button>Start</button> Chat</div>
          </div>
          <div className="absolute flex right-56 -mt-32">
            <img src={phone1} className="max-lg:hidden"></img>
            <img src={phone2} className="max-lg:hidden"></img>
          </div>
        </div>
      </div>
      <div className="-mt-32 max-lg:-mt-28 bg-stone-200">
        <div className='max-lg:hidden lg:h-40 border-b-2 border-stone-900 '></div>
        <div className="lg:flex max-lg:h-24 h-44 py-4 grid grid-cols-2 place-content-between px-6 sm:px-24 lg:px-32">
          <h1 className="max-lg:hidden">Copyright 2023 © DeleteVin, All Rights Reserved.</h1>
          <div className="lg:flex max-lg:mt-24 max-lg:block sm:left-24">
            <h1 className="max-lg:text-lg mr-7 max-lg:pt-2">FAQ</h1>
            <h1 className="max-lg:text-lg mr-7 max-lg:pt-2">Privacy Policies</h1>
            <img className="max-lg:pt-2 w-6 h-8 lg:w-6 lg:h-6" src={whatsappicon} alt="whatsapp" />
          </div>
        </div>
        <div className="">
          <a href="#"><img className="absolute max-lg:mt-20 lg:-mt-24 max-lg:pt-2 right-6 sm:right-24 lg:right-16" src={iconup} alt="iconup" /></a>
        </div>
        <div className='lg:hidden max-lg:h-36 border-b-2 border-stone-900 '></div>
        <h1 className="lg:hidden max-lg:text-center">Copyright 2023 © DeleteVin, All Rights Reserved.</h1>
      </div>
    </div>
  )
}
export default LiveChat;