import api from './api.js'

const resource = '/tasks'

export const allTask = () => api.get(resource)
