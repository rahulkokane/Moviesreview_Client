import axios from 'axios';

export default axios.create({
    baseURL: 'https://baae-114-79-176-38.ngrok-free.app',
    headers: { "ngrok-skip-browser-warning": "true" }
});
