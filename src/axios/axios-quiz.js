import axios from 'axios';

export default axios.create({
    baseURL: 'https://vladilen-project-1-a5605-default-rtdb.firebaseio.com/'
})