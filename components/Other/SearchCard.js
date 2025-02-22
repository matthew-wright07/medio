export default function SearchCard({item}){
    console.log(item.snippet.description);
return (
    <a href={`/watch/${item.id.videoId}`} className="w-full flex gap-8 hover:bg-background p-4 rounded-lg hover:cursor-pointer">
        <img src={item.snippet.thumbnails.high.url} className="rounded-md w-1/2 aspect-video object-cover"/>
        <div className="flex flex-col gap-4 w-3/5">
        <h1 className="text-xl">{item.snippet.title}</h1>
        <p className="text-gray-400">{item.snippet.channelTitle}</p>
        <p className="text-gray-400">{item.snippet.description}</p>
        </div>
    </a>
)
}