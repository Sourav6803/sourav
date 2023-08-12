import axios from 'axios';


const register = async(userData)=>{
    const responce = await axios.post("http://localhost:9900/register", userData);
    if(responce.data){
        console.log(responce.data)
        return responce.data
    }
}

const login = async(userData)=>{
    const responce = await axios.post("http://localhost:9900/login", userData);
    if(responce.data){
        if (responce.data) {
            localStorage.setItem("customer", JSON.stringify(responce.data))
        }
        return responce.data
    }
}

export const authService = {register, login }