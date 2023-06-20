import React, { useEffect, useState } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { userSignUp } from '../../Redux/RegistrationSlice'
const SignUp = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {loading,redirectReg}=useSelector(state=>state?.signUp);
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [error, setError] = useState({});
  //on Submit Validation..........................
  const validation = () => {
    let error = {}

    if (!user.name) {
      error.name = "Name is Required"
    }

    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }

    if (!user.mobile) {
      error.mobile = "Mobile is Required"
    }
    if (!user.password) {
      error.password = "Password is Required"
    }

    return error
  }

  //on change validation..........................
  const postUserData = event => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
    if (name === 'name') {
      if (value.length === 0) {
        setError({ ...error, name: '@Name is Required' });
        setUser({ ...user, name: '' });
      }
      else {
        setError({ ...error, name: '' });
        setUser({ ...user, name: value });
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }
    if (name === "mobile") {
      if (value.length === 0) {
        setError({ ...error, mobile: "@mobile is Required" })
        setUser({ ...user, mobile: "" })
      } else {
        setError({ ...error, mobile: "" })
        setUser({ ...user, mobile: value })
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@password is Required" })
        setUser({ ...user, password: "" })
      } else {
        setError({ ...error, password: "" })
        setUser({ ...user, password: value })
      }
    }
  }

  const redirectUser=()=>{
    const name=localStorage.getItem('name');
    if(name!==null && name!=='' && name!==undefined)
    {
      navigate('/signIn');
    }
  }

  useEffect(()=>{
    redirectUser();
  },[redirectReg]);
  const submitInfo=e=>{
    e.preventDefault();
    const errorList=validation();
    setError(errorList);
    if(Object.keys(errorList).length<1)
    {
        //Async Operation....
        dispatch(userSignUp(user));
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
                <span className="text-white">SignUp Form</span>
                <h1 className="text-capitalize mb-5 text-lg">SignUp Form</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{ width: '50%', margin: '30px auto 30px auto', boxShadow: '30px 30px 50px', padding: '30px', borderRadius: '30px' }}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Name</h6></label>
          <input type="text" className="form-control" id="exampleId" autoComplete='on' name='name' value={user?.name} onChange={(e) => postUserData(e)} />
          <span className='text-danger'>{error?.name}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Email Id</h6></label>
          <input type="email" className="form-control" id="exampleId" autoComplete='on' name='email' value={user?.email} onChange={(e) => postUserData(e)} />
          <span className='text-danger'>{error?.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Contact No</h6></label>
          <input type="tel" className="form-control" id="exampleId" autoComplete='on' name='mobile' value={user?.mobile} onChange={(e) => postUserData(e)} />
          <span className='text-danger'>{error?.moblie}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Password</h6></label>
          <input type="password" className="form-control" id="exampleName" name='password' value={user?.password} onChange={(e) => postUserData(e)} />
          <span className='text-danger'>{error?.password}</span>
        </div>

        <div className='text-center form-group'>
          {
             loading? <>
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
              />
            </> : <>
              <button type="submit" className="btn btn-outline-danger text-center" onClick={submitInfo}>SignUp</button>
            </>
          }
        </div>
        <div className='text-center'>
          <h6 className='text-success' style={{ display: 'inline', cursor: 'pointer' }}>**Already Have An Account?</h6><Link to="/signIn" className="btn btn-outline-success">Sign In</Link>
        </div>
      </form>
    </>
  )
}

export default SignUp;