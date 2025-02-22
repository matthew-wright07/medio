export default function Card({catagory,href}){
    return(
        <a href={href} className="w-full h-48 flex items-center justify-center border border-white rounded-lg hover:bg-background">
            <h1 className="text-xl font-bold">{catagory}</h1>
        </a>
    )
}