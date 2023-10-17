import React from 'react';
import Navbar from "../components/Navbar";
import PrivacyHeader from "../components/PrivacyHeader";
import PrivacyContent from "../components/PrivacyContent";
import LiveChat from '../components/LiveChat';

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <PrivacyHeader />
            <PrivacyContent />
            <LiveChat />  
        </div>
    )
}

export default Privacy;