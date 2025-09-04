import React, {type FormEvent, useRef} from "react";
import {loginUser} from "../data/api.ts";

type Props = {
    onLoginSuccess: ()=>void;
}

export const LoginPage: React.FC<Props> = ({onLoginSuccess})=>{
    const userNameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const onLoginFormSubmit =
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const userName = userNameInput.current?.value || '';
            const password = passwordInput.current?.value || '';
            const loginRes = await loginUser(userName, password);
            if (loginRes) {
                onLoginSuccess();
            }
    }

    return (
        <form onSubmit={onLoginFormSubmit}>
            <input type="text" ref={userNameInput} placeholder={'Username'} />
            <input type="password" ref={passwordInput} placeholder={'Password'} />
            <button type="submit">Login</button>
        </form>
    )
}
