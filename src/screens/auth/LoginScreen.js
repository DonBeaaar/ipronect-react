import React from 'react'
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/AuthActions';
import { useForm } from '../../hooks/useForm';
import './auth.css';

const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formInputValues, setFormInputValues] = useForm({
        email: 'felipe@gmail.com',
        password: '1234'
    });

    const {email, password} = formInputValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    }

    return (
        <>
            <div className="container">
                <div className="login-form">
                    {/* Icon */}

                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>

                        <input
                            type="text"
                            className="my-3 form-control"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={setFormInputValues}
                        />
                        <input
                            type="password"
                            className="my-3 form-control"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={setFormInputValues}
                        />

                        <button
                            type="submit"
                            className="mt-2 btn btn-primary btn-block"
                        >
                            Ingresar
                </button>
                    </form>

                </div>



            </div>
        </>
    )
}

export default LoginScreen
