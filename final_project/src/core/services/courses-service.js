import iteduAPI from "../../API/iteduAPI";
import {getCategoryCourses} from "./category-service";

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
            if (response.isSuccess) {
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
            if (response.isSuccess) {
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
            if (response.isSuccess) {
                res = (response.data.payload);
            }
        })
    return res
}

export const getRecommendCourses = async (id) => {
    let res = []
    await iteduAPI.get(`/user/recommend-course/${id}/20/0`, {})
        .then((response) => {
            if (response.isSuccess) {
                res = (response.data.payload);
            }
        });
    return res
}
export const getNewCourses = async () => {
    let res = []
    await iteduAPI.post('/course/top-new', {limit: 20, page: 1})
        .then((response) => {
            if (response.isSuccess) {
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
                } else {
                    res = (false)
                }
            }
        })
    return res
}

export const getCourseLikedStatus = async (id, token) => {
    let res = []
    await iteduAPI.get(`/user/get-course-like-status/${id}`, {}, token)
        .then((response) => {
            if (response.isSuccess) {
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
    } else if (isOwned === false) {
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

export const rateCourse = async (courseID, rating, comment, token) => {
    await iteduAPI.post('/course/rating-course', {
        courseId: courseID,
        formalityPoint: rating, contentPoint: rating, presentationPoint: rating,
        content: comment
    }, token).then()
}
export const getYourRateCourse = async (courseID, token) => {
    let res = {rating: 0, comment: ''}
    await iteduAPI.get(`/course/get-rating/${courseID}`, {}, token)
        .then((response) => {
            if (response.isSuccess) {
                const courseRate = response.data.payload
                res.rating = (courseRate.formalityPoint + courseRate.contentPoint + courseRate.presentationPoint) / 3
                res.comment = courseRate.content
            }
        });
    return res
}

export const getUsersRateCourse = async (courseID) => {
    let res = []
    await iteduAPI.get(`/course/get-course-detail/${courseID}/${null}`, {})
        .then((response) => {
            const ratingList = response.data.payload.ratings.ratingList;
            ratingList.forEach(rating => {
                const ratingRes = {
                    rate: rating.averagePoint,
                    comment: rating.content,
                    userName: rating.user.name,
                    userAvatar: rating.user.avatar
                }
                res.push(ratingRes)
            })
        })
    return res
}

export const getRalatedCourses = async (courseID, token) => {
    let res = []
    let cateID = []
    await iteduAPI.get(`/course/get-course-info?id=${courseID}`, {}, token)
        .then((response) => {
            if (response.isSuccess){
                cateID = response.data.payload.categoryIds[0]
            }
            })
    await getCategoryCourses(cateID).then((response) => {
        res = response.filter(item => item.id !== courseID)
    })
    return res
}

export const getLastWatchedLesson = async (courseID, token) => {
    let res = []
    await iteduAPI.get(`/course/last-watched-lesson/${courseID}`, {}, token)
        .then((response) => {
            console.log(response)
            if (response.isSuccess){
                const video = {videoUrl: response.data.payload.videoUrl,
                    currentTime: response.data.payload.currentTime,
                isFinish: response.data.payload.isFinish}
                res = {lessonId: response.data.payload.lessonId, video: video}
            }
        })
    return res
}


