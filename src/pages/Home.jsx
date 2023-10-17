import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs'
import DeleteVin from '../components/DeleteVin';
import SolutionDelCar from '../components/SolutionDelCar';
import Summary from '../components/Summary';

import { Buffer } from 'buffer';
import { CarContext } from '../App';
import SayAboutUs from '../components/SayAboutUs';
import LiveChat from '../components/LiveChat';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [vin, setVin] = useState('');
    const carContext = useContext(CarContext);
    const navigate = useNavigate();
    // const vin = "WBS43AZ06PCM17173";

    const onclick = (paraVin) => {
        setShowModal(true);
      
        const webRequest = fetch('https://api.serphouse.com/serp/live', {
          method: 'POST',
          body: JSON.stringify({
            data: {
              "q": `${paraVin}`,
              "domain": "google.com",
              "loc": "Abernathy,Texas,United States",
              "lang": "en",
              "device": "desktop",
              "serp_type": "web",
              "page": "1",
              "verbatim": "0"
            }
          }),
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": ""
          },
        });
      
        const imageRequest = fetch('https://api.serphouse.com/serp/live', {
          method: 'POST',
          body: JSON.stringify({
            data: {
              "q": `${paraVin}`,
              "domain": "google.com",
              "loc": "Abernathy,Texas,United States",
              "lang": "en",
              "device": "desktop",
              "serp_type": "image",
              "page": "1",
              "verbatim": "0"
            }
          }),
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": ""
          },
        });
      
        Promise.all([webRequest, imageRequest])
          .then(async ([webResponse, imageResponse]) => {
            const webReader = webResponse.body.getReader();
            const imageReader = imageResponse.body.getReader();
            let webChunks = [];
            let imageChunks = [];
      
            while (true) {
              const { value: webValue, done: webDone } = await webReader.read();
              const { value: imageValue, done: imageDone } = await imageReader.read();
      
              if (webDone && imageDone) break;
      
              if (!webDone) webChunks.push(webValue);
              if (!imageDone) imageChunks.push(imageValue);
            }
      
            const webBody = Buffer.concat(webChunks).toString();
            const imageData = Buffer.concat(imageChunks).toString();
            
            const webData = JSON.parse(webBody);
            const imageDataParsed = JSON.parse(imageData);

            const combinedData = {
                webData: webData.results.results.organic || [],
                imageData: imageDataParsed.results.results || [],
              };
            console.log(combinedData)
            setShowModal(false);
            
            carContext.setCarInfo(combinedData);

            if (webData.results.results.organic && webData.results.results.inline_images) {
                const organics = webData.results.results.organic;
                const vinValid = organics.some(organic => {
                  return organic.title.includes(paraVin);
                });
                if (vinValid) {
                  navigate('/detail', { replace: true });
                } else {
                  alert("Your VIN is invalid.");
                }
              } else {
                alert("Your VIN is invalid.");
              }
          })
          .catch((err) => {
            setShowModal(false);
            console.log(err.message);
          });
        }
      

    return (
        <div id="home">
            <Navbar/>
            <SolutionDelCar onclick={onclick} setVin={setVin}/>
            <DeleteVin/>
            <Summary/>
            <SayAboutUs />
            <ContactUs/>
            <LiveChat />
            {showModal ? <Modal vin={vin} />: null}

        </div>
    )
};

export default Home;
