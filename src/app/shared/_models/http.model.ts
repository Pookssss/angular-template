/**
 * API
 */
export interface ApiResult {
    error: any;
    msg: any;
    data: any;
    total: number;
    count: number;
    success: any;
}

/**
 * Pagination
 */
export interface Pagination {
    pageIndex: number;
    pageSize: number;
    pageSizeOption: Array<number>; // [10, 20, 50, 100];
}

/**
 * Http Error
 */
export interface HttpError {
    code: number;
    message: string;
}

export const Err403: HttpError = {
    code: 403,
    message: 'Sorry, you are not authorized to access this page.'
};

export const Err404: HttpError = {
    code: 404,
    message: 'Sorry, the page you visited does not exist.'
};

export const Err500: HttpError = {
    code: 500,
    message: 'Sorry, there is an error on server.'
};

export const Err503: HttpError = {
    code: 503,
    message: 'Sorry, service unavailable.'
};

export interface HttpErr {
    code?: any;
    text?: any;
    url?: any;
    name?: any;
    err?: any;
}
