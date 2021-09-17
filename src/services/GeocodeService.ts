import axios from 'axios';
import { Normalize } from '../Utils/Normalize';
import dotenv from 'dotenv';

dotenv.config();

const googleApi = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/json?address='
});

async function geocodeService(address: string, number: string, city: string, uf: string) {
  const coordinates = await googleApi.get(`${Normalize(address)}+${number}+${Normalize(city)}+${uf}&key=${process.env.GKEY}`);
  const { lat, lng } = coordinates.data.results[0].geometry.location;
  return { lat, lng };
  // return coordinates.data;
}

export { geocodeService }
