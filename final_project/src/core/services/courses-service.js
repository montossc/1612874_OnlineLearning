import iteduAPI from "../../API/iteduAPI";

export const getBookmarkedCourses = async (token) => {
    let res = []
    await iteduAPI.get('/user/get-favorite-courses', {}, token)
        .then((response) => {
            if (response.isSuccess) {
                res = response.data.payload;
            }
        });
    return res;
}
export const getTopSellCourses = async () => {
    let res = []
    await iteduAPI.post('/course/top-sell', {limit: 10, page: 1})
        .then((response) => {
            if (response.isSuccess){
                res = response.data.payload;
            }
        });
    return res;
}
export const getTopRatedCourse = async () => {
    let res = []
    await iteduAPI.post('/course/top-rate', {limit: 10, page: 1})
        .then((response) => {
            // console.log('course service:', response)
            if (response.isSuccess){
                res = response.data.payload;
            }
        })
    return res;
}
export const getProcessingCourses = async (token) => {
    let res = []
    await iteduAPI.get('/user/get-process-courses', {}, token)
        .then((response) => {
            // console.log('course service:', response)
            if (response.isSuccess){
                res = (response.data.payload);
            }
        })
    return res
}

export const getRecommendCourses = async (id) => {
    let res = []
    await iteduAPI.get(`/user/recommend-course/${id}/20/0`,{})
        .then((response) => {
            if(response.isSuccess){
                res = (response.data.payload);
            }
        });
    return res
}
export const getNewCourses = async () => {
    let res = []
    await iteduAPI.post('/course/top-new', {limit: 20, page: 1})
        .then((response) => {
            if(response.isSuccess) {
                res = (response.data.payload);
            }
        })
    return res
}

export const checkOwnedCourse = async (id, token) => {
    let res = []
    await iteduAPI.get(`/user/check-own-course/${id}`, {}, token)
        .then((response) => {
            if (response.isSuccess) {
                if (response.data.payload.isUserOwnCourse) {
                    res = (true)
                }
                else {
                    res = (false)
                }
            }
        })
    return res
}

export const getCourseLikedStatus = async (id, token) => {
    let res = []
    await iteduAPI.get(`/user/get-course-like-status/${id}`,{}, token)
        .then((response) => {
            if (response.isSuccess){
                res = (response.data.likeStatus);

            }
        });
    return res
}

export const getCourseDetail = async (isOwned, id, token) => {
    let res = {data: [], loading: true}
    if (isOwned === true) {
        await iteduAPI.get(`/course/detail-with-lesson/${id}`, {}, token)
            .then((response) => {
                if (response.isSuccess) {
                    res.data = (response.data.payload);
                }
                res.loading = (false);
            });
    }
    else if (isOwned === false) {
        await iteduAPI.get(`/course/get-course-info?id=${id}`, {}, token)
            .then((response) => {
                if (response.isSuccess) {
                    res.data = (response.data.payload);
                }
                res.loading = (false);
            });
    }
    return res
}
