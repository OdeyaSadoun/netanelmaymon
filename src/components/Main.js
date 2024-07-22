import React from 'react'
import Info from './Info'
import Contact from './Contact'

const Main = () => {
    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='container border d-flex justify-content-evenly'>
                <Info />
                <Contact />
            </div>
        </div>
    )
}

export default Main