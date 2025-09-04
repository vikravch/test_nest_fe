import React, {useEffect, useState} from "react";

export const HomePage: React.FC = ()=>{

    const [currentToken, setCurrentToken] = useState<string>('')

    useEffect(()=>{
        const token = localStorage.getItem('token');
        setCurrentToken(token || '');
    },[])

    return (
        <>
            <h1>Home Page - {currentToken}</h1>
        </>
    )
}
