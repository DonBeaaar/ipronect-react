
/* 
    auth:{
        uid:12312412412,
        name: Felipe
    }

*/

import { types } from "../types/types";

export const authReducer = (state = {}, action)=>{

    switch (action.type) {
        case types.authLogin:
            console.log('Entro al reducer');

            return{
                ...state,
                uid: action.uid,
                name: action.name
            }
    
        default:
            return state
    }
}