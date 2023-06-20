import React from 'react'
import { deleteDoctor, fetchDoctors } from '../../../Services/Api'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Dna } from 'react-loader-spinner'
const DoctorsData = () => {
    const dispatch = useDispatch();
    const { loading, doctorsData } = useSelector(state => state?.hospital);
    // const [doctors, setDoctors] = React.useState([]);
    // const getDoctorsInfo = async () => {
    //     const res = await getDoctors();
    //     setDoctors(res.data);
    // }
    const navigate = useNavigate();
    React.useEffect(() => {

        // getDoctorsInfo();
        //Async Operation....
        dispatch(fetchDoctors());

    }, []);
    const handleDeleteDoctor = async (id) => {
        await deleteDoctor(id);
        // Refreshing Doctors Table...
        dispatch(fetchDoctors());
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
            <table className="table" style={{ width: "50%", margin: '20px auto 50px auto', boxShadow: '20px 20px 80px' }}>
                <thead className='bg-danger text-white'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'lightgrey' }}>
                    {
                        (doctorsData.length === 0) ? <>
                            <td colSpan={5} className='text-center'><h5 className='text-danger'>Empty!!! No Doctors Available</h5></td>
                        </> : <>
                            {
                                doctorsData.map((doctor, index) => {
                                    const { id, name, department } = doctor;
                                    return (
                                        <>
                                            <tr key={index.toString()}>
                                                <th scope="row">{id}</th>
                                                <td>{name}</td>
                                                <td>{department}</td>
                                                <td><Link className='btn btn-outline-success' to={`/editdoctors/${id}`}>Edit</Link></td>
                                                <td><button className=' btn btn-outline-danger' onClick={handleDeleteDoctor.bind(this, id)}>Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </>
                    }
                </tbody>
            </table>
            <button className='btn btn-outline-danger' onClick={() => navigate('/adddoctor')} style={{ margin: '20px auto 20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Add New Doctor</button>

        </>
    )
}

export default DoctorsData