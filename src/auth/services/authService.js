
export const loginUser = (username, password) => {

    return (username === 'admin' && password === 'admin') ? true : false
}