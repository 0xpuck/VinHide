const PrivacyHeader = () => {
  return (
    <div className="flex h-44 sm:h-72 bg-no-repeat bg-right bg-[#F7F7F7] bg-[url('./img/privacyheader.png')] max-sm:bg-[length:250px_120px] pb-4 sm:bg-[length:400px_200px] lg:bg-[length:530px_280px]">
      <div className="pt-7 pl-6 sm:pt-16 sm:pl-24 lg:pt-24 lg:pl-32 font-bold">
        <p className="max-sm:hidden sm:text-3xl lg:text-4xl tracking-wider">PRIVACY POLICY / FAQs</p>
        <p className="text-xl sm:hidden tracking-wider">PRIVACY POLICY<br />FAQs</p>
        <p className="max-sm:hidden mt-4 text-sm lg:text-xl tracking-wide">HOME / <span className="text-[#20BFB6]">Privacy policy & FAQs</span></p>
        <p className="text-xs mt-1 sm:hidden">HOME /<br /> <span className="text-[#20BFB6]">Privacy policy & FAQs</span></p>
      </div>
    </div>
  )
}
export default PrivacyHeader;