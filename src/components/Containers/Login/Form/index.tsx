import { FormEvent, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { userStarted } from '../../../../store/slices/userSlice';

import { EyeSlashIcon,  } from '@heroicons/react/24/solid'

import { fonts, heading, placeholder, label } from '../constants';

import { User } from '../../../../models/User';

import { useForm } from 'react-hook-form'

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


export function LoginForm() {

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: User) => state.user);

    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [changeVisibleInput, setChangeVisibleInput] = useState<boolean>(false)

    const schema = yup.object().shape({
        customerCPF: yup.string().required().max(11).matches(/^[0-9]+$/)
    })
    
    const { 
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const handlerSubmit = async (customerCPF: string) => dispatch(userStarted({ customerCPF }))

    const changeVisible = (e: FormEvent) => {
        e.preventDefault();
        setChangeVisibleInput(!changeVisibleInput)
    }

    const onChange = () => {    
        if(getValues('customerCPF').length === 11 && errors.customerCPF?.type !== "matches") setIsDisabled(false) 
        else setIsDisabled(true) 
    }


    return (
        <form
            className='flex flex-col justify-center gap-4 '>

            <h1 className={`${fonts.oswald} uppercase text-2xl text-center text-horta-500 mb-4`}>{heading}</h1>
            <label className={`${fonts.openSans} text-aipim-500 text-sm leading-3`} htmlFor="cpf">{label}</label>
            <div className="flex flex-col relative">
                <input
                    type={changeVisibleInput ? 'tel' : 'password'}
                    id="cpf"
                    placeholder={placeholder}
                    aria-invalid={errors.customerCPF ? "true" : "false"}
                    className='border-2 border-[#e0e0e0] p-2 pl-4 rounded-[4px] text-lg w-full outline-transparent aria-[invalid="true"]:border-2 aria-[invalid="true"]:border-red-500'
                    minLength={11}
                    maxLength={11}
                    {...register('customerCPF', { required: true, minLength:11, maxLength: 11, onChange: onChange, pattern: /^[0-9]+$/})}
                />
                
                {(errors.customerCPF?.type === "minLength") && <span role="alert" className='text-red-500 text-sm mt-2'>CPF é inválido</span>}
                {(errors.customerCPF?.type === "required") && <span role="alert" className='text-red-500 text-sm mt-2'>CPF é inválido</span>}
                {(errors.customerCPF?.type === "matches") && <span role="alert" className='text-red-500 text-sm mt-2'>CPF é inválido</span>}
               
                <button onClick={changeVisible} className='absolute right-4 top-3 outline-gray-500'>
                    <EyeSlashIcon className='h-6 w-6 text-gray-300 hover:text-gray-400 transition-all' />
                </button>
            </div>
            <button
                type="submit"
                onClick={handleSubmit(({customerCPF}) => handlerSubmit(customerCPF))}
                className={`${fonts.openSans} bg-horta-500 text-white p-4 rounded-[4px] text-base hover:bg-horta-600 disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed transition-all outline-gray-500`} disabled={isDisabled || isLoading} >

                { isLoading ? (
                    <svg className="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#646464]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                ) : "Rastrear Pedido" }
            </button>
        </form>
    )
}