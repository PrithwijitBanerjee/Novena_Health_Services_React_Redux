import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchDepartmentData,fetchDoctors, postPatientsData } from '../Services/Api';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'
import { useDispatch,useSelector } from 'react-redux';
const Appointment = () => {
  const dispatch=useDispatch();
  const {departmentsData,doctorsData}=useSelector(state=>state?.hospital);
  const form=useRef();
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
    phone: '',
    emailId: ''
  });
  const [error, setError] = React.useState({});
  const onChangeHandler = (event) => {
    serFormData(prevFormData => {
      return { ...prevFormData, [event.target.name]: event.target.value }
    })
    if (event.target.name === 'fullName') {
      if (event.target.value.length > 30 || !event.target.value) {
        setError(prevErr => {
          return { ...prevErr, fullNameErr: "Plz give Proper Name" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: '' }
        })
      }
      else {
        setError(prevErr => {
          return { ...prevErr, fullNameErr: '' };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: event.target.value };
        })
      }
    }

    if (event.target.name === 'message') {
      if (!event.target.value) {
        setError(prevErr => {
          return { ...prevErr, messageErr: "@message is required" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: '' }
        })
      }
      else {
        setError(prevErr => {
          return { ...prevErr, fullNameErr: '' };
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
      if (event.target.value.length === 0) {
        setError(prevErr => {
          return { ...prevErr, dateErr: "@Date is required" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: '' };
        })
      }
      else {
        setError(prevErr => {
          return { ...prevErr, dateErr: "" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: event.target.value };
        })
      }
    }

    if (event.target.name === 'time') {
      if (!event.target.value) {
        setError(prevErr => {
          return { ...prevErr, timeErr: "@Time is required" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: '' };
        })
      }
      else {
        setError(prevErr => {
          return { ...prevErr, timeErr: "" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: event.target.value };
        })
      }
    }
    if (event.target.name === 'phone') {
      if (event.target.value.length > 10) {
        setError(prevErr => {
          return { ...prevErr, phoneErr: "Phone Number is Invalid" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: '' };
        })
      }
      else {
        setError(prevErr => {
          return { ...prevErr, phoneErr: "" };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, [event.target.name]: event.target.value };
        })
      }
    }
    if (event.target.name === 'emailId') {
      if (!event.target.value) {
        setError(prevErr => {
          return { ...prevErr, emailErr: '@Email Id is Required' };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, emailId: '' };
        })
      }
      else {
        setError(prevErr => {
          return { ...prevErr, emailErr: '' };
        })
        serFormData(prevFormData => {
          return { ...prevFormData, emailId: event.target.value };
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

    if (formData.date === 'dd/mm/yy') {
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
    if (formData.emailId === '') {
      err.emailErr = 'Plz Enter Your Email Id';
    }
    setError(err);
    return Object.keys(err).length < 1;
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (validate()) {
      //window.alert('Congratulation!!!! Your Booking for an Appointment is Successfull');
      toast.success('Congratulation!!!! Your Booking for an Appointment is Successfull', { theme: 'colored' });
      navigate('/confirmation');
      //Api call ......................................
      await postPatientsData(formData);

      //End of Api call................................

      //Email send to Audience Code.......................
      emailjs.sendForm('service_jee5ndc', 'template_966jdcn', form.current, 'AJC-FVqGXrXVBk5X0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    else {
      //window.alert('Invalid Appointment!!!! Plz fill all the fields properly');
      toast.error('Invalid Appointment!!!! Plz fill all the fields properly', { theme: 'colored' });
    }
  }

  React.useEffect(() => {
    // const getDepartmentInfo = async () => {
    //   const res = await getDepartmentsData();
    //   setDepartments(res.data);
    // }
    // const getDoctorInfo = async () => {
    //   const res = await getDoctors();
    //   setDoctors(res.data);
    // }
    // getDepartmentInfo();
    // getDoctorInfo();

    //Async Operation...
    dispatch(fetchDepartmentData());
    dispatch(fetchDoctors());
  }, []);

  return (
    <>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Book your Seat</span>
                <h1 className="text-capitalize mb-5 text-lg">Appoinment</h1>
                {/* <ul class="list-inline breadcumb-nav">
      <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
      <li class="list-inline-item"><span class="text-white">/</span></li>
      <li class="list-inline-item"><a href="#" class="text-white-50">Book your Seat</a></li>
    </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="appoinment section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg" />
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">+84 789 1256 </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color"> Confirm Your Appoinment Form</h2>
                <p className="mb-4">
                  Mollitia dicta commodi est recusandae iste, natus eum asperiores
                  corrupti qui velit . Iste dolorum atque similique praesentium
                  soluta.
                </p>
                <form ref={form} className="appoinment-form">
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
                          name="emailId"
                          id="name"
                          type="email"
                          className="form-control"
                          placeholder="Email Id" onChange={onChangeHandler} value={formData.emailId} /><br />
                        <span className='text-danger'>{error.emailErr}</span>
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
                  <button
                    className="btn btn-main btn-round-full"
                    onClick={onSubmitHandler}>
                    Make Appoinment
                    <i className="icofont-simple-right ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Appointment