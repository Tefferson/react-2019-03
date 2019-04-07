import HttpService from './http.service'

const baseUrl = 'https://jsonplaceholder.typicode.com'

class JsonPlaceholderService {
    static getPosts() {
        return HttpService
            .get(`${baseUrl}/posts`)
            .then(({data}) => data)
    }

    static getPhotos(_start, _limit) {
        return HttpService
            .get(`${baseUrl}/photos`, {
            params: {
                _start,
                _limit
            }
        })
            .then(({data}) => data)
    }
}

export default JsonPlaceholderService