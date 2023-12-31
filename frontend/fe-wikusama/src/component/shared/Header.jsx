import React from 'react'
import IconUser from "./5856.jpg"


export default class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            role: "",
            email : "",
            username : ""

        }
        
        this.state.role = sessionStorage.getItem("role")
        this.state.email = sessionStorage.getItem("email")
        this.state.username = sessionStorage.getItem("nama_user")
    }
    render() {
        return (
            <header class="header bg-white shadow py-4 px-4">
                <div class="header-content flex items-center flex-row">
                    <form action="#">
                        <div class="hidden md:flex relative">
                        <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>
                        </div> 
                        
                        <div class="flex md:hidden">
                            <a href="#" class="flex items-center justify-center h-10 w-10 border-transparent">
                                <svg
                                    class="h-6 w-6 text-gray-500"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </a>
                        </div>
                    </form>
                    <div class="flex ml-auto">
                        <a href class="flex flex-row items-center">
                            <img
                                src={IconUser}
                                alt=""
                                class="h-10 w-10 bg-gray-200 border rounded-full"
                            />
                            <span class="flex flex-col ml-2">
                                <span class="truncate w-20 font-semibold tracking-wide leading-none">{this.state.username}</span>
                                <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1">{this.state.role}</span>
                            </span>
                        </a>
                    </div>
                </div>
            </header>
        )
    }

}