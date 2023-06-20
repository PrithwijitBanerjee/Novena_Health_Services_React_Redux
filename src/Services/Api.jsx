import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const doctorsUrl = 'http://127.0.0.1:3002/doctors';
const departmentUrl = 'http://localhost:3002/departments'
const patientUrl = 'http://127.0.0.1:3002/patients';
const guestUrl = 'http://localhost:3002/guestUsers';


const initialState = {
  departmentsData: [],
  doctorsData: [],
  patientsData: [],
  usersData:[],
  loading: false,
  error: ''
};

//Thunk Middleware for Department.....
export const fetchDepartmentData = createAsyncThunk(
  'user/department',
  async () => {
    try {
      const response = await axios.get(`${departmentUrl}`);
      return response?.data;
    } catch (error) {
      console.log('Failed to fetching data from getDepartmentsData API', error.message);
    }
  }
);
export const getDepartmentsData = async () => {
  try {
    const response = await axios.get(`${departmentUrl}`);
    return response;
  } catch (error) {
    console.log('Failed to fetching data from getDepartmentsData API', error.message);
  }
}

export const getSingleDepartmentData = async (id) => {
  try {
    const response = await axios.get(`${departmentUrl}`);
    const data1 = response?.data?.find(ele => ele.id === parseInt(id));
    return data1;
  } catch (error) {
    console.log('Failed to fetching single data from getSingleDepartmentData API', error.message);
  }
}

export const editDepartment = async (data, id) => {
  try {
    const response = await axios.put(`${departmentUrl}/${id}`, data);
    return response;
  } catch (error) {
    console.log('Failed to updating data from editDepartment API', error.message);
  }
}


export const addDepartment = async (data) => {
  try {
    const response = await axios.post(`${departmentUrl}`, data);
    return response;
  } catch (error) {
    console.log('Failed to posting data from addDepartment API', error.message);
  }
}

export const deleteDepartment = async (id) => {
  try {
    const response = await axios.delete(`${departmentUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to deleting data from deleteDepartment API', error.message);
  }
}

//Thunk Middleware for Doctors...
export const fetchDoctors = createAsyncThunk('user/doctor',
  async () => {
    try {
      const response = await axios.get(`${doctorsUrl}`);
      return response?.data;
    } catch (error) {
      console.log('Failed to fetching data from getDoctors API', error.message);
    }
  });
export const getDoctors = async () => {
  try {
    const response = await axios.get(`${doctorsUrl}`);
    return response;
  } catch (error) {
    console.log('Failed to fetching data from getDoctors API', error.message);
  }
}

export const getSingleDoctorData = async (id) => {
  try {
    const response = await axios.get(`${doctorsUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to fetching single data from getSingleDoctorData API', error.message);
  }
}


export const addDoctor = async (data) => {
  try {
    const response = await axios.post(`${doctorsUrl}`, data);
    return response;
  } catch (error) {
    console.log('Failed to adding  data to addDoctor API', error.message);
  }

}


export const editDoctor = async (data, id) => {
  try {
    const response = await axios.put(`${doctorsUrl}/${id}`, data);
    return response;
  } catch (error) {
    console.log('Failed to updating data from editDoctor API', error.message);
  }
}


export const deleteDoctor = async (id) => {
  try {
    const response = await axios.delete(`${doctorsUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to deleting data from deleteDoctor API', error.message);
  }
}

//Thunk Middleware For Patients....
export const fetchPatients = createAsyncThunk('user/patients',
  async () => {

    try {
      const response = await axios.get(`${patientUrl}`);
      return response?.data;
    } catch (error) {
      console.log('Failed to fetching data from getPatients API', error.message);
    }

  })

export const getPatients = async () => {
  try {
    const response = await axios.get(`${patientUrl}`);
    return response;
  } catch (error) {
    console.log('Failed to fetching data from getPatients API', error.message);
  }
}

export const getSinglePatientData = async (id) => {
  try {
    const response = await axios.get(`${patientUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to fetching single data from getSinglePatientData API', error.message);
  }
}

export const editPatientsData = async (data, id) => {
  try {
    const response = await axios.put(`${patientUrl}/${id}`, data);
    return response;
  } catch (error) {
    console.log('Failed to editing data to editPatientsData API', error.message);
  }
}

export const postPatientsData = async (data) => {
  try {
    const response = await axios.post(patientUrl, data);
    return response;
  } catch (error) {
    console.log('Failed to submitting data to postPatientsData API', error.message);
  }
}


export const deletePatient = async (id) => {
  try {
    const response = await axios.delete(`${patientUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to deleting data from deletePatient API', error.message);
  }
}


export const postUserData = async (data) => {
  try {
    const response = await axios.post(`${guestUrl}`, data);
    return response;
  } catch (error) {
    console.log('Failed to submitting data to postUserData API', error.message);
  }
}

// export const getDepartmentsData=async()=>
// {
//               try{
//                 const response=await axios.get(`${departmentUrl}`);
//                 return response;
//             }catch(error)
//             {
//             console.log('Failed to submitting data to getDepartmentsData API',error.message);
//             }
// }

//Thunk Middleware for Users...
export const fetchUsersData = createAsyncThunk('user/fetch',
  async () => {
    try {
      const response = await axios.get(`${guestUrl}`);
      return response?.data;
    } catch (error) {
      console.log('Failed to submitting data to getUsersData API', error.message);
    }
  });

export const getUsersData = async () => {

  try {
    const response = await axios.get(`${guestUrl}`);
    return response;
  } catch (error) {
    console.log('Failed to submitting data to getUsersData API', error.message);
  }
}

export const getSingleUserData = async (id) => {
  try {
    const response = await axios.get(`${guestUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to fetching single data to getSingleUserData API', error.message);
  }
}

export const editUser = async (data, id) => {
  try {
    const response = await axios.put(`${guestUrl}/${id}`, data);
    return response;
  } catch (error) {
    console.log('Failed to updating  data to editUser API', error.message);
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${guestUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Failed to deleting  data by deleteUser API', error.message);
  }
}

export const hospitalSlice = createSlice({
  name: 'user/hospital',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchDepartmentData.pending, state => {
      state.loading = true;
      state.error = '';
    })
      .addCase(fetchDepartmentData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = '';
        state.departmentsData = payload;
      })
      .addCase(fetchDepartmentData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchDoctors.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchDoctors.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = '';
        state.doctorsData = payload;
      })
      .addCase(fetchDoctors.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchPatients.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchPatients.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = '';
        state.patientsData = payload;
      })
      .addCase(fetchPatients.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchUsersData.pending,state=>{
        state.loading=true;
        state.error='';
      })
      .addCase(fetchUsersData.fulfilled,(state,{payload})=>{
          state.loading = false;
          state.error='';
          state.usersData=payload;
      })
      .addCase(fetchUsersData.rejected,(state,{payload})=>{
          state.loading=false;
          state.error=payload;
      })
  }
});