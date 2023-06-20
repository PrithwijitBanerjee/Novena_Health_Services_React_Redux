import React from 'react'
import { deleteUser, fetchUsersData } from '../../../Services/Api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner'
const UsersData = () => {
    const dispatch = useDispatch();
    const { loading, usersData } = useSelector(state => state?.hospital);
    // const [users,setUsers] = React.useState([]);
    // const getUsersInfo = async () => {
    //     const res = await getUsersData();
    //     setUsers(res.data);
    // }
    React.useEffect(() => {

        // getUsersInfo();
        //Async Operation...
        dispatch(fetchUsersData());

    }, []);

    const handleDeleteUser = async (id) => {
        toast.error(`Record ${id} has been deleted`, { theme: "colored" });
        //Api call start....

        await deleteUser(id);

        //Api call end.....

        // await getUsersInfo();
        //Refreshing Users Table...
        dispatch(fetchUsersData());
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
                        <th scope='col'>Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Query</th>
                        <th scope='col'>Contact No</th>
                        <th scope='col'>Message</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'lightgrey' }}>
                    {
                        (usersData.length === 0) ? <>
                            <td colSpan={10} className='text-center'><h5 className='text-danger'>Empty!!! Currently No Users Available</h5></td>
                        </> : <>
                            {
                                usersData.map((user, index) => {
                                    const { id, fullName, emailId, query, phone, message } = user;
                                    return (
                                        <>
                                            <tr key={index.toString()}>
                                                <th scope="row">{id}</th>
                                                <td>{fullName}</td>
                                                <td>{emailId}</td>
                                                <td>{query}</td>
                                                <td>{phone}</td>
                                                <td>{message}</td>
                                                <td><Link className='btn btn-outline-success' to={`/editusers/${id}`}>Edit</Link></td>
                                                <td><button className=' btn btn-outline-danger' onClick={handleDeleteUser.bind(this, id)}>Delete</button></td>
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

export default UsersData