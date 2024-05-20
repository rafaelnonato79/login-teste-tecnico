import axios, { AxiosResponse } from 'axios';


const api = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/auth"
})


export const useApi = () => ({
    login: async (email: string, password: string) => {
        try{
            const response: AxiosResponse<any> = await api.post('/login/', {email, password},
                {
                    headers: {
                    'Accept': 'application/json;version=v1_web',
                    'Content-Type': 'application/json'
                }
        });
    
        console.log(response.data);
        return response.data.tokens;
    } catch(error){
        console.error("Erro no login", error);
        throw error;
    }
},

    getProfile: async (accessToken: string) => {
        try{
            const response = await api.get('/profile/',{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json;version=v1_web',
                    'Content-Type': 'application/json'
                }
            });
                console.log("status: ",response.status,response.data);
                return response.data; 
        } catch (error) {
            console.log("Erro ao obeter perfil do usuário:", error);
            throw error;
        }
    },
});