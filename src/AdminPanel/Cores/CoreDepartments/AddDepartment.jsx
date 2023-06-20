import React, { useState } from 'react'
import { addDepartment } from '../../../Services/Api'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AddDepartment = () => {
  const [formData,setFormData]=useState({

    id:'',
    dName:'',
    dDescript:''
  }); 
  const navigate=useNavigate();
  const [formError,setFormError]=useState({});

  const handleOnchange=(event)=>
  {   
        setFormData(prevFormData=>{
            return {...prevFormData,[event.target.name]:event.target.value}
        })
        if(event.target.name==='id')
        {
            setFormData(prevFormData=>{
              return {...prevFormData,[event.target.name]:+event.target.value}
            });
        }

        if(event.target.name==='dName')
        {
          if(event.target.value.length>30 || !event.target.value)
          {
              setFormError(prevFormErr=>{
                  return {...prevFormErr,dNameErr:'Plz Enter Department Name Properly'}
              })
              setFormData(prevFormData=>{
                return {...prevFormData,[event.target.name]:''}
              });
          }
          else{
            setFormError(prevFormErr=>{
              return {...prevFormErr,dNameErr:''}
          })
            setFormData(prevFormData=>{
                return {...prevFormData,[event.target.name]:event.target.value}
              });
          }
        }

        if(event.target.name==='dDescript')
        {
          if(event.target.value.length>70 )
          {
             setFormError(prevFormErr=>{
              return {...prevFormErr,dDescriptErr:'Department Description exceeds seventy characters'}
             }) 
             setFormData(prevFormData=>{
              return {...prevFormData,[event.target.name]:''}
            });
          }
          else if(!event.target.value)
          {
            setFormError(prevFormErr=>{
              return {...prevFormErr,dDescriptErr:'@ Department Description is required'}
             }) 
             setFormData(prevFormData=>{
              return {...prevFormData,[event.target.name]:''}
            });
          }
          else{
            setFormError(prevFormErr=>{
              return {...prevFormErr,dDescriptErr:''}
             }) 
            setFormData(prevFormData=>{
                return {...prevFormData,[event.target.name]:event.target.value}
              });
          }
        }
  }

  const validation=()=>
  {
      const err={};
      if(formData.dId==='')
      {
        err.dIdErr='Department Id can not be Empty';
      }
      if(formData.dName==='')
      {
        err.dNameErr='Department Name can not be Empty';
      }
      if(formData.dDescript==='')
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
          toast.success('Thank You!!! for successfully adding your information',{theme: "colored"});
          //API call starts.................................................
          await addDepartment(formData);
  
  
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
                <span className="text-white">Add Department</span>
                <h1 className="text-capitalize mb-5 text-lg">Add Department</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{width:'70%',margin:'30px auto 30px auto', boxShadow:'30px 30px 50px',padding:'30px',borderRadius:'30px'}}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Department Id</h6></label>
          <input type="text" className="form-control" id="exampleId" name='id' value={formData.id} onChange={handleOnchange}/>
          <span className='text-danger'>{formError.dIdErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Department Name</h6></label>
          <input type="text" className="form-control" id="exampleName" name='dName' value={formData.dName} onChange={handleOnchange}/>
          <span className='text-danger'>{formError.dNameErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDepartment"><h6 className='text-danger'>Department Description</h6></label>
          <input type="text" className="form-control" id="exampleDepartment" name='dDescript' value={formData.dDescript} onChange={handleOnchange}/>
          <span className='text-danger'>{formError.dDescriptErr}</span>
        </div>
        <div className='text-center form-group'>
          <button type="submit" className="btn btn-outline-danger text-center" onClick={onSubmitHandler}>Add New Department</button>
        </div>
      </form>
   </>
  )
}

export default AddDepartment