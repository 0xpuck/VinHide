import react from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const NoPage = () => {
    return (
        <div className="h-[300px] w-[500px]">
            <Carousel>
                    <img src="./img/modal_image1.png" />
                    <img src="./img/modal_image1.png" />
                    <img src="./img/modal_image1.png" />
            </Carousel>
        </div>
    )
};

export default NoPage;