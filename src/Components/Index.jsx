import React from 'react'
import Nav from './Nav'

const Index = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://img.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/What-is-an-attendence-manangemnt-system.png" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://img.lovepik.com/free-png/20210919/lovepik-students-attending-classes-png-image_400511877_wh1200.png" class="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index