import React, { useRef } from 'react'
import { postUserData } from '../../Services/Api';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'
const FormContact = () => {
    const form =useRef();
    const [formData, setFormData] = React.useState({
        fullName: '',
        emailId: '',
        query: '',
        phone: '',
        message: ''
    });
    const [formError, setFormError] = React.useState({});
    const onChangeHandler = (event) => {

        setFormData(prevFormData => {
            return { ...prevFormData, [event.target.name]: event.target.value };
        })
        if (event.target.name === 'fullName') {
            if (!event.target.value) {
                setFormError(prevErr => {
                    return { ...prevErr, fullNameErr: '@Name is Required' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setFormError(prevErr => {
                    return { ...prevErr, fullNameErr: '' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

        if (event.target.name === 'emailId') {
            if (!event.target.value) {
                setFormError(prevErr => {
                    return { ...prevErr, emailErr: '@Email Id is Required' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setFormError(prevErr => {
                    return { ...prevErr, emailErr: '' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }

        }

        if (event.target.name === 'query') {
            if (event.target.value === '') {
                setFormError(prevErr => {
                    return { ...prevErr, queryErr: '@Query is Required' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setFormError(prevErr => {
                    return { ...prevErr, queryErr: '' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

        if (event.target.name === 'phone') {
            if (event.target.value.length > 10 || !event.target.value) {
                setFormError(prevErr => {
                    return { ...prevErr, phoneErr: 'Phone Number is Invalid' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setFormError(prevErr => {
                    return { ...prevErr, phoneErr: '' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }

        if (event.target.name === 'message') {
            if (event.target.value === '') {
                setFormError(prevErr => {
                    return { ...prevErr, messageErr: '@message is required' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: '' };
                })
            }
            else {
                setFormError(prevErr => {
                    return { ...prevErr, messageErr: '' };
                })
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value };
                })
            }
        }


    }

    const validate = () => {
        const err = {};
        if (formData.fullName === '') {
            err.fullNameErr = 'Plz Enter Your Full Name';
        }
        if (formData.emailId === '') {
            err.emailErr = 'Plz Enter Your Email Id';
        }
        if (formData.query === '') {
            err.queryErr = 'Plz Enter Some Query Here';
        }
        if (formData.message.length === 0) {
            err.messageErr = 'Plz Enter Some Message Here';
        }
        if (formData.phone.length === 0) {
            err.phoneErr = 'Plz Enter Your Valid Phone Number';
        }
        setFormError(err);

        return Object.keys(err).length < 1;
    }
    const postUserInfo = async () => {
        await postUserData(formData);
    }
    const submitFormData = (event) => {
        event.preventDefault();
        if (validate()) {
            //window.alert('Congratulations!!!!!! You have successfully submitted contact form');
            toast.success('Congratulations!!!!!! You have successfully submitted contact form successfully', { theme: "colored" });

            //API call Starts.........................................................
            postUserInfo();
            //API call Ends............................................................   

            // //Send Email to Audience Code...
            emailjs.sendForm('service_jee5ndc', 'template_m6rfkmn',form.current, 'AJC-FVqGXrXVBk5X0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
        else {
            // window.alert('Invalid Submission!!! Plz fill all the Fields properly');
            toast.error('Invalid Submission!!! Plz fill all the Fields properly', { theme: "colored" });
        }
    }
    return (
        <>
            {/* contact form start */}
            <section className="section contact-info pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-live-support" />
                                <h5>Call Us</h5>
                                +823-4565-13456
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-support-faq" />
                                <h5>Email Us</h5>
                                contact@mail.com
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-location-pin" />
                                <h5>Location</h5>
                                North Main Street,Brooklyn Australia
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form-wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="text-md mb-2">Contact us</h2>
                                <div className="divider mx-auto my-4" />
                                <p className="mb-5">
                                    Laboriosam exercitationem molestias beatae eos pariatur,
                                    similique, excepturi mollitia sit perferendis maiores ratione
                                    aliquam?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <form ref={form}
                                id="contact-form"
                                className="contact__form ">
                                {/* form message */}
                                <div className="row">
                                    <div className="col-12">
                                        <div
                                            className="alert alert-success contact__msg"
                                            style={{ display: "none" }}
                                            role="alert"
                                        >
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="fullName"
                                                id="fullName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Full Name"
                                                value={formData.fullName}
                                                onChange={onChangeHandler}
                                            /><span className='text-danger'>{formError?.fullNameErr}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="emailId"
                                                id="emailId"
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email Address"
                                                required=""
                                                value={formData.emailId}
                                                onChange={onChangeHandler}
                                            /><span className='text-danger'>{formError?.emailErr}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="query"
                                                id="query"
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Query Topic"
                                                required=""
                                                value={formData.query}
                                                onChange={onChangeHandler}
                                            /><span className='text-danger'>{formError?.queryErr}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="phone"
                                                id="phone"
                                                type="tel"
                                                className="form-control"
                                                placeholder="Your Phone Number"
                                                required=""
                                                value={formData.phone}
                                                onChange={onChangeHandler}
                                            /><span className='text-danger'>{formError?.phoneErr}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group-2 mb-4">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows={8}
                                        placeholder="Your Message"
                                        required=""
                                        value={formData.message}
                                        onChange={onChangeHandler}
                                    /><span className='text-danger'>{formError?.messageErr}</span>
                                </div>
                                <div>
                                    {/* <input
                                        className="btn btn-main btn-round-full"
                                        name="submit"
                                        type="submit"
                                        defaultValue="Send Messege"
                                    /> */}
                                    <button className="btn btn-main btn-round-full"
                                        name="submit"
                                        type="submit"
                                        onClick={submitFormData}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default FormContact;