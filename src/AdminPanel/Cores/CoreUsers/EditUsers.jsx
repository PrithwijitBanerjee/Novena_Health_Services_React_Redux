import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleUserData, editUser } from '../../../Services/Api';
import { toast } from 'react-toastify';
const EditUsers = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [formError, setFormError] = useState({});
  const getUsersInfo = async () => {
    const res = await getSingleUserData(id);
    setUser(res.data);
  }

  useEffect(() => {
    getUsersInfo();
  }, []);


  const handleOnchange = (event) => {
    setUser(prevUser => {
      return { ...prevUser, [event.target.name]: event.target.value };
    })
    if (event.target.name === 'id') {
      if (!event.target.value) {
        setFormError(prevErr => {
          return { ...prevErr, idErr: 'Id can not be Changed' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: '' };
        })
      }
      else {
        setFormError(prevErr => {
          return { ...prevErr, idErr: '' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: event.target.value };
        })
      }
    }
    if (event.target.name === 'fullName') {
      if (event.target.value.length > 30 || !event.target.value) {
        setFormError(prevErr => {
          return { ...prevErr, fullNameErr: 'Id can not be Changed' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: '' };
        })

      }
      else {
        setFormError(prevErr => {
          return { ...prevErr, fullNameErr: '' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: event.target.value };
        })
      }
    }
    if (event.target.name === 'emailId') {
      if (!event.target.value) {
        setFormError(prevErr => {
          return { ...prevErr, emailErr: 'Email Id is required' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: '' };
        })
      }
      else {
        setFormError(prevErr => {
          return { ...prevErr, emailErr: '' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: event.target.value };
        })
      }
    }


    if (event.target.name === 'query') {
      if (!event.target.value) {
        setFormError(prevErr => {
          return { ...prevErr, queryErr: '@Query is required' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: '' };
        })

      }
      else {
        setFormError(prevErr => {
          return { ...prevErr, queryErr: '' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: event.target.value };
        })
      }
    }
    if (event.target.name === 'phone') {
      if (event.target.value.length > 10) {
        setFormError(prevErr => {
          return { ...prevErr, phoneErr: 'Phone Number is Invalid' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: '' };
        })

      }
      else {
        setFormError(prevErr => {
          return { ...prevErr, phoneErr: '' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: event.target.value };
        })
      }
    }

    if (event.target.name === 'message') {
      if (event.target.value.length > 50) {
        setFormError(prevErr => {
          return { ...prevErr, messageErr: '@Message should not exists 50 characters' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: '' };
        })

      }
      else {
        setFormError(prevErr => {
          return { ...prevErr, messageErr: '' }
        })
        setUser(prevUser => {
          return { ...prevUser, [event.target.name]: event.target.value };
        })
      }

    }
  }



  const validation = () => {
    const err = {};
    if (!user.fullName) {
      err.fullNameErr = 'Name must required';
    }
    if (! /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(user.emailId)) {
      err.emailIdErr = 'Invalid Email Id';
    }
    if (!user.query) {
      err.queryErr = 'Query is required';
    }
    if (!user.phone) {
      err.phoneErr = 'Contact No. is required';
    }
    if (!user.message) {
      err.messageErr = 'Message is required';
    }
    setFormError(err);
    return Object.keys(err).length < 1;
  }
  const handleOnchangeEvent = async (event) => {
    event.preventDefault();
    if (validation()) {
      toast.success('Thank You!!! for successfully editing your data', { theme: "colored" });
      //API call starts..............................................

      await editUser(user, id);

      //API call ends................................................

      navigate('/users');
    }

  }
  return(
    <>
      <>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Patientss Section</span>
                <h1 className="text-capitalize mb-5 text-lg">Patients Section</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{ width: '70%', margin: '30px auto 30px auto', boxShadow: '30px 30px 50px', padding: '30px', borderRadius: '30px' }}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Id</h6></label>
          <input type="text" className="form-control" id="exampleId" name='id' value={user.id} onChange={handleOnchange} />
          <span className='text-danger'>{formError.idErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Full Name</h6></label>
          <input type="text" className="form-control" id="exampleName" name='fullName' value={user.fullName} onChange={handleOnchange} />
          <span className='text-danger'>{formError.fullNameErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDepartment"><h6 className='text-danger'>Email Id</h6></label>
          <input type="mail" className="form-control" id="exampleName" name='emailId' value={user.emailId} onChange={handleOnchange} />
          <span className='text-danger'>{formError.emailIdErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Query</h6></label>
          <input type="text" className="form-control" id="exampleName" name='query' value={user.query} onChange={handleOnchange} />
          <span className='text-danger'>{formError.queryErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Phone</h6></label>
          <input type="text" className="form-control" id="exampleName" name='phone' value={user.phone} onChange={handleOnchange} />
          <span className='text-danger'>{formError.phoneErr}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Message</h6></label>
          <textarea className="form-control" id="exampleName" name='message' value={user.message} onChange={handleOnchange} />
          <span className='text-danger'>{formError.messageErr}</span>
        </div>
        <div className='text-center form-group'>
          <button type="submit" className="btn btn-outline-danger text-center" onClick={handleOnchangeEvent}>Edit Department</button>
        </div>
      </form>
    </>
    </>
  )
  
}


export default EditUsers