import HttpService from './http.service'

const baseUrl = 'https://jsonplaceholder.typicode.com'

class JsonPlaceholderService {
    static getPosts() {
        return HttpService
            .get(`${baseUrl}/posts`)
            .then(({data}) => data)
    }
}

export default JsonPlaceholderService