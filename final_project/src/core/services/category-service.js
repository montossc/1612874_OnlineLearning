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
