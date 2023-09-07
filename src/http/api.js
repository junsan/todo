import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/tasks/public/api/v1"
})

export default api