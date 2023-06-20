import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignIn, RegLog } from '../../Redux/LoginSlice';
import { MagnifyingGlass } from 'react-loader-spinner'
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, redirectTo } = useSelector(state => state?.signIn);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({});
  //form on Submit validation....................
  const validation = () => {
    let error = {}
    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }
    if (!user.password) {
      error.password = "Password is Required"
    }
    return error
  }
  //form on Change validation....................
  const postUserData = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
    if (name === 'email') {
      if (value.length === 0) {
        setError({ ...error, email: '@Email Id is required...' });
        setUser({ ...user, email: '' });
      }
      else {
        setError({ ...error, email: '' });
        setUser({ ...user, email: value });
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
  const SubmitInfo = event => {
    event.preventDefault();
    let errorList = validation();
    setError(errorList);
    if (Object.keys(errorList).length < 1) {
      //Async Operation...
      dispatch(userSignIn(user));
    }
  }
  const redirectUser = () => {
    const token = localStorage.getItem('token');
    if (token !== null && token !== '' && token !== undefined) {
      navigate('/');
    }
  }

  useEffect(() => {
    redirectUser();
  }, [redirectTo]);
  const log = () => {
    dispatch(RegLog());
  }
  return (
    <>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">SignIn Form</span>
                <h1 className="text-capitalize mb-5 text-lg">SignIn Form</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form style={{ width: '50%', margin: '30px auto 30px auto', boxShadow: '30px 30px 50px', padding: '30px', borderRadius: '30px' }}>
        <div className="form-group">
          <label htmlFor="exampleId"><h6 className='text-danger'>Email Id</h6></label>
          <input type="email" className="form-control" id="exampleId" autoComplete='on' name='email' value={user?.email} onChange={(e) => postUserData(e)} />
          <span className='text-danger'>{error?.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleName"><h6 className='text-danger'>Password</h6></label>
          <input type="password" className="form-control" id="exampleName" name='password' value={user?.password} onChange={(e) => postUserData(e)} />
          <span className='text-danger'>{error?.password}</span>
        </div>

        <div className='text-center form-group'>
          {
            loading ? <>
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
              <button type="submit" className="btn btn-outline-danger text-center" onClick={SubmitInfo}>SignIn</button>
            </>
          }
        </div>
        <div className='text-center'>
          <h6 className='text-success' style={{ display: 'inline', cursor: 'pointer' }}>**New to Novena?</h6><Link to="/signUp" className="btn btn-outline-success" onClick={log}>Sign Up</Link>
        </div>
      </form>
    </>
  )
}

export default SignIn;