import axios from 'axios';

const token = process.env.REACT_APP_AUTHORIZATION_TOKEN;

const http = axios.create({
    baseURL: 'https://staging.officernd.com/api/v1/organizations/assignment-demo',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${token}`}
});

export default http;