import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Commons/Footer";
import Header from "./Components/Commons/Header";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import BlogSidebar from "./Pages/BlogSidebar";
import BlogSingle from "./Pages/BlogSingle";
import Confirmation from "./Pages/Confirmation";
import Contact from "./Pages/Contact";
import Department from "./Pages/Department";
import DepartmentSingle from "./Pages/DepartmentSingle";
import Doctor from "./Pages/Doctor";
import DoctorSingle from "./Pages/DoctorSingle";
import Index from "./Pages/Index";
import Service from "./Pages/Service";
import Dashboard from "./AdminPanel/Pages/Dashboard";
import NotFound from './AdminPanel/Pages/NotFound';
import Departments from './AdminPanel/Pages/Departments'
import Doctors from './AdminPanel/Pages/Doctors'
import Patients from './AdminPanel/Pages/Patients'
import Profile from './AdminPanel/Pages/Profile'
import EditDoctors from "./AdminPanel/Cores/CoreDoctors/EditDoctors";
import EditDepartments from "./AdminPanel/Cores/CoreDepartments/EditDepartments";
import EditPatients from "./AdminPanel/Cores/CorePatients/EditPatients";
import EditUsers from "./AdminPanel/Cores/CoreUsers/EditUsers";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddDepartment from "./AdminPanel/Cores/CoreDepartments/AddDepartment";
import AddDoctor from "./AdminPanel/Cores/CoreDoctors/AddDoctor";
import SignIn from "./Authentication/Pages/SignIn";
import SignUp from "./Authentication/Pages/SignUp";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkToken } from "./Redux/LoginSlice";
function App() {
  const dispatch=useDispatch();

  //Check if token is available or not...
  const PrivateRoute=({children})=>{//Higher Order Function...
    const token=localStorage.getItem('token') || sessionStorage.getItem('token');
    if(token!==null && token!=='' && token!==undefined)
    {
        return (
          <>
            {children}
          </>
        )
    }else{
      return (
        <>
          <Navigate to='/signUp'/>
        </>
      )
    }
  }
  useEffect(()=>{
    dispatch(checkToken());
  },[]);
  const publicRoutesNames=[
    {
      path:'/',
      component:<Index/>
    },
    {
      path:'/about',
      component:<About/>
    },
    {
      path:'/service',
      component:<Service/>
    },
    {
      path:'/blog-sidebar',
      component:<BlogSidebar/>
    },
    {
      path:'/blog-single',
      component:<BlogSingle/>
    },
    {
      path:'/department',
      component:<Department/>
    },
    {
      path:'/department-single',
      component:<DepartmentSingle/>
    },
    {
      path:'/doctor',
      component:<Doctor/>
    },
    {
      path:'/doctor-single',
      component:<DoctorSingle/>
    },
    {
      path:'/signUp',
      component:<SignUp/>
    },
    {
      path:'/signIn',
      component:<SignIn/>
    },
    {
      path:'*',
      component:<NotFound/>
    }
  ];
  const privateRoutesNames=[
    {
      path:'/appoinment',
      component:<Appointment/>
    },
    {
      path:'/confirmation',
      component:<Confirmation/>
    },
    {
      path:'/contact',
      component:<Contact/>
    },
    {
      path:'/dashboard',
      component:<Dashboard/>
    },
    {
      path:'/departments',
      component:<Departments/>
    },
    {
      path:'/doctors',
      component:<Doctors/>
    },
    {
      path:'/patients',
      component:<Patients/>
    },
    {
      path:'/users',
      component:<Profile/>
    },
    {
      path:'/adddoctor',
      component:<AddDoctor/>
    },
    {
      path:'/editdoctors/:id',
      component:<EditDoctors/>
    },
    {
      path:'/adddepartment',
      component:<AddDepartment/>
    },
    {
      path:'/editdepartments/:id',
      component:<EditDepartments/>
    },
    {
      path:'/editpatients/:id',
      component:<EditPatients/>
    },
    {
      path:'/editusers/:id',
      component:<EditUsers/>
    },
  ];
  return (
    <>
        <ToastContainer/>    
        <BrowserRouter>
              <Header/>
                    <Routes>
                          {/* <Route exact path="/" element={<Index/>}/>
                          <Route path="/about" element={<About/>}/>
                          <Route path='/service' element={<Service/>}/>
                          <Route path="/appoinment" element={<Appointment/>}/>
                          <Route path="/confirmation" element={<Confirmation/>}/>
                          <Route path="/contact" element={<Contact/>}/>
                          <Route path="/blog-sidebar" element={<BlogSidebar/>}/>
                          <Route path="/blog-single"  element={<BlogSingle/>}/>
                          <Route path="/department" element={<Department/>}/>
                          <Route path="/department-single" element={<DepartmentSingle/>}/>
                          <Route path="/doctor" element={<Doctor/>}/>
                          <Route path="/doctor-single" element={<DoctorSingle/>}/>   
                          <Route path="/dashboard" element={<Dashboard/>}/> 
                          <Route path="/departments" element={<Departments/>}/> 
                          <Route path="/doctors" element={<Doctors/>}/> 
                          <Route path="/patients" element={<Patients/>}/> 
                          <Route path="/users" element={<Profile/>}/> 
                          <Route path="/adddoctor" element={<AddDoctor/>}/>
                          <Route path="/editdoctors/:id" element={<EditDoctors/>}/> 
                          <Route path="/adddepartment" element={<AddDepartment/>}/>
                          <Route path="/editdepartments/:id" element={<EditDepartments/>}/>
                          <Route path="/editpatients/:id" element={<EditPatients/>}/> 
                          <Route path="/editusers/:id" element={<EditUsers/>}/> 
                          <Route path="/signUp" element={<SignUp/>} />
                          <Route path="/signIn" element={<SignIn/>} />
                          <Route path="*" element={<NotFound/>}/> */}
                          {
                            publicRoutesNames?.map((route,index)=>{
                              return (
                                <>
                                  <Route 
                                    key={index+1}
                                    exact path={route?.path}
                                    element={route?.component}
                                  />
                                </>
                              )
                            })
                          }
                          {
                            privateRoutesNames?.map((route,index)=>{
                              return (
                                <>
                                  <Route 
                                      key={index+1}
                                      exact path={route?.path}
                                      element={(<><PrivateRoute>{route?.component}</PrivateRoute></>)}
                                  />
                                </>
                              )
                            })
                          }
                    </Routes>
              <Footer/>      
        </BrowserRouter>
    </>
  );
}

export default App;
