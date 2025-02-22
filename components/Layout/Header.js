"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header(){
    const router = useRouter();
    const [query, setQuery] = useState("");
    function handleSearch(){
        router.push(`/search/${query}`);
    }
    async function handleClick(event){
        if (event.key === "Enter") {
            handleSearch();
        }else{
            return null;
        }
    }
    function handleChange(event){
        setQuery(event.target.value);
    }
    return(
        <div className="flex justify-between items-center py-10 px-24">
        <a href="/" className="flex gap-2 items-center hover:cursor-pointer">
        <img src="/logo.png" className="h-5"/>
        <h1 className="text-2xl font-bold text-white">Medio</h1>
        </a>
        <div className="flex w-full justify-center">
        <input onKeyDown={handleClick} onChange={handleChange} value={query} type="search" placeholder="Search" className="w-1/2 h-10 rounded-lg px-4 bg-black border border-white text-white placeholder-white"/>
        </div>
        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center hover:cursor-pointer">
            M
        </div>
    </div>
    )
}