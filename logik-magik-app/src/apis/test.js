import request from './http';
import { BASE_API_URL } from '../config';
const url = BASE_API_URL + ``;

// export async function setAutomationCancellationReturn(data) {
//   try {
//     const response = await request.post(url, data);
//     return response;
//   } catch (err) {
//     return Promise.reject(err);
//   }
// }

export async function testAPI() {
  try {
    const response = await request.get(url);
    if (response.data) {
      return Promise.resolve(response.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
