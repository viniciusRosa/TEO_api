import axios from 'axios';

const googleApi = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/json?address='
})

export default googleApi;
