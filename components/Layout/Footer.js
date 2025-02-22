export default function Footer(){
    return(
        <div className="flex justify-between items-center py-10 px-24">
        <a href="/" className="flex gap-2 items-center hover:cursor-pointer">
        <img src="/logo.png" className="h-5"/>
        <h1 className="text-2xl font-bold text-white">Medio</h1>
        </a>
        <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Legal</a></li>
        </ul>
        <p>&copy; Medio 2025</p>
        </div>
    )
}