import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSinglePatientData, editPatientsData } from '../../../Services/Api';
import {toast} from 'react-toastify';
const EditPatients = () => {
  const [patient, setPatient] = useState({});
  const navigate=useNavigate();
  const { id } = useParams();
  const [formError, setFormError] = useState({});
  const getSinglePatientInfo = async () => {
    const res = await getSinglePatientData(id);
    setPatient(res.data);
  }
  useEffect(() => {
    getSinglePatientInfo();
  },[]);

  const handleOnchange = (event) => {
    const err = {};
    if (event.target.name === 'id') {
      if (!event.target.value) {
        err.idErr = 'Id Can not be empty';
      }
      else {
        err.idErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'fullName') {
      if (event.target.value.length > 30) {
        err.fullNameErr = 'Plz Enter Your  Name Properly';
      }
      else {
        err.fullNameErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'message') {
      if (event.target.value.length > 70) {
        err.messageErr = 'Message exceeds seventy characters';
      }
      else {
        err.messageErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'Department') {
      if (event.target.value.length > 30) {
        err.departmentErr = 'Plz Enter Department  Name Properly';
      }
      else {
        err.departmentErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'Doctors') {
      if (event.target.value.length > 30) {
        err.doctorsErr = 'Plz Enter Doctor  Name Properly';
      }
      else {
        err.doctorsErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'date') {
      if (event.target.value.length === 0) {
        err.dateErr = 'Plz Enter Proper date';
      }
      else {
        err.dateErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }
    
    if (event.target.name === 'phone') {
      if (event.target.value.length >10) {
        err.phoneErr = 'Plz Enter Proper Contact Number';
      }
      else {
        err.phoneErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'time') {
      if (event.target.value.length === 0) {
        err.timeErr = 'Plz Enter Proper time';
      }
      else {
        err.timeErr = '';
        setPatient(prevPatient => {
          return { ...prevPatient, [event.target.name]: event.target.value }
        });
      }
    }
    if(event.target.name==='emailId')
    {
        if(!event.target.value)
        {
          err.emailIdErr='@Email Id is Required';
        }
        else{
          err.emailIdErr='';
          setPatient(prevPatient=>{
              return {...prevPatient,[event.target.name]:event.target.value};
          })
        }
    }

    setFormError(err);
}


const validation=()=>
{
    const err={};
    if(patient.id==='')
    {
      err.idErr='Id is required';
    }
    if(patient.fullName==='')
    {
      err.fullNameErr='fullName is required';
    }
    if(patient.message==='')
    {
      err.messageErr='message is required';
    }
    if(patient.Department==='')
    {
      err.DepartmentErr='Department is required';
    }
    if(patient.Doctors==='')
    {
      err.DoctorsErr='Doctors is required';
    }
    if(patient.date==='')
    {
      err.dateErr='date is required';
    }
    if(patient.time==='')
    {
      err.timeErr='time is required';
    }
    if(patient.phone==='')
    {
      err.phoneErr='phone is required';
    }
    if(patient.emailId==='')
    {
        err.emailIdErr='email Id is required';
    }
    setFormError(err);
    return Object.keys(err).length<1;
}  
const handleOnSubmit=async(event)=>
{
    event.preventDefault();
    if(validation())
    {

      toast.success('Thank You!!!! for successfully editing your data',{theme: "colored"});
      // API call starts......................................................................
        await editPatientsData(patient,id);

      //API call ends...............................................................................

      navigate('/patients');
    }

}
  return (
    <>

      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Edit Patient</span>
                <h1 className="text-capitalize mb-5 text-lg">Edit Patient</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{ width: '70%', margin: '30px auto 30px auto', boxShadow: '30px 30px 50px', padding: '30px', borderRadius: '30px' }}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Id</h6></label>
          <input type="text" className="form-control" id="exampleId" name='id' value={patient.id} onChange={handleOnchange} />
          <span className='text-danger'>{formError.idErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Full Name</h6></label>
          <input type="text" className="form-control" id="exampleName" value={patient.fullName} name='fullName' onChange={handleOnchange} />
          <span className='text-danger'>{formError.fullNameErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDepartment"><h6 className='text-danger'>Message</h6></label>
          <textarea className="form-control" id="exampleDepartment" name='message' value={patient.message} onChange={handleOnchange} />
          <span className='text-danger'>{formError.messageErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Department</h6></label>
          <input type="text" className="form-control" id="exampleName" name='Department' value={patient.Department} onChange={handleOnchange} />
          <span className='text-danger'>{formError.departmentErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Doctor</h6></label>
          <input type="text" className="form-control" id="exampleName" name='Doctors' value={patient.Doctors} onChange={handleOnchange} />
          <span className='text-danger'>{formError.doctorsErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Date</h6></label>
          <input type="date" className="form-control" id="exampleName" name='date' value={patient.date} onChange={handleOnchange} />
          <span className='text-danger'>{formError.dateErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Time</h6></label>
          <input type="text" className="form-control" id="exampleName" name='time' value={patient.time} onChange={handleOnchange} />
          <span className='text-danger'>{formError.timeErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Contact No</h6></label>
          <input type="tel" className="form-control" id="exampleName" name='phone' value={patient.phone} onChange={handleOnchange} />
          <span className='text-danger'>{formError.phoneErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Email Id</h6></label>
          <input type="tel" className="form-control" id="exampleName" name='emailId' value={patient.emailId} onChange={handleOnchange} />
          <span className='text-danger'>{formError.emailIdErr}</span>
        </div>
        <div className='text-center form-group'>
          <button type="submit" className="btn btn-outline-danger text-center" onClick={handleOnSubmit}>Edit Department</button>
        </div>
      </form>
    </>
  )
}

export default EditPatients