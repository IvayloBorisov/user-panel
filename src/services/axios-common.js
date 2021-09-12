import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODM5MzJiZTU5YmU1MjcwNGMzMGZhOSIsImlhdCI6MTYwNTg3NTc5OCwiZXhwIjoxNjM3NDExNzk4fQ.U83_KnUAkPoI65NPwGyET_4HNiF4Lvd7pl6RLHhWSFM'

const http = axios.create({
    baseURL: 'https://staging.officernd.com/api/v1/organizations/assignment-demo',
    // timeout: 1000,
    headers: {'Authorization': `Bearer ${token}`}
});

export default http;