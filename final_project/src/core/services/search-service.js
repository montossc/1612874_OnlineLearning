import iteduAPI from "../../API/iteduAPI";

export const searchCourses = async (keyword, token) => {
    let res = []
    await iteduAPI.post('/course/searchV2',{
        token: token,
        keyword: `${keyword}`,
        limit: 20,
        offset: 0
    }).then((response) => {
        if (response.isSuccess) {
            res = (response.data.payload);
        }
    })
    return res
}

export const getSearchHistory = async (token) => {
    let res = []
    await iteduAPI.get('/course/search-history',{}, token)
        .then((response) => {
        if (response.isSuccess) {
            res = (response.data.payload.data);
        }
    })
    return res
}

export const delSearchHistory = async (id,token) => {
    await iteduAPI.delete(`/course/delete-search-history/${id}`,{}, token).then()
}
