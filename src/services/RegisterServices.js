import Client from './api'

export const GetArtists = async() =>{
    try{
        const res = await Client.get("/login/");
        return res.data;
    }catch (error){
        throw error;
    }
}

