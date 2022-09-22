import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../HomeBanner/HomeBanner.css'
import imgCard1 from '../../img/card-img1.svg'
function HomeBanner() {
    return (
        <>
            <section id='hero_banner'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span className='banner_subhead'>Infrastructure Factory</span>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-btn">
                                    New
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/author">Pipeline</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3 mt-5">
                            <div className="card-box shadow rounded py-2 px-3 d-flex bg-white">
                                <img src={imgCard1} alt=" card-img" />
                                <div className="card-content">
                                    <h6 className='fw-bold mb-1'>Build</h6>
                                    <p>Build Infrastructure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5">
                            <div className="card-box shadow rounded py-2 px-3 d-flex bg-white">
                                <img src={imgCard1} alt=" card-img" />
                                <div className="card-content">
                                    <h6 className='fw-bold mb-1'>Build</h6>
                                    <p>Build Infrastructure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5">
                            <div className="card-box shadow rounded py-2 px-3 d-flex bg-white">
                                <img src={imgCard1} alt=" card-img" />
                                <div className="card-content">
                                    <h6 className='fw-bold mb-1'>Build</h6>
                                    <p>Build Infrastructure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5">
                            <div className="card-box shadow rounded py-2 px-3 d-flex bg-white">
                                <img src={imgCard1} alt=" card-img" />
                                <div className="card-content">
                                    <h6 className='fw-bold mb-1'>Build</h6>
                                    <p>Build Infrastructure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBanner;