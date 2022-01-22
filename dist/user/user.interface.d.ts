export interface UserKey {
    id?: string;
}
export interface User extends UserKey {
    id?: string;
    name: string;
    email: string;
    password: string;
}
