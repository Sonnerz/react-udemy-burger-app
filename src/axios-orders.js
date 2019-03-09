import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-966.firebaseio.com/'
});

export default instance;