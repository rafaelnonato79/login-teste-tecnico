import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { clear } from "console";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const authToken = localStorage.getItem('authToken');
            if(authToken){
                try{
                    const profileData = await api.getProfile(authToken);
                    setUser(profileData);
                } catch(error){
                    console.error("Erro ao validar token:", error);
                    clearToken();
                }
            }   
        };
        validateToken();
   }, [api]);

   const login = async(email: string, password: string) => {
    try{
        const tokens = await api.login(email, password);
        setToken(tokens.access);
        const profileData = await api.getProfile(tokens.access);
        setUser(profileData);
        return true;
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        return false;
    }
};

    const logout = async () => {
            setUser(null);
            clearToken();
            window.location.href = window.location.href;
        }

    const setToken = (token: string) => {
         localStorage.setItem('authToken', token);
         console.log(localStorage);
    }

    const clearToken = () => {
        localStorage.removeItem('authToken');
    }

    // const fetchUserProfile = async (token: string) => {
    //     try{
    //         const profileData = await api.getProfile(token);

    //         console.log("Perfil do usuário:", profileData);
    //     }catch (error) {
    //         console.log("Erro ao obter perfil do usuário:", error);
    //     }
    // };


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
