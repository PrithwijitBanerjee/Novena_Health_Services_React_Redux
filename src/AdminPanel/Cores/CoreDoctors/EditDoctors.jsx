import React, { useEffect, useState } from 'react'
import { getSingleDoctorData,editDoctor } from '../../../Services/Api';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-toastify'
const EditDoctors = () => {
  const [doctor, setDoctor] = useState({});
  const [formError, setFormError] = useState({});
  const navigate=useNavigate();
  const { id } = useParams();
  const getSingleDoctorInfo = async () => {
    const res = await getSingleDoctorData(id);
    setDoctor(res.data);
  }
  useEffect(() => {
    getSingleDoctorInfo();
  }, []);

  const handleOnchange = (event) => {
    const err = {};
    if (event.target.name === 'id') {
      if (!event.target.value) {
        err.idErr = 'Id Can not be empty';
      }
      else {
        err.idErr = '';
        setDoctor(prevDoctor => {
          return { ...prevDoctor, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'name') {
      if (event.target.value.length > 30) {
        err.nameErr = 'Plz Enter Department Name Properly';
      }
      else {
        err.nameErr = '';
        setDoctor(prevDoctor => {
          return { ...prevDoctor, [event.target.name]: event.target.value }
        });
      }
    }

    if (event.target.name === 'department') {
      if (event.target.value.length > 70) {
        err.departmentErr = 'Department Description exceeds seventy characters';
      }
      else {
        err.departmentErr= '';
        setDoctor(prevDoctor => {
          return { ...prevDoctor, [event.target.name]: event.target.value }
        });
      }
    }

    setFormError(err);
  }
const validation=()=>
{
  const err={};
  if(doctor.id==='')
  {
    err.idErr='Department Id can not be Empty';
  }
  if(doctor.name==='')
  {
    err.nameErr='Department Name can not be Empty';
  }
  if(doctor.department==='')
  {
    err.departmentErr='Department Description can not be Empty';
  }

  setFormError(err);
  return Object.keys(err).length<1;
}

  const onSubmitHandler=async(event)=>
  {
    event.preventDefault();
    if(validation())
    {
      toast.success('Thank You!!!! for successfully editing your data',{theme: "colored"});
      //API Call Starts................................................................
      
      await editDoctor(doctor,id);

      //API Call Ends..................................................................
      navigate('/doctors');

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
                <span className="text-white">Edit Doctor</span>
                <h1 className="text-capitalize mb-5 text-lg">Edit Doctor</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{ width: '70%', margin: '30px auto 30px auto', boxShadow: '30px 30px 50px', padding: '30px', borderRadius: '30px' }}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Id</h6></label>
          <input type="text" className="form-control" id="exampleId" name='id' value={doctor.id} onChange={handleOnchange} />
          <span className='text-danger'>{formError?.idErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Name</h6></label>
          <input type="text" className="form-control" id="exampleName" name='name' value={doctor.name} onChange={handleOnchange} />
          <span className='text-danger'>{formError?.nameErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDepartment"><h6 className='text-danger'>Department</h6></label>
          <input type="text" className="form-control" id="exampleDepartment" name='department' value={doctor.department} onChange={handleOnchange} />
          <span className='text-danger'>{formError?.departmentErr}</span>
        </div>
        <div className='text-center form-group'>
          <button type="submit" className="btn btn-outline-danger text-center" onClick={onSubmitHandler}>Edit Department</button>
        </div>
      </form>
    </>
  )
}

export default EditDoctors