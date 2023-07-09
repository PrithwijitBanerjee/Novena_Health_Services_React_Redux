
import React from 'react'
import { deleteDepartment, fetchDepartmentData } from '../../../Services/Api';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { Dna } from 'react-loader-spinner'
const DepartmentsData = () => {
    const dispatch = useDispatch();
    const { loading, departmentsData } = useSelector(state => state?.hospital);
    // const [departments, setDepartments] = React.useState([]);
    // const getDepartmentsInfo = async () => {
    //     const res = await getDepartmentsData();
    //     setDepartments(res?.data);
    // }
    React.useEffect(() => {

        // getDepartmentsInfo();
        //Async Operation.......
        dispatch(fetchDepartmentData());

    }, []);
    const navigate = useNavigate();
    const handleDeleteDepartmentData = async (id) => {
        await deleteDepartment(id);

        //Refreshing Department Table...
        dispatch(fetchDepartmentData());
        toast.error(`Record with Id ${id} has been deleted`, { theme: "colored" });
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
                        <th scope="col">Department Id</th>
                        <th scope="col">Department Name</th>
                        <th scope="col">Department Description</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'lightgrey' }}>
                    {
                        (departmentsData.length === 0) ? <>
                            <td colSpan={5} className='text-center'><h5 className='text-danger'>Empty!!! No Departments Available</h5></td>
                        </> : <>
                            {
                                departmentsData?.map((department, index) => {
                                    const { id, dName, dDescript } = department;
                                    return (
                                        <>
                                            <tr key={index.toString()}>
                                                <th scope="row">{id}</th>
                                                <td>{dName}</td>
                                                <td>{dDescript}</td>
                                                <td><Link className='btn btn-outline-success' to={`/editdepartments/${id}`}>Edit</Link></td>
                                                <td><button className=' btn btn-outline-danger' onClick={handleDeleteDepartmentData.bind(this, id)}>Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </>
                    }
                </tbody>
            </table>
            <button className='btn btn-outline-danger' onClick={() => navigate('/adddepartment')} style={{ margin: '20px auto 20px auto', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Add New Department</button>
        </>
    )
}

export default DepartmentsData