import iteduAPI from "../../API/iteduAPI";

export const setVideoTime = async (lessonID, curTime, token) => {
    await iteduAPI.put('/lesson/update-current-time-learn-video', {
        lessonId: lessonID,
        currentTime: curTime
    }, token).then()
}
export const setVideoIsFinished = async (lessonID, token) => {
    await iteduAPI.post('/lesson/update-status', {
        lessonId: lessonID
    }, token).then()
}
