"use client"

import { useState } from "react";
import { usePathname } from "next/navigation"
import { useEffect } from "react";
import WatchCard from "@/components/Other/WatchCard";

export default function Watch(){
    const [videoData, setVideoData] = useState({});
    const url = usePathname();
    const id = decodeURIComponent(url.split("/")[2]);
    useEffect(() => {
    async function find(){
    const data = await fetch("/api/watch",{
        method: "POST",
        body: JSON.stringify(id),
    })
    const useable = await data.json();
    setVideoData(useable);
    }
    find();
    },[id])
    return(
        <WatchCard videoData={videoData} id={id}/>
    )
}