import iteduAPI from "../../API/iteduAPI";

export const getUserInfo = async (token) => {
    let res = []
    await iteduAPI.get('/user/me', {}, token)
        .then((response) => {
            if(response.isSuccess){
                res = (response.data.payload);
            }
        })
    return res
}
export const updateUserInfo = async (fullName, avatar, phoneNum, token) => {
    let res = {avatar: avatar}
    await iteduAPI.put('/user/update-profile', {name: fullName, avatar: avatar, phone: phoneNum}, token)
        .then((response) => {
            if (response.isSuccess){
                res.avatar = (avatar);
            }
        })
    return res
}
