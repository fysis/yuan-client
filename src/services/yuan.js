import axios from 'axios'

const baseUrl = 'https://yuanproject.herokuapp.com/api/yuans'

const getAllYuans = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const getYuan = (word) => {
    const req = axios.get(`${baseUrl}/${word}`)
    return req.then(response => response.data)
}

export default {
    getAllYuans,
    getYuan
}