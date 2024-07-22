import React from 'react'
import Info from './Info'
import Contact from './Contact'
import Header from './Header'

const Main = () => {
    return (
        <div className='container-fluid main-image min-vh-100'>
            <Header />
            <div className='container'>
                <div className='row justify-content-between py-3'>
                    <div  className="col-6 p-0">
                        <Info/>
                    </div>
                    <div className="col-4">
                        <Contact />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main