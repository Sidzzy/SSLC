import request from './http';
import { BASE_API_URL } from '../config';
//starting of this can either start from 'instructor' / 'student'
const url = BASE_API_URL + `instructor/course`;

export async function setCourses(data) {
  try {
    const response = await request.post(url, data);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function getCourses() {
  try {
    const response = await request.get(url);
    if (response.data) {
      return Promise.resolve(response.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function deleteCourse(id) {
    try {
        const response = await request.delete(`${url}/${id}`);
        if (response.data) {
            return Promise.resolve(response.data);
          }
    } 
    catch (err) {
        return Promise.reject(err);
    }
}
