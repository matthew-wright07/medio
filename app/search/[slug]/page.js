"use client"

import { useState } from "react";
import { usePathname } from "next/navigation"
import { useEffect } from "react";
import Card from "@/components/Other/SearchCard";

export default function Search(){
    const [items, setItems] = useState([]);
    const url = usePathname();
    console.log(url);
    const id = decodeURIComponent(url.split("/")[2]);
    console.log(id);
    useEffect(()=>{
        async function fetchData(){
        const data = await fetch("/api/search",{
            method: "POST",
            body: JSON.stringify({id}),
          });
          const usable = await data.json();
          setItems(usable);
        }
    fetchData();
    },[id])
    return(
        <div className="w-full flex items-center justify-center items-center">
        <div className="grid grid-cols-2 gap-8 items-center justify-center px-24 py-10">
        {items.map((item)=>{
            return <Card item={item} key={item.id.videoId}/>
        })}
        </div>
        </div>
    )
}