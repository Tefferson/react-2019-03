import axios from 'axios'

class HttpService {
    static get(url, config) {
        return axios.get(url, config)
    }
}

export default HttpService