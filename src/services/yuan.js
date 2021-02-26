import axios from 'axios'

const baseUrl = 'https://yuanproject.herokuapp.com/api/yuans'

let cancelToken

const getAllYuans = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const getYuan = (word) => {
    cancelToken = axios.CancelToken.source();
    const req = axios.get(`${baseUrl}/${word}`, {cancelToken: cancelToken.token})
    return req.then(response => response.data)
}

const yuanService = {
    getAllYuans, 
    getYuan
}

export default yuanService