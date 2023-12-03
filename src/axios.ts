import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tan-bison-tam.cyclic.app/'
})

export default instance;