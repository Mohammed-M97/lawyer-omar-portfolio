import React from 'react';
import omar from '../assets/images/omar4.jpg'

const Header = () => {
  return (
        <header className='pt-5' id='header'>
            <div className='container py-md-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0'>
                        <h3 className='text-secondary fw-bold lh-1'>Lawyer Omar Ali John</h3>
                        <h1 className='text-capitalize text-start text-primary lh-1 mb-5'>For Law<br />and Legal Consultations</h1>
                        {/* <ViewMyWorkBtn /> */}
                    </div>
                    <div className='col-md-6 d-flex justify-contect-center justify-content-md-start'>
                        <img className='img-fluid img-size w-75 rounded-circle shadow my-5' src={omar} alt="header img" />
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header;
