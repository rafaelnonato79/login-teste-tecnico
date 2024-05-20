// src/types/User.ts
export interface Avatar {
    high: string;
    id: number;
    low: string;
    medium: string;
}

export interface Role {
    value: number;
    label: string;
}

export interface User {
    id: string;
    name: string;
    last_name: string;
    email: string;
    avatar: Avatar | null;
    role: Role;
    last_login: string;
    staff_role: Role;
}
