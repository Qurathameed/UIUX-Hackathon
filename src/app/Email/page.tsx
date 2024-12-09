"use client";
import { useState } from "react";
export default function Email() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (localStorage.getItem(email as string)) {
            setMessage("Already have an account");
        } else {
            localStorage.setItem(email as string, password as string);
            setMessage("Successfully Signed Up!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col mr-5 ml-5  md:flex-row items-center justify-center bg-white">
            <div className="w-full md:w-1/2 p-5">
                <img
                    src="/a9.png"
                    alt="Shopping Cart"
                    className="w-full max-w-md mx-auto h-[500px]"
                />
            </div>
            <div className="w-full md:w-1/2 p-5">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h1 className="text-2xl text-[#2A254B]  font-serif font-bold mb-4">Create an Account</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email or Phone Number
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Account
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow-md">

                            Sign up with Google
                        </button>
                        <p className="mt-4 text-sm">
                            Already have an account?{" "}
                            <a href="/LogIn" className="text-blue-500 hover:underline">
                                Log in
                            </a>
                        </p>
                    </div>
                </form>
                {message && <p className="text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}