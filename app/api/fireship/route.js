export async function POST(req){
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsBjURrPoezykLs9EqgamOA&order=date&maxResults=10&type=video&key=${process.env.YOUTUBE_API_KEY}`;
    const data = await fetch(url);
    const usable = await data.json();
    const items = usable.items;
    console.log(items);
    return new Response(JSON.stringify(items))
}