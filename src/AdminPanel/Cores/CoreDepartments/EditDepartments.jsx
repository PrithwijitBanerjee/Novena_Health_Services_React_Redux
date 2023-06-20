import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleDepartmentData,editDepartment } from '../../../Services/Api';
import {toast} from 'react-toastify';
const EditDepartments = () => {
  const [department,setDepartment]=useState({});
  const navigate=useNavigate();
  // const [formData,setFormData]=useState({
  //   dId:'',
  //   dName:'',
  //   dDescript:''
  // });
  const [formError,setFormError]=useState({});
  const {id}=useParams();


  const handleOnchange=(event)=>
  {   
        const err={};
        if(event.target.name==='id')
        {
          if(!event.target.value)
          {
              err.dIdErr='Id Can not be empty';
          }
          else{
            err.dIdErr='';
            setDepartment(prevDescript=>{
              return {...prevDescript,[event.target.name]:event.target.value}
            });
          }
        }

        if(event.target.name==='dName')
        {
          if(event.target.value.length>30)
          {
              err.dNameErr='Plz Enter Department Name Properly';
          }
          else{
            err.dNameErr='';
            setDepartment(prevDescript=>{
              return {...prevDescript,[event.target.name]:event.target.value}
            });
          }
        }

        if(event.target.name==='dDescript')
        {
          if(event.target.value.length>70)
          {
              err.dDescriptErr='Department Description exceeds seventy characters';
          }
          else{
            err.dDescriptErr='';
            setDepartment(prevDescript=>{
              return {...prevDescript,[event.target.name]:event.target.value}
            });
          }
        }

        setFormError(err);
  }




  useEffect(()=>{
    const getDepartmentInfo=async()=>
  {
      const res=await getSingleDepartmentData(id);
      //console.log("res",res);
      setDepartment(res);
  }
    getDepartmentInfo();
  },[]);


const validation=()=>
{
    const err={};
    if(department.dId==='')
    {
      err.dIdErr='Department Id can not be Empty';
    }
    if(department.dName==='')
    {
      err.dNameErr='Department Name can not be Empty';
    }
    if(department.dDescript==='')
    {
      err.dDescriptErr='Department Description can not be Empty';
    }

    setFormError(err);
    return Object.keys(err).length<1;
}

const onSubmitHandler=async(event)=>
{
    event.preventDefault();
    if(validation())
    {   
        toast.success('Thank You!!! for successfully editing your information',{theme: "colored"});
        //API call starts.................................................
        await editDepartment(department,id);


        //API call ends...................................................
        navigate('/departments');
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
                <span className="text-white">Edit Department</span>
                <h1 className="text-capitalize mb-5 text-lg">Edit Department</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{width:'70%',margin:'30px auto 30px auto', boxShadow:'30px 30px 50px',padding:'30px',borderRadius:'30px'}}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Department Id</h6></label>
          <input type="text" className="form-control" id="exampleId" name='id' value={department?.id} onChange={handleOnchange}/>
          <span className='text-danger'>{formError?.dIdErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Department Name</h6></label>
          <input type="text" className="form-control" id="exampleName" name='dName' value={department?.dName} onChange={handleOnchange}/>
          <span className='text-danger'>{formError?.dNameErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDepartment"><h6 className='text-danger'>Department Description</h6></label>
          <input type="text" className="form-control" id="exampleDepartment" name='dDescript' value={department?.dDescript} onChange={handleOnchange}/>
          <span className='text-danger'>{formError?.dDescriptErr}</span>
        </div>
        <div className='text-center form-group'>
          <button type="submit" className="btn btn-outline-danger text-center" onClick={onSubmitHandler}>Edit Department</button>
        </div>
      </form>
    </>
  )
}

export default EditDepartments