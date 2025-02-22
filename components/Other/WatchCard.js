export default function WatchCard({videoData,id}){
return (
    <div className="w-full flex flex-col items-center justify-center items-center gap-8 py-24">
            <h1 className="text-xl font-bold">{videoData.title}</h1>
        <iframe  src={`https://www.youtube.com/embed/${id}?autoplay=1`} className="w-3/5 aspect-video rounded-lg" allow="autoplay" allowFullScreen></iframe>
        <details className="w-1/2 block text-center hover:cursor-pointer">
        <summary>Description</summary>
        <p className="w-full break-words whitespace-pre-line">{videoData.description}</p>
        </details>
    </div>
)
}