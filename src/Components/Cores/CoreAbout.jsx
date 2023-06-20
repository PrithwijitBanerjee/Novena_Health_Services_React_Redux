import React from 'react'
import SignPng from '../../images/about/sign.png';
import About1 from '../../images/about/about-1.jpg';
import About2 from '../../images/about/about-2.jpg';
import About3 from '../../images/about/about-3.jpg';
import About4 from '../../images/about/about-4.jpg';
import Png3 from '../../images/about/3.png';
import Png4 from '../../images/about/4.png';
import Png1 from '../../images/about/1.png';
import Png2 from '../../images/about/2.png';
import Png5 from '../../images/about/5.png';
import Png6 from '../../images/about/6.png';
import jpg1 from '../../images/team/1.jpg';
import jpg2 from '../../images/team/2.jpg';
import jpg3 from '../../images/team/3.jpg';
import jpg4 from '../../images/team/4.jpg';
import { Link } from 'react-router-dom';
const CoreAbout = () => {
    return (
        <>
            <section className="page-title bg-1">
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">About Us</span>
                                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className="title-color">Personal care for your healthy living</h2>
                        </div>
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                                quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere
                                at, consequatur incidunt, quae esse, quis ut reprehenderit
                                dignissimos, libero delectus.
                            </p>
                            <img src={SignPng} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="fetaure-page ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img
                                    src={About1}
                                    alt=""
                                    className="img-fluid w-100"
                                />
                                <h4 className="mt-3">Healthcare for Kids</h4>
                                <p>
                                    Voluptate aperiam esse possimus maxime repellendus, nihil quod
                                    accusantium .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img
                                    src={About2}
                                    alt=""
                                    className="img-fluid w-100"
                                />
                                <h4 className="mt-3">Medical Counseling</h4>
                                <p>
                                    Voluptate aperiam esse possimus maxime repellendus, nihil quod
                                    accusantium .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img
                                    src={About3}
                                    alt=""
                                    className="img-fluid w-100"
                                />
                                <h4 className="mt-3">Modern Equipments</h4>
                                <p>
                                    Voluptate aperiam esse possimus maxime repellendus, nihil quod
                                    accusantium .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item">
                                <img
                                    src={About4}
                                    alt=""
                                    className="img-fluid w-100"
                                />
                                <h4 className="mt-3">Qualified Doctors</h4>
                                <p>
                                    Voluptate aperiam esse possimus maxime repellendus, nihil quod
                                    accusantium .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section awards">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2 className="title-color">Our Doctors achievements </h2>
                            <div className="divider mt-4 mb-5 mb-lg-0" />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={Png3} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={Png4} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={Png1} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={Png2} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={Png5} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src={Png6} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="mb-4">Meet Our Specialist</h2>
                                <div className="divider mx-auto my-4" />
                                <p>
                                    Today’s users expect effortless experiences. Don’t let essential
                                    people and processes stay stuck in the past. Speed it up, skip the
                                    hassles
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <img src={jpg1} alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-0">
                                        <Link to="/doctor-single">John Marshal</Link>
                                    </h4>
                                    <p>Internist, Emergency Physician</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <img src={jpg2} alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-0">
                                        <Link to="/doctor-single">Marshal Root</Link>
                                    </h4>
                                    <p>Surgeon, Сardiologist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <img src={jpg3} alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-0">
                                        <Link to="/doctor-single">Siamon john</Link>
                                    </h4>
                                    <p>Internist, General Practitioner</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <img src={jpg4} alt="" className="img-fluid w-100" />
                                <div className="content">
                                    <h4 className="mt-4 mb-0">
                                        <Link to="/doctor-single">Rishat Ahmed</Link>
                                    </h4>
                                    <p>Orthopedic Surgeon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="section-title">
                                <h2 className="mb-4">What they say about us</h2>
                                <div className="divider  my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 testimonial-wrap offset-lg-6">
                            <div className="testimonial-block">
                                <div className="client-info ">
                                    <h4>Amazing service!</h4>
                                    <span>John Partho</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit.
                                    Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                    adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
                                    nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Expert doctors!</h4>
                                    <span>Mullar Sarth</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit.
                                    Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                    adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
                                    nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Good Support!</h4>
                                    <span>Kolis Mullar</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit.
                                    Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                    adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
                                    nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Nice Environment!</h4>
                                    <span>Partho Sarothi</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit.
                                    Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                    adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
                                    nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Modern Service!</h4>
                                    <span>Kolis Mullar</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit.
                                    Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                    adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
                                    nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default CoreAbout