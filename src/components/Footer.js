import React from 'react'

const Footer = () => {
    return (
        <footer className='container-fluid d-flex justify-content-center'>
            <div className='mail'>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div className='phone'>
                <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className='whatsapp'>
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </div>
            <div className='instegram'>
                <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className='facebook'>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </div>
        </footer>
    )
}

export default Footer