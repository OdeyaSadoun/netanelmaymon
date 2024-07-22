import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='header p-3 bg-success d-flex justify-content-between align-items-center'>
                <div>
                    בס"ד בוקר טוב!
                </div>
            </div>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='container text-center p-2 m-3 border'>
                    <h1 className='p-3'>
                        בניה | חשמל | מיזוג
                    </h1>
                    <h2>
                        נתנאל מימון
                    </h2>
                </div>
            </div>

        </header>
    );
};

export default Header;
