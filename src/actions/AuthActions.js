
import { types } from "../types/types"


export const startLoginEmailPassword = (email, password) =>{
    

    // Validacion ...
    return (dispatch)=>{

        setTimeout(()=>{
            dispatch(login(123,'Andrés Donoso Cordero'));

        },3000)
    }
}

export const login = (uid,name)=>(
    {
        type: types.authLogin,
        uid,
        name
    }
)