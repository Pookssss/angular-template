export interface SuperAdminRole {
    seq: number;
    uid: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    account_id: string;
    role_level: number;
}

export interface Account {
    account_id: string;
    last_seen: Date;
    name: string;
    telephone: string;
    uid: string;
    avatar: string;
    tenant_member: CompanyTenantDetail[]; // tenant client
    admin_role: CompanyTenantDetail[]; // tenant account
    super_admin_role: SuperAdminRole; // admin symtem
}

export interface CompanyTenantDetail {
    tenant_name: string;
    tenant_uid: string;
    role_level: number;
}

export interface CheckInPosition {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    timestamp: number;
    place_uid: string;
    comment: string;
}

export interface TimePosition {
    seq: number;
    uid: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: any;
    account_id: string;
    name: string;
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    timestamp: number;
    comment: string;
    tenant_distance: number;
    account?: any;
    tenant_place_uid: string;
    tenant_place?: any;
}

export interface ClockIn {
    work_duration?: any;
    account: Account;
    account_id: string;
    created_at: Date;
    duration?: any;
    end_time: Date;
    end_time_position?: TimePosition;
    mode: string;
    position_lat: number;
    position_long: number;
    position_name: string;
    start_time: Date;
    start_time_position: TimePosition;
    uid: string;
    updated_at: Date;
    vacation: boolean;
}

export interface CheckInLocation {
    uid: string;
    created_at: Date;
    updated_at: Date;
    account_id: string;
    note: string;
    position?: PositionLocation;
}

export interface PositionLocation {
    uid: string;
    name: string;
    lat: number;
    long: number;
    distance: number;
}
