import React, { Component } from "react";
import { CarouselData } from "./CarouselData";

class SayAboutUs extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          currentSlide: 0,
          paused: false,
        };
      }
    
      componentDidMount() {
        setInterval(() => {
          if (this.state.paused === false) {
            let newSlide =
              this.state.currentSlide === CarouselData.length - 1
                ? 0
                : this.state.currentSlide + 1;
            this.setState({ currentSlide: newSlide });
          }
        }, 3000);
      }
    
      nextSlide = () => {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      };
    
      prevSlide = () => {
        let newSlide =
          this.state.currentSlide === 0
            ? CarouselData.length - 1
            : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
      };
    
      setCurrentSlide = (index) => {
        this.setState({ currentSlide: index });
      };
    
    render() {
        return (
            <div id="reviews" className="lg:pb-24 lg:pb-9 pt-10 lg:pt-10 bg-no-repeat bg-right-bottom bg-[length:130px_150px] sm:bg-[length:160px_180px] md:bg-[length:250px_220px] lg:bg-[length:400px_300px] bg-[url('./img/image_7_1.png')] md:bg-[url('./img/image7.png')] pb-12">
                <div className="w-full">
                    <div>
                        <p className="text-sm text-center text-gray-400">REVIEWS</p>
                        <p className="pb-2 mx-auto mt-3 max-w-xs text-3xl font-bold text-center md:max-w-md">What people <label className='text-teal-500'>say</label> about us?</p>
                    </div>
                    <div className="flex mx-auto text-center lg:max-w-7xl">
                        <div className='hidden flex-none my-auto w-1/12 lg:block'>
                            <button className='my-auto' type='button' onClick={this.prevSlide}><img src='./img/Group_1.png'/></button>
                        </div>
                        <div className="flex-auto p-10 w-10/12" onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                            {CarouselData.map((slide, index) => {
                                return (
                                    <div key={index} 
                                    className={
                                        index === this.state.currentSlide
                                        ? "block w-full h-auto object-cover"
                                        : "hidden"
                                    }
                                    onMouseEnter={() => {
                                        this.setState({ paused: true });
                                    }}
                                    onMouseLeave={() => {
                                        this.setState({ paused: false });
                                    }}>
                                        <div className='p-12 mx-auto max-w-3xl rounded-3xl border-2 border-teal-500 border-solid'>
                                            <div className='w-full'><img src='./img/icomoon.png'/></div>
                                            <div className='flex-row-reverse mb-8 lg:flex lg:mb-0'>
                                                <div className='avata flex-none w-[92px] h-[92px] sm:w-[115px] sm:h-[115px] md:w-[138px] md:h-[138px] lg:w-[160px] lg:h-[160px] mx-auto lg:ms-10'>
                                                    <img src={slide.image}
                                                        alt="This is a carousel slide"
                                                        key={index}
                                                        className={
                                                            index === this.state.currentSlide
                                                            ? "block w-full h-auto object-cover border-solid border-teal-500 border-2 rounded-full w-[92px] h-[92px] sm:w-[115px] sm:h-[115px] md:w-[138px] md:h-[138px] lg:w-[160px] lg:h-[160px]"
                                                            : "hidden"
                                                        }
                                                        onMouseEnter={() => {
                                                            this.setState({ paused: true });
                                                        }}
                                                        onMouseLeave={() => {
                                                            this.setState({ paused: false });
                                                        }}/>
                                                </div>
                                                <div className='my-auto w-full me-auto'>
                                                    <p className='mt-5 text-justify lg:mt-0 lg:max-w-lg lg:text-left'>
                                                        <snap key={index}
                                                            className={
                                                                index === this.state.currentSlide
                                                                ? "block w-full h-auto object-cover"
                                                                : "hidden"
                                                            }
                                                            onMouseEnter={() => {
                                                                this.setState({ paused: true });
                                                            }}
                                                            onMouseLeave={() => {
                                                                this.setState({ paused: false });
                                                            }}>{slide.artical}</snap>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-left'>
                                                    <snap key={index}
                                                            className={
                                                                index === this.state.currentSlide
                                                                ? "block w-full h-auto object-cover"
                                                                : "hidden"
                                                            }
                                                            onMouseEnter={() => {
                                                                this.setState({ paused: true });
                                                            }}
                                                            onMouseLeave={() => {
                                                                this.setState({ paused: false });
                                                            }}>{slide.name}</snap>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='hidden flex-none my-auto w-1/12 lg:block'>
                            <button className='my-auto' type='button' onClick={this.nextSlide}><img src='./img/Group_2.png'/></button>
                        </div>
                    </div>
                    <div className='mx-auto lg:hidden flex w-[200px]'>
                        <div className='flex-none mx-auto'>
                            <button className='mx-auto' type='button' onClick={this.prevSlide}><img src='./img/Group_1.png'/></button>
                        </div>
                        <div className='flex-none mx-auto'>
                            <button className='mx-auto' type='button' onClick={this.nextSlide}><img src='./img/Group_2.png'/></button>
                        </div>
                    </div>
                    <div className='mx-auto w-[150px] flex justify-center'>
                        {CarouselData.map((element, index) => {
                            return (
                                <div
                                className={
                                    index === this.state.currentSlide
                                    ? "h-3 w-3 bg-teal-500 rounded-full mx-2 mb-2 cursor-pointer"
                                    : "h-3 w-3 bg-white border-solid border-teal-500 border-2 rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                    this.setCurrentSlide(index);
                                }}
                                ></div>
                            );
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default SayAboutUs;