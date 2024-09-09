import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    
    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData)dispatch(login(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name : "
                        placeholder="Enter your Full Name"
                        {...register("name", {
                            required: true
                        })}
                        />
                        <Input
                label="Email : "
                placeholder="Enter your Email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password : "
                type="password"
                placeholder="Enter your Password"
                {...register("password",{
                    required: true
                })}
                />
                <Button type="submit" className="w-full">Create Account</Button>
                    </div>
                </form>
        </div>
    </div>    
  )
}

export default Signup