import axios from 'axios';

export default axios.create({
    baseURL: 'https://37f8-182-48-211-139.ngrok-free.app',
    headers: { "ngrok-skip-browser-warning": "true" }
});
