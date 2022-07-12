export enum ROLES {
    ADMIN = 'admin',
    SELLER='seller',
    CUSTOMER='customer'
}

export type User = {
    username: string;
    role: ROLES;
}

export const user1: User={
    username: 'pame1506',
    role: ROLES.CUSTOMER
} 