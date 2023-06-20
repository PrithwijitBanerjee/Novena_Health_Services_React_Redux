import React from 'react'
import { deletePatient, fetchPatients } from '../../../Services/Api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner'
const PatientsData = () => {
    const dispatch = useDispatch();
    const { loading, patientsData } = useSelector(state => state.hospital);
    //   const [patients,setPatients]=React.useState([]);  
    //   const getPatientsInfo=async()=>
    //   {
    //       const res=await getPatients();
    //       setPatients(res.data);
    //   }

    React.useEffect(() => {

        // getPatientsInfo();
        dispatch(fetchPatients());

    }, []);

    const handleDeletePatient = async (id) => {
        await deletePatient(id);
        // await getPatientsInfo();
        //Refreshing Patients Table...
        dispatch(fetchPatients());
        toast.error(`Record ${id} has been deleted`, { theme: "colored" });
    }
    if (loading === true) {
        return (
            <>
                <div className='text-center'>
                    <Dna
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            </>
        )
    }
    return (
        <>
            <table className="table" style={{ width: "90%", margin: '20px auto 50px auto', boxShadow: '20px 20px 80px' }}>
                <thead className='bg-danger text-white'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Message</th>
                        <th scope="col">Department</th>
                        <th scope="col">Doctors</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Email Id</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'lightgrey' }}>
                    {
                        (patientsData.length === 0) ? <>
                            <td colSpan={11} className='text-center'><h5 className='text-danger'>Empty!!! No Patients Available</h5></td>
                        </> : <>
                            {
                                patientsData.map((patient, index) => {
                                    const { id, fullName, message, Department, Doctors, date, time, phone, emailId } = patient;
                                    return (
                                        <>
                                            <tr key={index.toString()}>
                                                <th scope="row">{id}</th>
                                                <td>{fullName}</td>
                                                <td>{message}</td>
                                                <td>{Department}</td>
                                                <td>{Doctors}</td>
                                                <td>{date}</td>
                                                <td>{time}</td>
                                                <td>{phone}</td>
                                                <td>{emailId}</td>
                                                <td><Link className='btn btn-outline-success' to={`/editpatients/${id}`}>Edit</Link></td>
                                                <td><button className=' btn btn-outline-danger' onClick={handleDeletePatient.bind(this, id)}>Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </>
                    }
                </tbody>
            </table>
        </>
    )
}

export default PatientsData