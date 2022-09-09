
import sendRequest from './send-request';


export function getJobs(userId) {
  return sendRequest(`/api/jobs/${userId}/index`, 'GET', null);
}
// removed id from createJob
export function createJob(userId, id, payload) {
    return sendRequest(`/api/jobs/${userId}/new/${id}`, 'POST', payload);
}

export function updateJob(userId, id, payload) {
    return sendRequest(`/api/jobs/${userId}/update/${id}`, 'PUT', payload);
}

export function showJob(userId, id) {
    return sendRequest(`/api/jobs/${userId}/show/${id}`, 'GET', null);
}

export function destroy(userId, id) {
    return sendRequest(`/api/jobs/${userId}/delete/${id}`, 'DELETE');
}