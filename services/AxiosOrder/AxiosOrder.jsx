import axios from "axios";


const instance = axios.create({
    baseURL: 'http://ec2-13-201-82-187.ap-south-1.compute.amazonaws.com:8080',
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
