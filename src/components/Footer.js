import React from 'react';

const Footer = () => {
    return (
        <footer className='container-fluid d-flex justify-content-center'>
            <div className='mail'>
                <a href="mailto:natemimon12@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope-o color-icon" aria-hidden="true"></i>
                </a>
            </div>
            <div className='phone'>
                <a href="tel:+972505918875">
                    <i className="fa fa-phone color-icon" aria-hidden="true"></i>
                </a>
            </div>
            <div className='whatsapp'>
                <a href="https://wa.me/+972505918875" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-whatsapp color-icon" aria-hidden="true"></i>
                </a>
            </div>
            <div className='instagram'>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram color-icon" aria-hidden="true"></i>
                </a>
            </div>
            <div className='facebook'>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook-square color-icon" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
