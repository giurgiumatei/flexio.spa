import { apiConfig } from './../configs/api';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import AuthService from './auth/authService';
import { msalRequest } from './auth/authConfigs';

class ApiService {
    private _api: AxiosInstance;

    constructor(config: AxiosRequestConfig = apiConfig) {
        this._api = axios.create(config);

        this._api.interceptors.request.use((config: AxiosRequestConfig) => {
            return this.getAccessToken().then(token => {
                config.headers.Authorization = token ? `Bearer ${token}` : '';
                return config;
            });
        });
    }

    private getAccessToken() {
        return AuthService
            .acquireUserToken(msalRequest)
            .then(response => response ? response.accessToken : null);
    }


    public get<
        ResponseDataType,
        Response = AxiosResponse<ResponseDataType>
    >(url: string, config?: AxiosRequestConfig): Promise<Response> {
        return this._api.get(url, config);
    }

    public post<
        ResponseDataType,
        BodyType,
        Response = AxiosResponse<ResponseDataType>
    >(
        url: string,
        data?: BodyType,
        config?: AxiosRequestConfig
    ): Promise<Response> {
        return this._api.post(url, data, config);
    }

    public delete<
        ResponseDataType,
        Response = AxiosResponse<ResponseDataType>
    >(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<Response> {
        return this._api.delete(url, config);
    }

    public put<
        ResponseDataType,
        BodyType,
        Response = AxiosResponse<ResponseDataType>
    >(
        url: string,
        data?: BodyType,
        config?: AxiosRequestConfig
    ): Promise<Response> {
        return this._api.put(url, data, config);
    }

    public onSuccess<T>(response: AxiosResponse<T>): T{
        return response.data;
    }

    public onError<T>(error: AxiosError<T>): void {
        throw error;
    }
}

export default new ApiService();