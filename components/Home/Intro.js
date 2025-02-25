export default function Intro(){
    return(
        <div className="flex items-center py-10 px-24 justify-center gap-4">
            <div className="w-1/2 rounded-lg flex flex-col justify-between py-10 gap-8">
            <h1 className="text-4xl font-bold w-1/2">Stop Scrolling And Start Living Life</h1>
            <p className="text-lg">In a world consumed by endless scrolling, Medio is here to help you break free. We believe life is meant to be experienced, not just watched through a screen. Our platform is designed to inspire real-world connections, meaningful moments, and a healthier digital balance. It’s time to stop scrolling and start truly living, Medio makes it easier than ever.</p>
            <a href="" className="w-28 h-12 bg-primary hover:bg-hover rounded-lg flex justify-center items-center">Start</a>
            </div>
            <div className="flex justify-center items-center w-1/2 rounded-lg">
            <img src="./intro.png" className="h-96 rounded-lg" />
            </div>
        </div>
    )
}