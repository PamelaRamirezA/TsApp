import {User, ROLES} from './enum';

const currentUser = {
    username: 'pameRamirez',
    role: ROLES.SELLER
}

export const checkAdminRole = () =>{
    if(currentUser.role === ROLES.ADMIN){
        return true;
    }
    return false;
}
console.log (checkAdminRole());

//validamos varios parametros
export const checkRole = (role1: string, role2: string) =>{
    if(currentUser.role === role1){
        return true;
    }
    if(currentUser.role === role2){
        return true;
    }
    return false
}
console.log(checkRole(ROLES.ADMIN, ROLES.CUSTOMER))

//usamos un array como parametro
export const checkRoleV2 = (roles: string []) =>{
    if(roles.includes(currentUser.role)){
        return true;
    }
    return false
}
console.log(checkRoleV2([ROLES.ADMIN, ROLES.CUSTOMER]))

//usamos parametros REST (n cantidad de parametros) que al final lo transformara en un array
export const checkRoleV3 = (...roles: string []) =>{
    if(roles.includes(currentUser.role)){
        return true;
    }
    return false
}
console.log(checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER))
