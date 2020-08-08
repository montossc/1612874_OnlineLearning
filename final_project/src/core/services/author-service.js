import iteduAPI from "../../API/iteduAPI";

export const getAuthorDetail = async (id) => {
    let res = {data: [], loading: true}
    await iteduAPI.get(`/instructor/detail/${id}`)
        .then((response) => {
            if (response.isSuccess) {
                res.data = (response.data.payload)
                res.loading = false
            }
        })
    return res
}

export const getAllAuthor = async () => {
    let res = []
    await iteduAPI.get('/instructor', {})
        .then((response) => {
            if (response.isSuccess){
                res = (response.data.payload)
            }
        })
    return res
}
