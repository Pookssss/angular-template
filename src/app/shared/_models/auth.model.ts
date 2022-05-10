export interface LoginTicket {
    expires_at: string;
    ticket: string;
}

export interface LoginForm {
    username: string;
    password: string;
    ticket: string;
}

export interface LoginResult {
    token: string;
    type: string;
    resource_key: string;
    username: string;
    name: string;
    group_name: string;
}

export interface VerifyResult {
    token: string;
    type: string;
    moph_user_id: string;
    merchant_id: string;
}
