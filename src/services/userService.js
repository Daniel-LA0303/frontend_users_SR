import axios from "axios"
import userApi from "../apis/usersApi";

const API_URL = "";

// const config =() => {

//     return{
//         headers: {
//             'Authorization': sessionStorage.getItem('token_useraApp'),
//             'Content-Type': 'application/json'
//         }
//     }
// }

export const findAll = async () => {

    try {
        const res = await userApi.get(API_URL);
        console.log(res.data);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
    // return null;


}

export const save = async ({username, email, password, admin }) => {

    try {
        return await userApi.post(API_URL, {username, password, email, admin})
    } catch (error) {
        console.log(error);
        throw error;
    }
    // return null;
}


export const update = async ({id, username, email, admin }) => {
    try {
        return await userApi.put(`${API_URL}/${id}`, {username, email, admin})
    } catch (error) {
        console.log(error);
        throw error;
    }
    return null;
}

export const remove = async (id) => {
    try {
        await userApi.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log(error);
        throw error;
    }
    return null;
}