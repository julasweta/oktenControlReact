import axios, { AxiosInstance, AxiosResponse } from "axios";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const baseURL:string = process.env.REACT_APP_API;
const apiService:AxiosInstance = axios.create({ baseURL });



//прокидуємо токен
apiService.interceptors.request.use(req => {
    const token:string = process.env.REACT_APP_AUTH_TOKEN;

    req.headers.Authorization = token;
    return req
})

export { apiService, baseURL };
export type { IRes };

