import React from 'react';
import { FaWhatsapp, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="rights">
                <p>&copy; copyrights reserved by ECoRSC</p> &nbsp; &nbsp;
                <FaWhatsapp size={22} />
                <FaTwitter size={22} />
                <FaFacebook size={22} />
                <FaYoutube size={22} />
            </div>
        </footer>
    )
}

export default Footer