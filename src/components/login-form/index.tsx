"use client";

/* eslint-disable @next/next/no-img-element */
import { api } from '@/services';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

export const LoginForm = () => {
    const router = useRouter();
    
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        };

        const response = await api.post('/auth/login', data, { headers: { 'Content-Type': 'application/json' } });

        if (response.status === 200) {
            router.push('/machines');
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Faça seu login
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Usuário
                </label>
                <div className="mt-2">
                    <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Senha
                    </label>
                    {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Esqueceu a senha?
                    </a>
                    </div> */}
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Entrar
                </button>
                </div>
            </form>

            {/* <p className="mt-10 text-center text-sm text-gray-500">
                Crie sua conta{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                aqui
                </a>
            </p> */}
            </div>
        </div>
    )
}
