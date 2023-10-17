import React, { useContext, useState } from "react";
import { CarContext } from "../App";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PriceData } from "../components/PriceData";
import ContactUs from "../components/ContactUs";

const Detail = () => {
  const carContext = useContext(CarContext);
  const images = carContext.carInfo.imageData;
  let organics = carContext.carInfo.webData;
  organics.sort((a, b) => {
    const urlA = PriceData.find((data) => a.link.includes(data.url));
    const urlB = PriceData.find((data) => b.link.includes(data.url));
  
    if (urlA && !urlB) {
      return -1; // A has the URL, but B doesn't, so A comes first
    } else if (!urlA && urlB) {
      return 1; // B has the URL, but A doesn't, so B comes first
    } else {
      return 0; // Both have the URL or both don't have the URL, maintain original order
    }
  }); 

  const filteredData = images.filter(obj => obj.original.includes('copart'));
  const [showAll, setShowAll] = useState(false);
  const visibleOrganics = showAll ? organics : organics.slice(0, 8);

  return (
    <div className="p-3 w-full">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-center text-gray-900 md:text-4xl lg:text-5sxl dark:text-white">{organics[0].title}</h1>
      <div className="mx-auto mt-7 w-3/12">
        <Carousel dynamicHeight={true}>
          {filteredData ? (
            filteredData.slice(0, 6).map((obj, index) => (
              <img key={index} className="rounded-lg" src={obj.original} alt={`Slide ${index + 1}`} />
            ))
          ) : (
            images.slice(0, 6).map((obj, index) => (
              <img key={index} className="rounded-lg" src={obj.original} alt={`Slide ${index + 1}`} />
            ))
          )}
        </Carousel>
      </div>

      <div className="flex flex-col mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="p-1.5 w-6/12 inline-block align-middle">
            <div className="overflow-hidden rounded-lg border">
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-200">
                  {visibleOrganics.map((organic, index) => {
                    const priceData = PriceData.find((data) =>
                      organic.link.toLowerCase().includes(data.url.toLowerCase())
                    );
                    const price = priceData ? priceData.price : "N/A";

                    return (
                      <tr className="my-5 rounded-full" key={index}>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href={organic.link}
                          >
                            {organic.site_title}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {price} $
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!showAll && organics.length > 8 && (
                <div className="px-6 py-4 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setShowAll(true)}
                  >
                    Show All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Detail;
