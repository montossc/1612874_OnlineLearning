import iteduAPI from "../../API/iteduAPI";

export const getCategories = async () => {
    let res = {data: [], loading: true}
    await iteduAPI.get('/category/all', {})
        .then((response) => {
            if(response.isSuccess){
                res.data = (response.data.payload);
                res.loading = false;
            }
        })
    return res
}
export const getCategoryByID = async (id) => {
    let res = null
    await iteduAPI.get(`/category/${id}`, {})
        .then((response) => {
            if(response.isSuccess){
                res = (response.data.payload);
            }
        })
    return res
}

export const getCategoryCourses = async (id) => {
    let res = {data: [], loading: true}
    await iteduAPI.post('/course/search', {
        keyword: '',
        opt: {
            category: [`${id}`]
        },
        limit: 20,
        offset: 0
    }). then((response) => {
        if (response.isSuccess){

            res = response.data.payload.rows
        }
    })
    return res
}
