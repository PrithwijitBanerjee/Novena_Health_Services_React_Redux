import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Img1 from '../../images/about/img-1.jpg';
import Img2 from '../../images/about/img-2.jpg';
import Img3 from '../../images/about/img-3.jpg';
import TestThumb1 from '../../images/team/test-thumb1.jpg';
import TestThumb2 from '../../images/team/test-thumb2.jpg';
import TestThumb3 from '../../images/team/test-thumb3.jpg';
import TestThumb4 from '../../images/team/test-thumb4.jpg';
import Png1 from '../../images/about/1.png';
import Png2 from '../../images/about/2.png';
import Png3 from '../../images/about/3.png';
import Png4 from '../../images/about/4.png';
import Png5 from '../../images/about/5.png';
import Png6 from '../../images/about/6.png';
import {fetchDepartmentData,fetchDoctors } from '../../Services/Api';
import { toast } from 'react-toastify'
import { useDispatch,useSelector } from 'react-redux';
const CoreIndex = () => {
    const dispatch=useDispatch();
    const {departmentsData,doctorsData}=useSelector(state=>state?.hospital);
    // const [departments, setDepartments] = React.useState([]);
    // const [doctors, setDoctors] = React.useState([]);
    const navigate = useNavigate();
    const [formData, serFormData] = React.useState({
        fullName: '',
        message: '',
        Department: '',
        Doctors: '',
        date: 'dd/mm/yy',
        time: '',
        phone: ''
    });
    const [error, setError] = React.useState({});
    const onChangeHandler = (event) => {
        serFormData(prevFormData => {
            return { ...prevFormData, [event.target.name]: event.target.value };
        })
        if (event.target.name === 'fullName') {
            if (!event.target.value) {
                setError(prevErr => {
                    return { ...prevErr, fullNameErr: '@Name is Required' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setError(prevErr => {
                    return { ...prevErr, fullNameErr: '' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

        if (event.target.name === 'message') {
            if (event.target.value === '') {
                setError(prevErr => {
                    return { ...prevErr, messageErr: '@Message is Required' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setError(prevErr => {
                    return { ...prevErr, messageErr: '' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

        if (event.target.name === 'Department') {
            serFormData(prevFormData => {
                return { ...prevFormData, [event.target.name]: event.target.value };
            })
        }

        if (event.target.name === 'Doctors') {
            serFormData(prevFormData => {
                return { ...prevFormData, [event.target.name]: event.target.value };
            })
        }

        if (event.target.name === 'date') {
            if (!event.target.value) {
                setError(prevErr => {
                    return { ...prevErr, dateErr: '@Date is Required' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setError(prevErr => {
                    return { ...prevErr, dateErr: '' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

        if (event.target.name === 'time') {
            if (event.target.value === '') {
                setError(prevErr => {
                    return { ...prevErr, timeErr: '@Time is Required' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setError(prevErr => {
                    return { ...prevErr, timeErr: '' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }
        if (event.target.name === 'phone') {
            if (event.target.value.length > 10 || !event.target.value) {
                setError(prevErr => {
                    return { ...prevErr, phoneErr: '@Phone Number is Required' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setError(prevErr => {
                    return { ...prevErr, phoneErr: '' }
                })
                serFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

    }

    const validate = () => {
        const err = {};
        if (formData.fullName === '') {
            err.fullNameErr = 'Name is Required';
        }

        if (formData.Department === 'Choose Department') {
            err.departmentErr = 'Department Selection is Required';
        }

        if (formData.Doctors === 'Select Doctors') {
            err.doctorsErr = 'Doctors Selection is Required';
        }

        if (formData.date === '00-00-0000') {
            err.dateErr = 'Date is required';
        }

        if (formData.phone.length === 0) {
            err.phoneErr = 'Phone Number is Required';
        }

        if (formData.time.length === 0) {
            err.timeErr = 'Time is Required';
        }

        if (formData.message.length === 0) {
            err.messageErr = 'Description is Required';
        }

        setError(err);
        return Object.keys(err).length < 1;
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token !== null && token !== '' && token !== undefined) {
            if (validate()) {
                const res = window.confirm('Congratulation You are Successfully fill the form !!!! Are You want to redirect to the confirm page?');
                if (res === true) {
                    navigate('/appoinment');
                }
            }
            else {
                //window.alert('Invalid Appointment!!!! Plz fill all the fields properly');
                toast.error('Invalid Appointment!!!! Plz fill all the fields properly', { theme: "colored" });
            }
        }else
        {
            toast.error('Plz  SignIn before performing make appointment!!!',{
                theme:'colored'
            });
            navigate('/signUp');
        }

    }

    React.useEffect(() => {
        // const getDepartmentInfo = async () => {
        //     const res = await getDepartmentsData();
        //     setDepartments(res.data);
        // }
        // const getDoctorInfo = async () => {
        //     const res = await getDoctors();
        //     setDoctors(res.data);
        // }
        // getDepartmentInfo();
        // getDoctorInfo();
        //Async Operation...
        dispatch(fetchDepartmentData());
        dispatch(fetchDoctors());
    }, []);

    return (
        <>
            {/* Slider Start */}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3" />
                                <span className="text-uppercase text-sm letter-spacing ">
                                    Total Health care solution
                                </span>
                                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                                <p className="mb-4 pr-5">
                                    A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
                                    quisquam aperiam maiores sunt fugit, deserunt rem suscipit
                                    placeat.
                                </p>
                                <div className="btn-container ">
                                    <Link
                                        to="/appoinment"
                                        className="btn btn-main-2 btn-icon btn-round-full">
                                        Make appoinment <i className="icofont-simple-right ml-2  " />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-block d-lg-flex">
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-surgeon-alt" />
                                    </div>
                                    <span>24 Hours Service</span>
                                    <h4 className="mb-3">Online Appoinment</h4>
                                    <p className="mb-4">
                                        Get ALl time support for emergency.We have introduced the
                                        principle of family medicine.
                                    </p>
                                    <Link to="/appoinment" className="btn btn-main btn-round-full">
                                        Make a appoinment
                                    </Link>
                                </div>
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-ui-clock" />
                                    </div>
                                    <span>Timing schedule</span>
                                    <h4 className="mb-3">Working Hours</h4>
                                    <ul className="w-hours list-unstyled">
                                        <li className="d-flex justify-content-between">
                                            Sun - Wed : <span>8:00 - 17:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            Thu - Fri : <span>9:00 - 17:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            Sat - sun : <span>10:00 - 17:00</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-support" />
                                    </div>
                                    <span>Emegency Cases</span>
                                    <h4 className="mb-3">1-800-700-6200</h4>
                                    <p>
                                        Get ALl time support for emergency.We have introduced the
                                        principle of family medicine.Get Conneted with us for any
                                        urgency .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img src={Img1} alt="" className="img-fluid" />
                                <img
                                    src={Img2}
                                    alt=""
                                    className="img-fluid mt-4" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src={Img3} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-content pl-4 mt-4 mt-lg-0">
                                <h2 className="title-color">
                                    Personal care <br />
                                    &amp; healthy living
                                </h2>
                                <p className="mt-4 mb-5">
                                    We provide best leading medicle service Nulla perferendis veniam
                                    deleniti ipsum officia dolores repellat laudantium obcaecati
                                    neque.
                                </p>
                                <Link
                                    to="/service"
                                    className="btn btn-main-2 btn-round-full btn-icon">
                                    Services
                                    <i className="icofont-simple-right ml-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-section ">
                <div className="container">
                    <div className="cta position-relative">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-doctor" />
                                    <span className="h3 counter" data-count={58}>
                                        0
                                    </span>
                                    k<p>Happy People</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-flag" />
                                    <span className="h3 counter" data-count={700}>
                                        0
                                    </span>
                                    +<p>Surgery Comepleted</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-badge" />
                                    <span className="h3 counter" data-count={40}>
                                        0
                                    </span>
                                    +<p>Expert Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-globe" />
                                    <span className="h3 counter" data-count={20}>
                                        0
                                    </span>
                                    <p>Worldwide Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section service gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Award winning patient care</h2>
                                <div className="divider mx-auto my-4" />
                                <p>
                                    Lets know moreel necessitatibus dolor asperiores illum possimus
                                    sint voluptates incidunt molestias nostrum laudantium. Maiores
                                    porro cumque quaerat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-laboratory text-lg" />
                                    <h4 className="mt-3 mb-3">Laboratory services</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-heart-beat-alt text-lg" />
                                    <h4 className="mt-3 mb-3">Heart Disease</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-tooth text-lg" />
                                    <h4 className="mt-3 mb-3">Dental Care</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-crutch text-lg" />
                                    <h4 className="mt-3 mb-3">Body Surgery</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-brain-alt text-lg" />
                                    <h4 className="mt-3 mb-3">Neurology Sargery</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-dna-alt-1 text-lg" />
                                    <h4 className="mt-3 mb-3">Gynecology</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section appoinment">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ">
                            <div className="appoinment-content">
                                <img src={Img3} alt="" className="img-fluid" />
                                <div className="emergency">
                                    <h2 className="text-lg">
                                        <i className="icofont-phone-circle text-lg" />
                                        +23 345 67980
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 ">
                            <div className="appoinment-wrap mt-5 mt-lg-0">
                                <h2 className="mb-2 title-color">Book appoinment</h2>
                                <p className="mb-4">
                                    Mollitia dicta commodi est recusandae iste, natus eum asperiores
                                    corrupti qui velit . Iste dolorum atque similique praesentium
                                    soluta.
                                </p>
                                <form className="appoinment-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    id="exampleFormControlSelect1"
                                                    name='Department' onChange={onChangeHandler}>
                                                    <option value='Choose Department'>Choose Department</option>
                                                    {
                                                        departmentsData.map((department, index) => {
                                                            return (
                                                                <>
                                                                    <option key={index.toString()} value={department.dName}>{department.dName}</option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select><br /><span className='text-danger'>{error.departmentErr}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    id="exampleFormControlSelect2"
                                                    name='Doctors' onChange={onChangeHandler}>
                                                    <option value='Select Doctors'>Select Doctors</option>
                                                    {
                                                        doctorsData.map((doctor, index) => {
                                                            return (
                                                                <>
                                                                    <option key={index.toString()} value={doctor.name}>{doctor.name}</option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select><br /><span className='text-danger'>{error.doctorsErr}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    name="date"
                                                    id="date"
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="dd/mm/yyyy" onChange={onChangeHandler} value={formData.date} /><br />
                                                <span className='text-danger'>{error.dateErr}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    name="time"
                                                    id="time"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Time" onChange={onChangeHandler} value={formData.time} /><br />
                                                <span className='text-danger'>{error.timeErr}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    name="fullName"
                                                    id="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name" onChange={onChangeHandler} value={formData.fullName} /><br />
                                                <span className='text-danger'>{error.fullNameErr}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    name="phone"
                                                    id="phone"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Phone Number" onChange={onChangeHandler} value={formData.phone} /><br />
                                                <span className='text-danger'>{error.phoneErr}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            rows={6}
                                            placeholder="Your Message"
                                            defaultValue={""}
                                            onChange={onChangeHandler} value={formData.message} />
                                        <br /><span className='text-danger'>{error.messageErr}</span>
                                    </div>
                                    <button className="btn btn-main btn-round-full" onClick={onSubmitHandler}>
                                        Make Appoinment  <i className="icofont-simple-right ml-2  " />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section testimonial-2 gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>We served over 5000+ Patients</h2>
                                <div className="divider mx-auto my-4" />
                                <p>
                                    Lets know moreel necessitatibus dolor asperiores illum possimus
                                    sint voluptates incidunt molestias nostrum laudantium. Maiores
                                    porro cumque quaerat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 testimonial-wrap-2">
                            <div className="testimonial-block style-2  gray-bg">
                                <i className="icofont-quote-right" />
                                <div className="testimonial-thumb">
                                    <img
                                        src={TestThumb1}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="client-info ">
                                    <h4>Amazing service!</h4>
                                    <span>John Partho</span>
                                    <p>
                                        They provide great service facilty consectetur adipisicing elit.
                                        Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                        adipisci suscipit fugit placeat.
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial-block style-2  gray-bg">
                                <div className="testimonial-thumb">
                                    <img
                                        src={TestThumb2}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="client-info">
                                    <h4>Expert doctors!</h4>
                                    <span>Mullar Sarth</span>
                                    <p>
                                        They provide great service facilty consectetur adipisicing elit.
                                        Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                        adipisci suscipit fugit placeat.
                                    </p>
                                </div>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block style-2  gray-bg">
                                <div className="testimonial-thumb">
                                    <img
                                        src={TestThumb3}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="client-info">
                                    <h4>Good Support!</h4>
                                    <span>Kolis Mullar</span>
                                    <p>
                                        They provide great service facilty consectetur adipisicing elit.
                                        Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                        adipisci suscipit fugit placeat.
                                    </p>
                                </div>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block style-2  gray-bg">
                                <div className="testimonial-thumb">
                                    <img
                                        src={TestThumb4}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="client-info">
                                    <h4>Nice Environment!</h4>
                                    <span>Partho Sarothi</span>
                                    <p className="mt-4">
                                        They provide great service facilty consectetur adipisicing elit.
                                        Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                        adipisci suscipit fugit placeat.
                                    </p>
                                </div>
                                <i className="icofont-quote-right" />
                            </div>
                            <div className="testimonial-block style-2  gray-bg">
                                <div className="testimonial-thumb">
                                    <img
                                        src={TestThumb1}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="client-info">
                                    <h4>Modern Service!</h4>
                                    <span>Kolis Mullar</span>
                                    <p>
                                        They provide great service facilty consectetur adipisicing elit.
                                        Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
                                        adipisci suscipit fugit placeat.
                                    </p>
                                </div>
                                <i className="icofont-quote-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section clients">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>Partners who support us</h2>
                                <div className="divider mx-auto my-4" />
                                <p>
                                    Lets know moreel necessitatibus dolor asperiores illum possimus
                                    sint voluptates incidunt molestias nostrum laudantium. Maiores
                                    porro cumque quaerat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row clients-logo">
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png1} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png2} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png3} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png4} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png5} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png5} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png3} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png4} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png5} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src={Png6} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoreIndex