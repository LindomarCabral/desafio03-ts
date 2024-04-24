import { api } from "../api"
import { changeLocalStorage } from "./storage"

export const login = async (email: string, password: string): Promise<boolean> => {
    const data: any = await api

    if(email !== data.email || password !== data.password)  {
        return false
    }
    data.login = true
    changeLocalStorage(data)
    return true
}
