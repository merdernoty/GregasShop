import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://tan-bison-tam.cyclic.app/'
    baseURL: 'http://localhost:4444'


})

export default instance;