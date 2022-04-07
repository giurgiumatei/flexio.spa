import * as qs from 'qs';
import { PathLike } from 'fs';
import { Environment } from '../environment/Environment';

export const apiConfig = {
    returnRejectPromiseOnError: true,
    baseURL: Environment.apiUrl,
    timeout: 30000,
    headers: {
        common: {
            'Cache-Control': 'no-cache, no-store',
            Pragma: 'no-cache',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    },

    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false })
};