import axios from 'axios'

let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000/backend/api/'
} else {
    baseUrl = 'https://syntheticus.propulsion-learn.ch/backend/api/'
}

const Axios = axios.create({
    baseURL: baseUrl
})

Axios.defaults.baseURL = baseUrl

export default Axios