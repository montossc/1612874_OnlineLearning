import iteduAPI from "../../API/iteduAPI";


export const getTheme = () => {
    return 'light';
}
export const appVer = '1.0.0';
export const sendFeedback = async (subject, content, token) => {
    let res = ''
    if (subject === '') {
        res = 'Please input the subject'
    }
    else if (content === '') {
        res = 'Please input the content!'
    }
    else {
        await iteduAPI.post('/feedback/create', {subject: subject, content: content}, token).then((response) => {
            if (response.isSuccess){
                res = 'Success! Thank you for your feedback. You can go back to continue using the app!'
            }
            else {
                res = 'Something went wrong! Please try again'
            }
        })
    }
    return res
}
