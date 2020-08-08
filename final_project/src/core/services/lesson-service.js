import iteduAPI from "../../API/iteduAPI";

export const getLessonVideo = async (courseID, lessonID, token) => {
    let res = []
    await iteduAPI.get(`/lesson/video/${courseID}/${lessonID}`, {}, token)
        .then((response) => {
            if (response.isSuccess){
                res = (response.data.payload)
            }
        })
    return res
}
