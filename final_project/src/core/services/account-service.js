import iteduAPI from "../../API/iteduAPI";

export const registerCommand = async (regInputState) => {
    const validPassword = (/^.{8,20}$/).test(regInputState.password); //pass phai co 8-20 ki tu
    const validEmail = (/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm).test(regInputState.email);
    const phoneValid = (/((09|03|07|08|05)+([0-9]{8})\b)/).test(regInputState.phone);

    let response = {message: '', isSuccess: false}

    if ((regInputState.fullname === '') || (regInputState.email === '') || (regInputState.password === '') || (regInputState.confirmPass === '') || (regInputState.phone === '')) {
        response.message = 'Please input empty fields!'
    } else if (validEmail === false) {
        response.message = 'Invalid e-mail type!'
    } else if (validPassword === false) {
        response.message = 'Password must have 8 - 20 characters'
    } else if (regInputState.password !== regInputState.confirmPass) {
        response.message = 'Password and Confirm password do not match!'
    } else if (phoneValid === false) {
        response.message = 'Invalid phone number!'
    } else {
        await iteduAPI.post('/user/register', {
            username: regInputState.fullname,
            email: regInputState.email,
            phone: regInputState.phone,
            password: regInputState.password
        })
            .then((res) => {
                if (res.isSuccess) {
                    response.isSuccess = true;
                } else {
                    response.message = 'Your e-mail/phone has already used, or server has some problems. Please try again!'
                }
            }).catch()
    }
    return response;
}
export const forgotPassCommand = async (email) => {
    let response = {isSuccess: false, message: ''}
    await iteduAPI.post('/user/forget-pass/send-email', {email: email})
        .then((res) => {
            if (res.isSuccess) {
                response.isSuccess = true;
            }
            else {
                response.message = 'The e-mail does not exist in our system. Please try again!'
            }
        })
    return response
}
