import React from 'react';
import { loginStyles } from '../assets/dummyStyles';
import { User } from "lucide-react";

const Login = ({ onLogin, API_URL = " http://localhost:4000 " }) => {
    return (
        <div className={loginStyles.pageContainer}>
            <div className={loginStyles.cardContainer}>
                <div className={loginStyles.header}>
                    <div className={loginStyles.avatar}>
                        <User className=' w-10 h-10 text-white' />
                    </div>
                    <h1 className={loginStyles.headerTitle}>
                        Welcome Back
                    </h1>
                    <p className={loginStyles.headerSubtitle}>
                        Sign in to your Wallet Echo account
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;