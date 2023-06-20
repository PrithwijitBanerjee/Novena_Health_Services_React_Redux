import React from 'react'
import { Link } from 'react-router-dom';
import Jpg1 from '../../images/team/1.jpg';
import Jpg2 from '../../images/team/2.jpg';
import Jpg3 from '../../images/team/3.jpg';
import Jpg4 from '../../images/team/4.jpg';

const CoreDoctorPortfolio = () => {
    return (
        <>
            {/* portfolio */}
            <section className="section doctors">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Doctors</h2>
                                <div className="divider mx-auto my-4" />
                                <p>
                                    We provide a wide range of creative services adipisicing elit.
                                    Autem maxime rem modi eaque, voluptate. Beatae officiis neque{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center  mb-5">
                        <div className="btn-group btn-group-toggle " data-toggle="buttons">
                            <label className="btn active ">
                                <input
                                    type="radio"
                                    name="shuffle-filter"
                                    defaultValue="all"
                                    defaultChecked="checked"
                                />
                                All Department
                            </label>
                            <label className="btn ">
                                <input type="radio" name="shuffle-filter" defaultValue="cat1" />
                                Cardiology
                            </label>
                            <label className="btn">
                                <input type="radio" name="shuffle-filter" defaultValue="cat2" />
                                Dental
                            </label>
                            <label className="btn">
                                <input type="radio" name="shuffle-filter" defaultValue="cat3" />
                                Neurology
                            </label>
                            <label className="btn">
                                <input type="radio" name="shuffle-filter" defaultValue="cat4" />
                                Medicine
                            </label>
                            <label className="btn">
                                <input type="radio" name="shuffle-filter" defaultValue="cat5" />
                                Pediatric
                            </label>
                            <label className="btn">
                                <input type="radio" name="shuffle-filter" defaultValue="cat6" />
                                Traumatology
                            </label>
                        </div>
                    </div>
                    <div className="row shuffle-wrapper portfolio-gallery">
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat1","cat2"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg1}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Thomas Henry</Link>
                                    </h4>
                                    <p>Cardiology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat2"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg2}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Harrision Samuel</Link>
                                    </h4>
                                    <p>Radiology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat3"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg3}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Alexandar James</Link>
                                    </h4>
                                    <p>Dental</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat3","cat4"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg4}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Edward john</Link>
                                    </h4>
                                    <p>Pediatry</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat5"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg1}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Thomas Henry</Link>
                                    </h4>
                                    <p>Neurology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat6"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg3}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Henry samuel</Link>
                                    </h4>
                                    <p>Palmology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat4"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg1}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Thomas alexandar</Link>
                                    </h4>
                                    <p>Cardiology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat5","cat6","cat1"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg3}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">HarissonThomas </Link>
                                    </h4>
                                    <p>Traumatology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item illustration"
                            data-groups='["cat2"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg4}
                                            alt=''
                                            className="img-fluid w-100"/>
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Jonas Thomson</Link>
                                    </h4>
                                    <p>Cardiology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                            data-groups='["cat5","cat6","cat1"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg3}
                                            alt=''
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link to="/doctor-single">Henry Forth</Link>
                                    </h4>
                                    <p>hematology</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item illustration"
                            data-groups='["cat2"]'
                        >
                            <div className="position-relative doctor-inner-box">
                                <div className="doctor-profile">
                                    <div className="doctor-img">
                                        <img
                                            src={Jpg4}
                                            alt=' '
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <h4 className="mb-0">
                                        <Link href="/doctor-single">Thomas Henry</Link>
                                    </h4>
                                    <p>Dental</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /portfolio */}
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

export default CoreDoctorPortfolio