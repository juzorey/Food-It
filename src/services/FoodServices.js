import Client from './api'

export const GetArtists = async() =>{
    try{
        const res = await Client.get("/foods");
        return res.data;
    }catch (error){
        throw error;
    }
}

