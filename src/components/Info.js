import React from 'react';

const Info = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='container d-flex align-items-center'>
                <div className='image-container'>
                    <img className='profile-img border' src="https://cdn.pixabay.com/photo/2016/11/18/12/05/white-male-1834103_960_720.jpg" alt="Profile" />
                </div>
                <div className='text-container'>
                    היי אני נתנאל, בן 23 ועוד כמה אינפורמציה שבא לך להכניס פה כדי שיותר יתחברו אליך ויבינו אל מי הם פונים
                </div>
            </div>

        </div>
    );
};

export default Info;
