export const login = (username, password) => {
    if (username === 'montossc'){
        if (password === '290398'){
            return {status: 200}
        }
        else if (password === ''){
            return {status: 404, errorString: 'Please enter the password!'}
        }
        else {
            return {status: 404, errorString: 'Password is incorrect!'}
        }
    }
    else if (username === ''){
        return {status: 404, errorString: 'Please enter username!'}
    }
    else{
        return {status: 404, errorString: 'Username is not existed!'}
    }
}

export const getUserInfo = (username) => {
    const userInfo = {
        username: 'montossc',
        password: '290398',
        fullname: 'Phan Thành Nam',
        avatar: {uri: 'https://ephoto360.com/uploads/worigin/2020/03/23/tao-avatar-mac-dinh-facebook-thay-nen-cuc-hot5e7838ae39057_96eb8aef68a3aa00523448390b49fbcb.jpg'},
        subscription: 'Yearly, expire at 15/05/2021',
        topics: [{name: 'React Native'}, {name:'Java'}, {name:'C#'}, {name:'Unity'}, {name:'Game Design'}]
    }
    return {userInfo: userInfo}
}
