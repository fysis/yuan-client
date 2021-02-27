import axios from 'axios'

const baseUrl = process.env.REACT_APP_RESTURL || 'http://localhost:1234/api'

let cancelToken

const getAllYuans = () => {
    const req = axios.get(`${baseUrl}/yuans`)
    return req.then(response => response.data)
}

const getYuan = (word) => {
    cancelToken = axios.CancelToken.source();
    const req = axios.get(`${baseUrl}/yuans/${word}`, {cancelToken: cancelToken.token})
    return req.then(response => response.data)
}

const yuanService = {
    getAllYuans, 
    getYuan
}

export default yuanService