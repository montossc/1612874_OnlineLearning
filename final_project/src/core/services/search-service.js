import iteduAPI from "../../API/iteduAPI";

export const searchCourses = async (keyword) => {
    let res = []
    await iteduAPI.post('/course/search',{
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
