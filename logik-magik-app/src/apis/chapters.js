import request from './http';
import { BASE_API_URL } from '../config';
//starting of this can either start from 'instructor' / 'student'
const url = BASE_API_URL + `instructor/chapters`;

export async function addChapters(data) {
    try {
      const response = await request.put(url, data);
      return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export async function getChapters(courseId) {
    try {
        const response = await request.get(`${url}/${courseId}`);
        return Promise.resolve(response.data);
    } catch(err) {
        return Promise.reject(err);
    }
}