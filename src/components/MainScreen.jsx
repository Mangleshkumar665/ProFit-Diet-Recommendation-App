import React from 'react'

import img4 from '../images/frontpage/4.jpg'
import img5 from '../images/frontpage/5.jpg'


const MainScreen = () => {
    return (
        <div>
            <div className='' style={{ height: "90vh", width: "100vw" }}>
                <div className="frontpage-wrapper">

                    <div className='fp-bg-image-wrapper'>

                        <div id="carouselExampleAutoplaying" className="carousel slide fp-bg-image-wrapper" data-bs-ride="carousel">
                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <img src={img4} className="d-block w-100 carousel-img " alt="/" />
                                </div>
                                
                                <div className="carousel-item active">
                                    <img src={img4} className="d-block w-100 carousel-img " alt="/" />
                                </div>
                                
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>









                    </div>




                    <div className='brand-text display-1 '>
                        <div className='d-flex'>
                            Pro-Fi <div className='brand-text-mod'>t</div>  </div>



                        <div className='brand-text-caption my-2'>
                            <div className='d-flex  '>
                                <div className='brand-text-mod'> Health</div>
                                &nbsp;is what we care for   <br />

                            </div>
                            

                        </div>

                        <div className='d-flex justify-content-start align-item-center my-4  mx-4'>
                            <a href="/plan" className='brochure-btn  '>
                                Plan a Diet
                            </a>
                        </div>

                    </div>

                </div>

                <div className='frontpage2-wrapper'></div>


            </div>
        </div>
    )
}

export default MainScreen
