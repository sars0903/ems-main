import React, { useState } from 'react'
import { showSuccessToast, showErrorToast } from '../../utils/toastConfig'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        try {
            const loginSuccess = handleLogin(email, password)
            
            if (loginSuccess) {
                const isAdmin = email === "admin@example.com"
                showSuccessToast(isAdmin ? 'Welcome back, Admin! 👋' : 'Successfully logged in!')
                setEmail("")
                setPassword("")
            } else {
                showErrorToast('Invalid credentials. Please try again.')
            }
        } catch (error) {
            showErrorToast('Login failed. Please check your credentials.')
        }
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center  bg-gray-900'>
            <div className='bg-[#1e1e1e] shadow-xl rounded-2xl p-12 w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center mb-8 text-gray-100'>Welcome Back</h2>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-4 transition-all'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-6 transition-all'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login