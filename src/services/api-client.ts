import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '34f84694e61e458bb20dc590d2a36088'
    }
})