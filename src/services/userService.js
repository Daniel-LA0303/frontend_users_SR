import axios from "axios"

const API_URL = "http://localhost:8080/users";

export const findAll = async () => {

    try {
        const res = await axios.get(API_URL);
        console.log(res.data);
        return res;
    } catch (error) {
        console.log(error);
    }
    return null;


}

export const save = async ({username, email, password }) => {

    try {
        return await axios.post(API_URL, {username, password, email})
    } catch (error) {
        console.log(error);
    }
    return null;
}


export const update = async ({id, username, email }) => {
    try {
        return await axios.put(`${API_URL}/${id}`, {username, email})
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log(error);
    }
    return null;
}