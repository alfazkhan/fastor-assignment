import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://staging.fastor.in:8090/v1/'
})

export default axios