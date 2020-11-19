import { useState } from 'react';

/* 
    email: '',
    password: ''

*/

export const useForm = (initialState)=>{


    const [inputValues, setInputValues] = useState(initialState);

    const handleSetInputValues = ({target})=>{
            setInputValues({
                ...inputValues,
                [target.name]: target.value
            })
    }

    
    
    return [inputValues, handleSetInputValues];

}


/* 
    email: 'felipe',
    password: '1234'

*/