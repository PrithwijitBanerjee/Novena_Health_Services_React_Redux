import axios from "axios";

//Custom Axios .................
export const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_BASE_LIVE_URL
});