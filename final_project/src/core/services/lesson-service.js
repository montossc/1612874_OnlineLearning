import iteduAPI from "../../API/iteduAPI";

export const getLessonVideo = async (courseID, lessonID, token) => {
    let res = []
    await iteduAPI.get(`/lesson/video/${courseID}/${lessonID}`, {}, token)
        .then((response) => {
            if (response.isSuccess){
                res = (response.data.payload)
                if (!response.data.payload.currentTime){
                    res.currentTime = 0
                }
                if (!response.data.payload.isFinish){
                    res.isFinish = false
                }
            }
        })
    return res
}
