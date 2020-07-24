import axios from "axios";

class IteduAPI{
    baseMethod = async (method, pathName, body, authToken) =>  {
        const headers = authToken ? {Authorization: `Bearer ${authToken}`} : null
        return axios({
            method,
            url: `https://api.itedu.me${pathName}`,
            data: body,
            headers
        })
            .then((response) => {
                if (response.status === 200) {
                    return {isSuccess: true, data: response.data, status: response.status}
                }
                else {
                    return {isSuccess: false, status: response.status}
                }
            })
            .catch((error) => {
                return {error: error.response.data}
            })
    }
    get = (pathName, body = undefined, token = undefined) =>
        this.baseMethod('GET', pathName, body, token)
    post = (pathName, body = undefined, token = undefined) =>
        this.baseMethod('POST', pathName, body, token)
    put = (pathName, body = undefined, token = undefined) =>
        this.baseMethod('PUT', pathName, body, token)
    patch = (pathName, body = undefined, token = undefined) =>
        this.baseMethod('PATCH', pathName, body, token)
    delete = (pathName, body = undefined, token = undefined) =>
        this.baseMethod('DELETE', pathName, body, token)
}
const iteduAPI = new IteduAPI()

export default iteduAPI

