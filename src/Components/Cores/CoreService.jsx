import React from 'react'
import { Link } from 'react-router-dom';
import Service1 from '../../images/service/service-1.jpg';
import Service2 from '../../images/service/service-2.jpg';
import Service3 from '../../images/service/service-3.jpg';
import Service4 from '../../images/service/service-4.jpg';
import Service6 from '../../images/service/service-6.jpg';
import Service8 from '../../images/service/service-8.jpg';

const CoreService = () => {
    return (
        <>
            <section className="page-title bg-1">
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Our services</span>
                                <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
                                {/* <ul class="list-inline breadcumb-nav">
        <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
        <li class="list-inline-item"><span class="text-white">/</span></li>
        <li class="list-inline-item"><a href="#" class="text-white-50">Our services</a></li>
      </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section service-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img
                                    src={Service1}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Child care</h4>
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img
                                    src={Service2}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2  title-color">Personal Care</h4>
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img
                                    src={Service3}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">CT scan</h4>
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img
                                    src={Service4}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Joint replacement</h4>
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img
                                    src={Service6}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        Examination &amp; Diagnosis
                                    </h4>
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img
                                    src={Service8}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">Alzheimer's disease</h4>
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section cta-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cta-content">
                                <div className="divider mb-4" />
                                <h2 className="mb-5 text-lg">
                                    We are pleased to offer you the{" "}
                                    <span className="title-color">chance to have the healthy</span>
                                </h2>
                                <Link to="/appoinment" className="btn btn-main-2 btn-round-full">
                                    Get appoinment
                                    <i className="icofont-simple-right  ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default CoreService