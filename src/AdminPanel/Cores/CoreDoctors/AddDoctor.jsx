import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { addDoctor,addDepartment} from '../../../Services/Api';
const AddDoctor = () => {
    const [formData, setFormData] = useState({

        id: '',
        name: '',
        department: ''
    });
    const navigate=useNavigate();
    const [formError, setFormError] = useState({});

    const handleOnchange = (event) => {
        setFormData(prevFormData=>{
            return {...prevFormData,[event.target.name]:event.target.value};
        })
        if (event.target.name === 'id') {
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value }
                });
        }

        if (event.target.name === 'name') {
            if (event.target.value.length > 30 || !event.target.value) {
                    setFormError(prevFormErr=>{
                        return {...prevFormErr,nameErr:'Plz Enter Department Name Properly'}
                    });
                    setFormData(prevFormData => {
                        return { ...prevFormData, [event.target.name]:''}
                    });
            }
            else {
                setFormError(prevFormErr=>{
                    return {...prevFormErr,nameErr:''}
                });
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value }
                });
            }
        }

        if (event.target.name === 'department') {
            if (event.target.value.length > 70) {
                    setFormError(prevFormErr=>{
                        return {...prevFormErr,departmentErr:'Department Description exceeds seventy characters'}
                    });
                    setFormData(prevFormData => {
                        return { ...prevFormData, [event.target.name]:''}
                    });
            }
            else if(!event.target.value)
            {
                setFormError(prevFormErr=>{
                        return {...prevFormErr,departmentErr:'@ Department Description is required'}
                    });
                    setFormData(prevFormData => {
                        return { ...prevFormData, [event.target.name]:''}
                    });
            }
            else {
                setFormError(prevFormErr=>{
                    return {...prevFormErr,departmentErr:''}
                });
                setFormData(prevFormData => {
                    return { ...prevFormData, [event.target.name]: event.target.value }
                });
            }
        }

    }

    const validation=()=>
    {
      const err={};
      if(formData.id==='')
      {
        err.idErr='Department Id can not be Empty';
      }
      if(formData.name==='')
      {
        err.nameErr='Department Name can not be Empty';
      }
      if(formData.department==='')
      {
        err.departmentErr='Department Description can not be Empty';
      }
    
      setFormError(err);
      return Object.keys(err).length<1;
    }
    const newDepartment={
        dName:formData.department,
        dDescript:'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    }
    const onSubmitHandler=async(event)=>
    {
      event.preventDefault();
      if(validation())
      {
        toast.success('Thank You!!!! for successfully adding your data',{theme: "colored"});
        //API Call Starts................................................................
        
        await addDoctor(formData);
        
        //update department table also...............................

        await addDepartment(newDepartment);

        //.......................................................

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
                                <span className="text-white">Add Doctors </span>
                                <h1 className="text-capitalize mb-5 text-lg">Add Doctors </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <form style={{ width: '70%', margin: '30px auto 30px auto', boxShadow: '30px 30px 50px', padding: '30px', borderRadius: '30px' }}>
                <div className="form-group">
                    <label htmlFor="exampleId"><h6 className='text-danger'>Id</h6></label>
                    <input type="text" className="form-control" id="exampleId" name='id' value={formData?.id} onChange={handleOnchange} />
                    <span className='text-danger'>{formError?.idErr}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleName"><h6 className='text-danger'>Name</h6></label>
                    <input type="text" className="form-control" id="exampleName" name='name' value={formData?.name} onChange={handleOnchange} />
                    <span className='text-danger'>{formError?.nameErr}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDepartment"><h6 className='text-danger'>Department</h6></label>
                    <input type="text" className="form-control" id="exampleDepartment" name='department' value={formData?.department} onChange={handleOnchange} />
                    <span className='text-danger'>{formError?.departmentErr}</span>
                </div>
                <div className='text-center form-group'>
                    <button type="submit" className="btn btn-outline-danger text-center" onClick={onSubmitHandler}>Edit Department</button>
                </div>
            </form>
        </>
    )
}

export default AddDoctor